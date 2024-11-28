import { readDatabase } from '../utils.js';

class StudentsController {
    static getAllStudents(req, res) {
        const filePath = process.argv[2]; // Get database file from execution args

        readDatabase(filePath)
            .then((fields) => {
                let response = 'This is the list of our students\n';
                Object.keys(fields)
                    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
                    .forEach((field) => {
                        response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
                    });
                res.status(200).send(response.trim());
            })
            .catch((err) => {
                res.status(500).send(err.message);
            });
    }

    static getAllStudentsByMajor(req, res) {
        const filePath = process.argv[2]; // Get database file from execution args
        const { major } = req.params;

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        readDatabase(filePath)
            .then((fields) => {
                const students = fields[major] || [];
                res.status(200).send(`List: ${students.join(', ')}`);
            })
            .catch((err) => {
                res.status(500).send(err.message);
            });
    }
}

export default StudentsController;
