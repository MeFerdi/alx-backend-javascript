// 0-console.test.js
const displayMessage = require('./0-console');

describe('displayMessage', () => {
    it('should print the message to console', () => {
        console.log = jest.fn(); // Mock console.log
        const message = "Hello NodeJS!";
        displayMessage(message);
        expect(console.log).toHaveBeenCalledWith(message);
    });
});
