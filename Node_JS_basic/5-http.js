const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const db = process.argv[2];
    countStudents(db)
      .then((fields) => {
        let output = 'This is the list of our students\n';
        output += `Number of students: ${Object.values(fields).reduce((sum, arr) => sum + arr.length, 0)}\n`;
        Object.entries(fields).forEach(([field, students]) => {
          output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        });
        res.end(output.trim());
      })
      .catch((err) => {
        res.end(`This is the list of our students\n${err.message}`);
      });
  }
});

app.listen(1245);

module.exports = app;
