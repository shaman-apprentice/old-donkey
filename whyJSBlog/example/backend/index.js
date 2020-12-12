const http = require('http');

const quickMath = require('./quickMath');

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
  });


  res.end(JSON.stringify({
    twoPlusTwo: quickMath.twoPlusTwo(),
    minusOne:  quickMath.minusOne(),
  }));
}).listen(3001, () => console.log("listening on port http://localhost:3001"));
