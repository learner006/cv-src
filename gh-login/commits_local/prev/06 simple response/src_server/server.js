const http = require("http");
const path = require("path");
const fs = require("fs");

function say(p_text) {console.log(p_text)}


const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  let s = req.url;
  res.write(`<pre>${s}</pre>`);

  say(req.url);

  if (req.url === '/') {

    let filePath = path.join(__dirname, 'public', 'index.html');

    fs.readFile(filePath, (err, content) => {
      if (!err)
        //say(content);
        res.end(content,'utf8');
        //res.end('aaaaaaaaaaaaaaaaaa');
      else
        res.end();
    });
  }
  else {
    res.end();
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => say(`Server running on port ${PORT}`));
