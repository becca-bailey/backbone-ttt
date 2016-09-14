var Client = require("../app/http/Client");

describe("Client", function() {
  beforeEach(function() {
    mockConfig = require("./mocks/MockConfig");
    client = new Client({config: mockConfig});
  });
  describe("getURL", function() {
    it("returns the URL to get the computer's move based on the config", function() {
      expect(client.getURL()).toEqual("http://production-url.com/api/computer_move/");
    });
  });
});
