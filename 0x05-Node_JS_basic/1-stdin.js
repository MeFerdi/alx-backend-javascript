// 1-stdin.js

const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Listen for user input
rl.on('line', (input) => {
    // Display the user's name without any additional message
    console.log(`Your name is: ${input}`);
    
    // Close the readline interface after receiving input
    rl.close();
});

// Handle the close event to display the closing message only for piped input
rl.on('close', () => {
    // Check if the input was from a pipe or not
    if (process.stdin.isTTY) {
        console.log('This important software is now closing');
    }
});
