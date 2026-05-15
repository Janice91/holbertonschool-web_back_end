const http = require('http');
const fs = require('fs');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let output = 'This is the list of our students\n';
    try {
      const data = fs.readFileSync(database, 'utf8');
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      output += `Number of students: ${students.length}\n`;
      const fields = {};
      students.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });
      Object.entries(fields).forEach(([field, names]) => {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      });
      res.end(output.trim());
    } catch (e) {
      res.end('Cannot load the database');
    }
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;
