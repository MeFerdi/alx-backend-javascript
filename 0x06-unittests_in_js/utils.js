// utils.js
const Utils = {
    calculateNumber: function(type, a, b) {
        if (type === 'SUM') {
            return a + b;
        }
        // You can add more operations here (e.g., SUBTRACT, MULTIPLY, etc.)
        return 0;
    }
};

module.exports = Utils;