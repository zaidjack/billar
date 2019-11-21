var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Saludos <b>este</b> es el servidor de RICARDO');
}).listen(process.env.PORT);
