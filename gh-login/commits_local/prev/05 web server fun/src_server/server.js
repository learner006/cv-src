function say(p_text) {console.log(p_text)}

const http = require("http");

const server = http.createServer((req, res) => {
//  say(req.rawHeaders);
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello! :-)</h1>');
  //let s = JSON.stringify(req.rawHeaders,null,4);
  //let s = req.rawHeaders;
  let s = req.url;
  res.write(`<pre>${s}</pre>`)
  res.end();
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => say(`Server running on port ${PORT}`));
