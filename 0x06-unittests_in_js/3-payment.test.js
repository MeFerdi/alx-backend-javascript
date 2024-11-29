// 3-payment.test.js
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    let spy;

    beforeEach(() => {
        // Create a spy for the calculateNumber function
        spy = sinon.spy(Utils, 'calculateNumber');
    });

    afterEach(() => {
        // Restore the original method after each test
        spy.restore();
    });

    it('should call Utils.calculateNumber with correct arguments', () => {
        sendPaymentRequestToApi(100, 20);
        
        // Validate that calculateNumber was called with 'SUM', 100, and 20
        sinon.assert.calledWith(spy, 'SUM', 100, 20);
    });

    it('should log the correct total', () => {
        const consoleLogSpy = sinon.spy(console, 'log');
        
        sendPaymentRequestToApi(100, 20);
        
        // Validate that console.log was called with the correct message
        sinon.assert.calledWith(consoleLogSpy, 'The total is: 120');
        
        consoleLogSpy.restore(); // Restore console.log after test
    });
});