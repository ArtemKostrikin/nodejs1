const express = require('express');
const app = express();

let countMain = 0;
let countAbout = 0;

app.get('/', (req, res) => {
  countMain++;
  res.send(
    <><h1>Main Page</h1><p>Counter: ${countMain}</p><a href="/about">About Page</a></>
  );
});

app.get('/about', (req, res) => {
  countAbout++;
  res.send(
    <><h1>About Page</h1><p>Counter: ${countAbout}</p><a href="/">Main Page</a></>
  );
});

app.use((req, res) => {
  res.status(404).send('Page not found');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});