var GameView = require('../app/views/GameView');
var Game = require('../app/models/Game');
var $ = require('jquery');

describe("GameView", function() {
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
    game.updateBoard(["X", "", "", "", "", "", "", "", ""]);
    gameView = new GameView({model: game});
    gameView.render();
    expect($("#0").html()).toEqual("<span class=\"human-move\">X</span>");
  });

  it("enables the spots on the board", function() {
    $("#0").removeClass("enabled");
    expect($("#0")).not.toHaveClass("enabled");
    gameView.enableAllSpots();
    expect($("#0")).toHaveClass("enabled");
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
    it("resets all attributes in the model", function() {
      spyOn(gameView.model, "resetAttributes");
      gameView.resetGame();
      expect(gameView.model.resetAttributes).toHaveBeenCalled();
    });
  });
});

