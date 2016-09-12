var GameView = require('../app/views/GameView');
var Game = require('../app/models/Game');
var $ = require('jquery');

describe("GameView", function() {
  var newBoard = ["X", "", "", "", "", "", "", "", ""];

  beforeEach(function() {
    game = new Game();
    gameView = new GameView({model: game});
    jasmine.getFixtures().fixturesPath = './spec/fixtures';
    jasmine.getFixtures().load('board.html');
  });

  it("exists", function() {
    expect(gameView).toBeDefined()
  });

  describe("render", function() {
    it("renders the board", function() {
      gameView.model.updateBoard(newBoard);
      gameView.render();
      expect($("#0").html()).toEqual("<span class=\"human-move\">X</span>");
    });
  });

  describe("displayGameStatus", function() {
    it("updates the game status based on the model", function() {
      gameView.model.updateStatus("tie");
      gameView.displayGameStatus();
      expect($("#status").html()).toEqual("It's a tie!");
    });
  });

  describe("checkGameStatus", function() {
    it("displays the game status", function() {
      spyOn(gameView, "displayGameStatus");
      gameView.checkGameStatus();
      expect(gameView.displayGameStatus).toHaveBeenCalled();
    });

    it("disables the spots if the game is over", function() {
      spyOn(gameView, "disableAllSpots");
      gameView.model.updateStatus("player1Wins");
      gameView.checkGameStatus();
      expect(gameView.disableAllSpots).toHaveBeenCalled();
    });
  });

  describe("getStatusText", function() {
    it("changes the status text based on the game status", function() {
      expect(gameView.getStatusText("tie")).toEqual("It's a tie!");
      expect(gameView.getStatusText("player1Wins")).toEqual("X Wins!");
      expect(gameView.getStatusText("player2Wins")).toEqual("O Wins!");
      expect(gameView.getStatusText("in progress")).toEqual("Your turn!");
    });
  });

  describe("move", function() {
    beforeEach(function() {
      spyOn(gameView.model, "makeMove");
      spyOn(gameView, "disableAllSpots");

      click = {currentTarget: $("#0")};
    });

    it("disables all spots if the spot is enabled", function() {
      gameView.move(click);
      expect(gameView.disableAllSpots).toHaveBeenCalled();
    });

    it("updates the model if the spot is enabled", function() {
      gameView.move(click);
      expect($("#0")).toHaveClass("enabled");
      expect(gameView.model.makeMove).toHaveBeenCalled();
    });

    it("does not update the model if the spot is disabled", function() {
      $("#0").removeClass("enabled");
      gameView.move(click);
      expect(gameView.model.makeMove).not.toHaveBeenCalled();
    });

  });

  describe("disableAllSpots", function() {
    it("disables the spots on the board", function() {
      gameView.disableAllSpots();
      for (i = 0; i < 9; i++) {
        expect($("#" + i)).not.toHaveClass("enabled");
      }
    });
  });

  describe("enableAllSpots", function() {
    it("enables the spots on the board", function() {
      gameView.disableAllSpots();
      gameView.enableAllSpots();
      for (i = 0; i < 9; i++) {
        expect($("#" + i)).toHaveClass("enabled");
      }
    });
  });

  describe("enableEmptySpots", function() {
    beforeEach(function() {
      gameView.model.updateBoard(newBoard);
      gameView.render();
      gameView.disableAllSpots();
      gameView.enableEmptySpots();
    });      

    it("enables only empty spots on the board", function() {
      expect($("#0")).not.toHaveClass("enabled");
      expect($("#1")).toHaveClass("enabled");
    });
  });

  describe("getMarkerHTML", function() {
    it("returns a marker wrapped with the appropriate classname", function() {
      var humanMove = "<span class=human-move>X</span>";
      var computerMove = "<span class=computer-move>O</span>";
      expect(gameView.getMarkerHTML('X')).toEqual(humanMove);
      expect(gameView.getMarkerHTML('O')).toEqual(computerMove);
    });
  });

  describe("resetGame", function() {
    beforeEach(function() {
      spyOn(gameView.model, "resetAttributes");
      spyOn(gameView, "enableAllSpots");
      gameView.resetGame();
    });

    it("resets all attributes in the model", function() {
      expect(gameView.model.resetAttributes).toHaveBeenCalled();
    });

    it("enables all spots", function() {
      expect(gameView.enableAllSpots).toHaveBeenCalled();
    });
  });
});

