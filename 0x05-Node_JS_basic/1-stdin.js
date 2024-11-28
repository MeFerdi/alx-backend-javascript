const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Flag to check if input is piped
const isPipedInput = !process.stdin.isTTY;

// Listen for user input
rl.on('line', (input) => {
    // Display the user's name
    console.log(`Your name is: ${input}`);
    
    // Close the readline interface after receiving input
    rl.close();
});

// Handle the close event
rl.on('close', () => {
    // Display the closing message only if input was piped
    if (isPipedInput) {
        console.log('This important software is now closing');
    }
});
