var Game = require("../app/models/Game");

describe("Game", function() {
  var initialBoard = ["", "", "", "", "", "", "", "", ""];
  var player1Move = ["X", "", "", "", "", "", "", "", ""]

  beforeEach(function() {
    game = new Game();
  });

  it("is initialized with an empty board", function() {
    var board = game.get('board');
    expect(board).toEqual(initialBoard);
  });

  it("is initialized with a status", function() {
    var status = game.get('status');
    expect(status).toEqual("in progress");
  });

  describe("isOver", function() {
    it("returns false if the game is in progress", function() {
      expect(game.get('status')).toEqual("in progress");
      expect(game.isOver()).toBe(false);
    });

    it("returns true if there is a winner", function() {
      game.set({'status': 'player1Wins'});
      expect(game.isOver()).toBe(true);
    });

    it("returns true if there is a tie", function() {
      game.set({'status': 'tie'});
      expect(game.isOver()).toBe(true);
    });
  });

  describe("changeTurn", function() {
    it("toggles the variable isXTurn", function() {
      expect(game.get('isXTurn')).toBe(true);
      game.changeTurn();
      expect(game.get('isXTurn')).toBe(false);
    });
  });

  describe("getCurrentMarker", function() {
    it("returns the current player's marker", function() {
      expect(game.get('isXTurn')).toBe(true);
      expect(game.getCurrentMarker()).toEqual("X");
      game.changeTurn();
      expect(game.get('isXTurn')).toBe(false);
      expect(game.getCurrentMarker()).toEqual("O");
    });
  });

  describe("updateBoard", function() {
    it("updates the board attribute", function() {
      game.updateBoard(player1Move);
      expect(game.get('board')).toEqual(player1Move);
    });
  });

  describe("updateStatus", function() {
    it("updates the status attribute", function() {
      game.updateStatus('player1Wins');
      expect(game.get('status')).toEqual("player1Wins");
    });
  });

  describe("resetAttributes", function() {
    it("resets the board", function() {
      game.updateBoard(player1Move);
      game.resetAttributes();
      expect(game.get('board')).toEqual(initialBoard);
    });

    it("resets the status", function() {
      game.updateStatus("player1Wins");
      game.resetAttributes();
      expect(game.get('status')).toEqual("in progress");
    });
  });
});
