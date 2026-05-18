import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '' && !line.startsWith('firstname'));
      const fields = {};
      lines.forEach((line) => {
        const parts = line.split(',');
        const field = parts[3];
        const firstName = parts[0];
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      });
      resolve(fields);
    });
  });
}

export default readDatabase;
