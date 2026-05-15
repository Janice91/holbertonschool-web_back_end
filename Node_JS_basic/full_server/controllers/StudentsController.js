import { readDatabase } from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    const dbFile = process.argv[2];

    readDatabase(dbFile)
      .then((fields) => {
        let output = 'This is the list of our students\n';

        Object.keys(fields)
          .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
          .forEach((field) => {
            output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
          });

        res.status(200).send(output.trim());
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const dbFile = process.argv[2];

    readDatabase(dbFile)
      .then((fields) => {
        const list = fields[major] || [];
        res.status(200).send(`List: ${list.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}
