export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  const r = await fetch(
    'https://api.jsonbin.io/v3/b/6a22bc34f5f4af5e29bd93f6/latest',
    { headers: { 
      'X-Master-Key': '$2a$10$QbynTV6y5XMtmIU3k8GR0evYPFbpwrTPKsOqQEdoxj3KBc7koTiC2',
      'X-Bin-Meta': 'false'
    }}
  );
  const data = await r.json();
  res.status(200).json(data);
}
