const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const db = process.argv[2];

  if (req.url === '/') {
    res.writeHead(200);
    return res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    countStudents(db)
      .then(() => res.end())
      .catch((err) => res.end(err.message));
    return;
  }

  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
