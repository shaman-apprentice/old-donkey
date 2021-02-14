const http = require("http")

const { coffeeMakesDevelopersHappySince } = require("./coffee")

http.createServer(function (req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  })

  res.end(JSON.stringify(coffeeMakesDevelopersHappySince))
}).listen(3001, () => console.log("listening on port http://localhost:3001"))
