const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

const ENDPOINT_IDS = [
  'oyo', 'delhivery', 'confirmtkt', 'magicbricks', 'myupchar', 'makaan',
  'netmeds', 'lenskart', 'practo', 'goibibo', 'apollopharmacy', 'grab',
  'tllms', 'realestateindia', 'aala', 'flipkart_form',
  'goomo', 'pizzahut', 'ajio', 'altbalaji', 'olx'
];

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, CORS);
    return res.end();
  }
  for (const [k, v] of Object.entries(CORS)) res.setHeader(k, v);

  res.status(200).json({
    ok: true,
    endpoints: ENDPOINT_IDS,
    count: ENDPOINT_IDS.length,
    ts: Date.now()
  });
}
