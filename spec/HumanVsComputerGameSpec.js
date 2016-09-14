var HumanVsComputerGame = require("../app/models/HumanVsComputerGame");
var MockClient = require("./mocks/MockClient");

describe("HumanVsComputerGame", function() {
  var initialBoard = ["", "", "", "", "", "", "", "", ""];
  var player1Move = ["X", "", "", "", "", "", "", "", ""]

  beforeEach(function() {
    client = new MockClient();
    game = new HumanVsComputerGame({client: client});
  });

  describe("makeMove", function() {
    beforeEach(function() {
      spyOn(game, "updateBoard");
      spyOn(game, "changeTurn");
      spyOn(game, "computerMove");
      game.makeMove(0);
    });
  
    it("updates the board", function() {
      expect(game.updateBoard).toHaveBeenCalled();
    });

    it("changes the turn", function() {
      expect(game.changeTurn).toHaveBeenCalled();
    });

    it("calls computer move", function() {
      expect(game.computerMove).toHaveBeenCalled();
    });
  });

  describe("computerMove", function() {
    it("invokes the callback", function() {
      spyOn(game, 'updateGameWithResponseData')
      game.computerMove();
      expect(game.updateGameWithResponseData).toHaveBeenCalled();
    });

    it("updates the board", function() {
      game.computerMove();
      expect(game.get('board')).not.toEqual(initialBoard);
    });

    it("updates the status", function() {
      game.computerMove();
      expect(game.get('status')).toEqual("player1Wins");
    });
  });
  
  describe("updateGameWithResponseData", function() {
    beforeEach(function() {
      game.set({'isXTurn': false});
      response = client.response;
      game.updateGameWithResponseData(response, game);
    });

    it("updates the board based on the response data", function() {
     expect(game.get('board')).toEqual(response.board); 
    });

    it("updates the status based on the response data", function() {
      expect(game.get('status')).toEqual(response.status);
    });

    it("changes the current player", function() {
      expect(game.get('isXTurn')).toBe(true);
    });
  });
});
