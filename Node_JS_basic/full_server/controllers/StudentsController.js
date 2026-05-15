const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    const db = process.argv[2];

    try {
      const data = await readDatabase(db);

      res.write('This is the list of our students\n');

      const keys = Object.keys(data).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      for (const field of keys) {
        res.write(
          `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`
        );
      }

      res.status(200).end();
    } catch (e) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    const db = process.argv[2];

    try {
      const data = await readDatabase(db);
      const list = data[major] || [];
      res.status(200).send(`List: ${list.join(', ')}`);
    } catch (e) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
