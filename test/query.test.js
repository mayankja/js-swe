const expect = require('chai').expect;

var query = require('../query');

describe('Test Run', () => {
  it('Test Equipment 4 with start time 04:15 and End Time 20:00 ', async () => {
    const result = await query._getAllSensor('Equipment4', '04:15', '20:00');
    expect(result).to.be.an('array');
    expect(result.length).to.be.equal(2);
  });
});
