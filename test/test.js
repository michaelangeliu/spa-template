const http = require("http");
const assert = require("assert");

require("../server.js");

describe('Example Node Server', () => {
  it('should return 200', done => {
    http.get('http://localhost:3000', res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});