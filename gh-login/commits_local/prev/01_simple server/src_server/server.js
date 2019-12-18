function say(p_text) {console.log(p_text)}

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello! :-)</h1>');
  res.end();
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => say(`Server running on port ${PORT}`));
