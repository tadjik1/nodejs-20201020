const assert = require('assert');
const axios = require('axios');
const app = require('../app');

describe('app tests', () => {
  let server;
  before((done) => {
    server = app.listen(3000, done);
  });

  after((done) => {
    server.close(done);
  });

  it('should respond with "hello"', async () => {
    const response = await axios.get('http://localhost:3000');
    assert.strictEqual(response.data, 'hello');
  });
});