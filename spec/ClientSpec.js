var Client = require("../app/http/Client");

describe("Client", function() {
  beforeEach(function() {
    mockConfig = require("./mocks/MockConfig");
    client = new Client({config: mockConfig});
  });
  describe("getURL", function() {
    it("returns the URL to get the computer's move based on the config", function() {
      expect(client.getURL("computer")).toEqual("http://production-url.com/api/computer_move/");
    });

    it("returns the URL to check the game status based on the config", function() {
      expect(client.getURL("human")).toEqual("http://production-url.com/api/status/");
    });
  });
});
