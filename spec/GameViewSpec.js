var GameView = require('../app/views/GameView');
var HumanVsComputerGame = require('../app/models/HumanVsComputerGame');
var $ = require('jquery');
var MockCompiler = require('./mocks/MockCompiler');

describe("GameView", function() {
  beforeEach(function() {
    compiler = new MockCompiler()
    game = new HumanVsComputerGame({compiler: compiler});
    gameView = new GameView({model: game});
    jasmine.getFixtures().fixturesPath = '../partials';
    jasmine.getFixtures().load('game.html');
  });

  it("exists", function() {
    expect(gameView).toBeDefined();
  });

  it("renders the game when it is initialized", function() {
    expect($("#game")).toBeDefined();
  });

  it("renders the board when it is initialized", function() {
    expect($("#board")).toBeDefined();
  });

  it("renders the status when it is initialized", function() {
    expect($("#status")).toBeDefined();
  });

  it("has a nested boardView", function() {
    expect(gameView.boardView).toBeDefined();
  });

  it("has a nested statusView", function() {
    expect(gameView.statusView).toBeDefined();
  });

  describe("resetGame", function() {
    beforeEach(function() {
      spyOn(gameView.model, "resetAttributes");
      spyOn(gameView.boardView, "enableAllSpots");
      gameView.resetGame();
    });

    it("resets all attributes in the model", function() {
      expect(gameView.model.resetAttributes).toHaveBeenCalled();
    });

    it("enables all spots", function() {
      expect(gameView.boardView.enableAllSpots).toHaveBeenCalled();
    });
  });
}); 
