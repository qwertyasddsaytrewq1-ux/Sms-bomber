const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

// Must match the array in bomb.js exactly
const ENDPOINTS = [
  { id: 'apna_employer', type: 'sms' },
  { id: 'khatabook', type: 'sms' },
  { id: 'flipkart_form', type: 'sms' },
  { id: 'people_group', type: 'sms' },
  { id: 'oyo_sms', type: 'sms' },
  { id: 'delhivery', type: 'sms' },
  { id: 'practo', type: 'sms' },
  { id: 'realestateindia', type: 'sms' },
  { id: 'myntra', type: 'sms' },
  { id: 'countrydelight', type: 'sms' },
  { id: 'mobikwik', type: 'sms' },
  { id: 'magicbricks_call', type: 'call' },
  { id: 'myupchar_call', type: 'call' },
  { id: 'swiggy', type: 'sms' },
  { id: 'zomato', type: 'sms' },
  { id: 'paytm', type: 'sms' },
  { id: 'phonepe', type: 'sms' },
  { id: 'cred', type: 'sms' },
  { id: 'makemytrip', type: 'sms' },
  { id: 'goibibo', type: 'sms' },
  { id: 'bookmyshow', type: 'sms' },
  { id: 'netmeds', type: 'sms' },
  { id: 'lenskart', type: 'sms' },
  { id: 'apollopharmacy', type: 'sms' },
  { id: 'jiomart', type: 'sms' },
  { id: 'bigbasket', type: 'sms' },
  { id: 'blinkit', type: 'sms' },
  { id: 'zepto', type: 'sms' },
  { id: 'naukri', type: 'sms' },
  { id: 'snapdeal', type: 'sms' },
  { id: '1mg', type: 'sms' },
  { id: 'healthkart', type: 'sms' },
  { id: 'urbancompany', type: 'sms' },
  { id: 'meesho', type: 'sms' },
  { id: 'cars24', type: 'sms' },
  { id: 'policybazaar', type: 'sms' },
  { id: 'acko', type: 'sms' },
  { id: 'godigit', type: 'sms' },
  { id: 'unacademy', type: 'sms' },
  { id: 'vedantu', type: 'sms' },
  { id: 'toppr', type: 'sms' },
  { id: 'penpencil', type: 'sms' },
  { id: 'tata_neu', type: 'sms' },
  { id: 'hindustantimes', type: 'sms' },
  { id: 'adda247', type: 'sms' },
  { id: 'maruti_suzuki', type: 'sms' },
  { id: 'olx', type: 'sms' },
  { id: 'quikr', type: 'sms' },
  { id: 'grab', type: 'sms' },
  { id: 'goomo', type: 'sms' },
  { id: 'pizzahut', type: 'sms' },
  { id: 'ajio', type: 'sms' },
  { id: 'altbalaji', type: 'sms' },
  { id: 'aala', type: 'sms' },
  { id: 'tllms', type: 'sms' }
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
    ts: Date.now()
  });
}
