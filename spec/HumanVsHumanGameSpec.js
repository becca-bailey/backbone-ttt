var HumanVsHumanGame = require("../app/models/HumanVsHumanGame");
var MockClient = require("./mocks/MockClient");

describe("HumanVsHumanGame", function() {
  var initialBoard = ["", "", "", "", "", "", "", "", ""];
  var player1Move = ["X", "", "", "", "", "", "", "", ""];

  beforeEach(function() {
    client = new MockClient();
    game = new HumanVsHumanGame({client: client});
  });

  describe("makeMove", function() {
    beforeEach(function() {
      spyOn(game, "updateBoard");
      spyOn(game, "changeTurn");
      game.makeMove(0);
    });

    it("updates the board", function() {
      expect(game.updateBoard).toHaveBeenCalled();
    });

    it("changes the turn", function() {
      expect(game.changeTurn).toHaveBeenCalled();
    });
  });

  describe("updateStatusWithResponseData", function() {
    beforeEach(function() {
      response = client.response;
      game.updateStatusWithResponseData(response, game);
    });

    it("updates the status based on the response data", function() {
      expect(game.get('status')).toEqual(response.status);
    });
  });
});
