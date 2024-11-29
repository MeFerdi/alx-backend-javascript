const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleLogSpy;
    let calculateNumberStub;

    beforeEach(() => {
        // Spy on console.log
        consoleLogSpy = sinon.spy(console, 'log');
        // Stub Utils.calculateNumber
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    });

    afterEach(() => {
        // Restore the original methods after each test
        consoleLogSpy.restore();
        calculateNumberStub.restore();
    });

    it('should call Utils.calculateNumber with correct arguments', () => {
        calculateNumberStub.returns(120); // Set return value for the stub
        sendPaymentRequestToApi(100, 20);
        
        expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
        expect(calculateNumberStub.callCount).to.equal(1);
    });

    it('should log the correct total', () => {
        calculateNumberStub.returns(120); // Set return value for the stub
        sendPaymentRequestToApi(100, 20);
        
        expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
        expect(consoleLogSpy.callCount).to.equal(1);
    });
});