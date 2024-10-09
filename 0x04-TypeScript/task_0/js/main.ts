// 1. Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// 2. Create two students using the interface
const student1: Student = {
    firstName: "Fana",
    lastName: "Waweru",
    age: 21,
    location: "Isiolo"
};

const student2: Student = {
    firstName: "Ferdinand",
    lastName: "Odhiambo",
    age: 22,
    location: "Kisumu"
};

// 3. Create an array named studentsList containing the two students
const studentsList: Student[] = [student1, student2];

// 4. Render a table using Vanilla JavaScript
const body = document.body;

// Create a table element
const table = document.createElement("table");

// Create the table header
const headerRow = document.createElement("tr");
const headerName = document.createElement("th");
headerName.textContent = "First Name";
const headerLocation = document.createElement("th");
headerLocation.textContent = "Location";
headerRow.appendChild(headerName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

// For each student in studentsList, create a row in the table
studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;
    row.appendChild(nameCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    table.appendChild(row);
});

// Append the table to the body
body.appendChild(table);
