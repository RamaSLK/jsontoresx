const http = require('http');
const resx = require('resx');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

let xml = 'default';
try {
  const data = fs.readFileSync('<JSON FILE PATH. Ex: C://NewFolder//test.json>')
  resx.js2resx(JSON.parse(data))
  .then((res) => {
    console.log(res);
    xml = res;

    try {
      fs.writeFileSync('<OUTPUT FILE PATH. Ex: C://NewFolder//test.resx>', xml)
      console.log('file written successfully')
    } catch (err) {
      console.error(err)
    }

  })
  .catch((err)=>{
    console.log(err)
  })
} catch (err) {
  console.error(err)
}



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'utf-8');
  res.end(xml);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

