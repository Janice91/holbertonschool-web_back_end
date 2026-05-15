const express = require('express');
const fs = require('fs');

const app = express();
const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
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
    res.send(output.trim());
  } catch (e) {
    res.send(output + 'Cannot load the database');
  }
});

app.listen(1245);

module.exports = app;
