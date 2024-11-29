// 4-payment.test.js
const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let calculateNumberStub;
    let consoleLogSpy;

    beforeEach(() => {
        // Stub Utils.calculateNumber to always return 10
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        // Spy on console.log
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore the stub and spy after each test
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });

    it('should call Utils.calculateNumber with correct arguments', () => {
        sendPaymentRequestToApi(100, 20);
        
        // Verify that calculateNumber was called with 'SUM', 100, and 20
        expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
        expect(calculateNumberStub.callCount).to.equal(1);
    });

    it('should log the correct total', () => {
        sendPaymentRequestToApi(100, 20);
        
        // Verify that console.log was called with the correct message
        expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
        expect(consoleLogSpy.callCount).to.equal(1);
    });
});