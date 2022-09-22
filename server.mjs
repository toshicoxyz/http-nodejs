import { createServer } from 'http';

createServer((req, res) => {
  res.write('Pedro XD!');
  res.end();
}).listen(process.env.PORT);
