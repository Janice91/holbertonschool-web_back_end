const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const db = process.argv[2];
  countStudents(db)
    .then((fields) => {
      let output = 'This is the list of our students\n';
      output += `Number of students: ${Object.values(fields).reduce((sum, arr) => sum + arr.length, 0)}\n`;
      Object.entries(fields).forEach(([field, students]) => {
        output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });
      res.send(output.trim());
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(1245);

module.exports = app;
