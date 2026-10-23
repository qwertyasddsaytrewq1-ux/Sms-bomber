const CORS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };

const ENDPOINT_IDS = [
  'apna_employer', 'khatabook', 'flipkart_form', 'people_group',
  'oyo_sms', 'delhivery', 'practo', 'realestateindia', 'myntra', 'countrydelight', 'mobikwik',
  'magicbricks_call', 'myupchar_call',
  'swiggy', 'zomato', 'paytm', 'phonepe', 'cred', 'makemytrip', 'goibibo', 'bookmyshow',
  'netmeds', 'lenskart', 'apollopharmacy', 'jiomart', 'bigbasket', 'blinkit', 'zepto',
  'naukri', 'snapdeal', '1mg', 'healthkart', 'urbancompany', 'meesho', 'cars24',
  'policybazaar', 'acko', 'godigit', 'unacademy', 'vedantu', 'toppr', 'penpencil',
  'tata_neu', 'hindustantimes', 'adda247', 'maruti_suzuki', 'olx', 'quikr', 'grab',
  'goomo', 'pizzahut', 'ajio', 'altbalaji', 'aala', 'tllms'
];

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') { res.writeHead(204, CORS); return res.end(); }
  for (const [k, v] of Object.entries(CORS)) res.setHeader(k, v);
  res.status(200).json({ ok: true, endpoints: ENDPOINT_IDS, count: ENDPOINT_IDS.length, ts: Date.now() });
}
