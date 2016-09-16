var StatusView = require('../app/views/StatusView');
var HumanVsComputerGame = require('../app/models/HumanVsComputerGame');
var HumanVsHumanGame = require('../app/models/HumanVsHumanGame');
var $ = require('jquery');
var HandlebarsCompiler = require('../app/http/HandlebarsCompiler');
messages = require('../config/UIConfig').statusMessages

describe("StatusView", function() {
  beforeEach(function() {
    compiler = new HandlebarsCompiler();
    game = new HumanVsComputerGame({compiler: compiler});
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
      expect($("#status").html()).toEqual(messages.tie)
    });
  });

  describe("getStatusText", function() {
    it("changes the winning text based on the game status", function() {
      expect(statusView.getStatusText("tie")).toEqual(messages.tie);
      expect(statusView.getStatusText("player1Wins")).toEqual(messages.player1Wins);
      expect(statusView.getStatusText("player2Wins")).toEqual(messages.player2Wins);
    });


    it("returns in-progress text for a human vs. computer game", function() {
      statusView.model.set({'isXTurn': true});
      expect(statusView.getStatusText("in progress")).toEqual(messages.humanTurn);
      statusView.model.changeTurn();
      expect(statusView.getStatusText("in progress")).toEqual(messages.computerTurn);
    });

    it("returns in-progress text for a human vs. human game", function() {
      var hvhgame = new HumanVsHumanGame({compiler: compiler});
      statusView = new StatusView({model: hvhgame});
      
      statusView.model.set({'isXTurn': true});
      expect(statusView.getStatusText("in progress")).toEqual(messages.xTurn);
      statusView.model.changeTurn();
      expect(statusView.getStatusText("in progress")).toEqual(messages.oTurn);
    });
  });
});
