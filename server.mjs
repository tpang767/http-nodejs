import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello Trevor Shih!');
  res.end();
}).listen(process.env.PORT);
