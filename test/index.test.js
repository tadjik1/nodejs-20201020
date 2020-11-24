const sum = require('../index');
const assert = require('assert');

describe('function sum', () => {
  it('should sum 2 numbers', () => {
    assert.strictEqual(sum(1, 2), 3);
  });
});