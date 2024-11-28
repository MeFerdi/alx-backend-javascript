const fs = require('fs');

function countStudents(path) {
    try {
        // Read the file synchronously
        const data = fs.readFileSync(path, 'utf-8');

        // Split the data into lines and filter out empty lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        // Check if there are enough lines for headers and data
        if (lines.length <= 1) {
            throw new Error('Cannot load the database');
        }

        // Extract the headers and student data
        const headers = lines[0].split(',');
        const students = lines.slice(1).map((line) => line.split(','));

        // Filter out invalid rows (e.g., not matching the headers length)
        const validStudents = students.filter((student) => student.length === headers.length);

        console.log(`Number of students: ${validStudents.length}`);

        // Group students by their field
        const fieldMap = {};
        validStudents.forEach((student) => {
            const field = student[3]; // Assuming "field" is the 4th column
            if (!fieldMap[field]) {
                fieldMap[field] = [];
            }
            fieldMap[field].push(student[0]); // Collect first names
        });

        // Log the number of students in each field
        for (const [field, firstNames] of Object.entries(fieldMap)) {
            console.log(`Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`);
        }
    } catch (err) {
        // Handle file reading errors or other issues
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
