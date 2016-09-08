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

  it("renders the board", function() {
    game.updateBoard(newBoard);
    gameView = new GameView({model: game});
    gameView.render();
    expect($("#0").html()).toEqual("<span class=\"human-move\">X</span>");
  });

  describe("move", function() {
    beforeEach(function() {
      spyOn(gameView.model, "makeMove");
      spyOn(gameView.model, "endTurn");
      spyOn(gameView, "disableAllSpots");
      spyOn(gameView, "enableEmptySpots");

      click = {currentTarget: $("#0")};
    });

    it("disables all spots if the spot is enabled", function() {
      gameView.move(click);
      expect(gameView.disableAllSpots).toHaveBeenCalled();
    });

    it("ends the turn", function() {
      gameView.move(click);
      expect(gameView.model.endTurn).toHaveBeenCalled();    
    });

    it("enables all empty spots", function() {
      gameView.move(click);
      expect(gameView.enableEmptySpots).toHaveBeenCalled();
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

