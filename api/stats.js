const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

const ENDPOINT_IDS = [
  'zomato','swiggy','dominos','pizzahut','kfc','mcdonalds','box8','faasos','behrouz',
  'flipkart','myntra','nykaa','ajio','meesho','snapdeal','tatacliq','firstcry',
  'lenskart','pepperfry','croma','reliancedigital',
  'bigbasket','blinkit','zepto','jiomart','licious','countrydelight',
  'ola','rapido','dunzo','porter','blusmart',
  'paytm','mobikwik','freecharge','cred','jupiter','fi','bharatpe',
  'makemytrip','goibibo','cleartrip','yatra','ixigo','redbus','oyo','treebo',
  'bookmyshow','pvrcinemas','inox','zee5','sonyliv','gaana',
  'practo','pharmeasy','netmeds','apollopharmacy','cultfit',
  'unacademy','vedantu','toppr',
  'urbancompany','nobroker','livspace','housejoy',
  'cars24','cardekho','spinny','policybazaar','acko','godigit',
  'shaadi','jeevansathi','bharatmatrimony','aisle'
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