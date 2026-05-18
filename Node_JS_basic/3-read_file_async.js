const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '' && !line.startsWith('firstname'));
      console.log(`Number of students: ${lines.length}`);
      const fields = {};
      lines.forEach((line) => {
        const parts = line.split(',');
        const field = parts[3];
        const firstName = parts[0];
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      });
      Object.entries(fields).forEach(([field, students]) => {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      });
      resolve(fields);
    });
  });
}

module.exports = countStudents;
