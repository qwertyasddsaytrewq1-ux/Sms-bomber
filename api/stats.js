const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

const ENDPOINTS = [
  // call
  { id: 'magicbricks_call', type: 'call' },
  { id: 'myupchar_call', type: 'call' },
  { id: 'oyo_call', type: 'call' },
  { id: 'flipkart_call', type: 'call' },
  { id: 'makaan_call', type: 'call' },
  // sms — confirmed working
  { id: 'oyo_sms', type: 'sms' },
  { id: 'delhivery', type: 'sms' },
  { id: 'practo', type: 'sms' },
  { id: 'realestateindia', type: 'sms' },
  { id: 'flipkart_form', type: 'sms' },
  // sms — new
  { id: 'naukri', type: 'sms' },
  { id: 'quikr', type: 'sms' },
  { id: 'snapdeal', type: 'sms' },
  { id: 'tata_1mg', type: 'sms' },
  { id: 'penpencil', type: 'sms' },
  { id: 'healthkart', type: 'sms' },
  { id: 'tata_neu', type: 'sms' },
  { id: 'urbancompany', type: 'sms' },
  { id: 'meesho_form', type: 'sms' },
  { id: 'jiomart', type: 'sms' },
  { id: 'hindustantimes', type: 'sms' },
  { id: 'adda247', type: 'sms' },
  { id: 'maruti_suzuki', type: 'sms' }
];

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, CORS);
    return res.end();
  }
  for (const [k, v] of Object.entries(CORS)) res.setHeader(k, v);

  res.status(200).json({
    ok: true,
    endpoints: ENDPOINTS,
    count: ENDPOINTS.length,
    callCount: ENDPOINTS.filter(e => e.type === 'call').length,
    smsCount: ENDPOINTS.filter(e => e.type === 'sms').length,
    ts: Date.now()
  });
}
