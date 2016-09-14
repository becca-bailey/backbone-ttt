var StatusView = require('../app/views/StatusView');
var Game = require('../app/models/Game');
var $ = require('jquery');

describe("StatusView", function() {
  beforeEach(function() {
    game = new Game();
    statusView = new StatusView({model: game});
    jasmine.getFixtures().fixturesPath = '../partials';
    jasmine.getFixtures().load('status.html');
  });

  it("exists", function() {
    expect(statusView).toBeDefined()
  });

  it("renders the status when it is initialized", function() {
    expect($("#status")).toBeDefined()
  });

  describe("showStatus", function() {
    it("displays the game status", function() {
      statusView.model.updateStatus("tie");
      statusView.showStatus();
      expect($("#status").html()).toEqual("It's a tie!")
    });
  });

  describe("getStatusText", function() {
    it("changes the status text based on the game status", function() {
      expect(statusView.getStatusText("tie")).toEqual("It's a tie!");
      expect(statusView.getStatusText("player1Wins")).toEqual("X Wins!");
      expect(statusView.getStatusText("player2Wins")).toEqual("O Wins!");

      statusView.model.set({'isXTurn': true});
      expect(statusView.getStatusText("in progress")).toEqual("Your turn!");
      statusView.model.changeTurn();
      expect(statusView.getStatusText("in progress")).toEqual("Computer is thinking...");
    });
  });
});
