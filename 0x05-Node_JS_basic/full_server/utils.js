import fs from 'fs';

export function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.split('\n').filter((line) => line.trim() !== '');
            const headers = lines[0].split(',');

            if (headers.length < 4) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const students = lines.slice(1).map((line) => line.split(',')).filter((row) => row.length === headers.length);
            const fields = {};

            students.forEach(([firstname, , , field]) => {
                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(firstname);
            });

            resolve(fields);
        });
    });
}
