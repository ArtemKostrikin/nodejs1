const http = require('http');

let countMain = 0;
let countAbout = 0;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    countMain++;
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(
      ('<h1>Main Page</h1>')
      ('<p>Counter: ${countMain}</p>')
      ('<a href="/about">About Page</a>')
    );
  } else if (req.url === '/about') {
    countAbout++;
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(
      ('<h1>About Page</h1>')
      ('<p>Counter: ${countAbout}</p>')
      ('<a href="/">Main Page</a>')
    );
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end('<h1>Page not found!</h1>');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
