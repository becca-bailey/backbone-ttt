var BoardView = require('../app/views/BoardView');
var HumanVsComputerGame = require('../app/models/HumanVsComputerGame');
var $ = require('jquery');

describe("BoardView", function() {
  var newBoard = ["X", "", "", "", "", "", "", "", ""];

  beforeEach(function() {
    game = new HumanVsComputerGame();
    boardView = new BoardView({model: game});
    jasmine.getFixtures().fixturesPath = '../partials';
    jasmine.getFixtures().load('board.html');
  });

  it("exists", function() {
    expect(boardView).toBeDefined()
  });

  it("renders the board when it is initialized", function() {
    expect($("#board")).toBeDefined()
  });

  describe("showBoard", function() {
    it("renders the board", function() {
      boardView.model.updateBoard(newBoard);
      boardView.showBoard();
      expect($("#0").html()).toEqual("<span class=\"human-move\">X</span>");
    });
  });

  describe("update", function() {
    it("shows the board", function() {
      spyOn(boardView, "showBoard");
      boardView.update();
      expect(boardView.showBoard).toHaveBeenCalled();
    });

    it("disables the spots if the game is over", function() {
      boardView.model.updateStatus("tie");
      spyOn(boardView, "disableAllSpots");
      boardView.update();
      expect(boardView.disableAllSpots).toHaveBeenCalled();
    });

    it("enables the empty spots if the game is in progress", function() {
      spyOn(boardView, "enableEmptySpots");
      boardView.update();
      expect(boardView.enableEmptySpots).toHaveBeenCalled();
    });
  });

  describe("move", function() {
    beforeEach(function() {
      spyOn(boardView.model, "makeMove");
      spyOn(boardView, "disableAllSpots");

      click = {currentTarget: $("#0")};
    });

    it("disables all spots if the spot is enabled", function() {
      boardView.move(click);
      expect(boardView.disableAllSpots).toHaveBeenCalled();
    });

    it("updates the model if the spot is enabled", function() {
      boardView.move(click);
      expect($("#0")).toHaveClass("enabled");
      expect(boardView.model.makeMove).toHaveBeenCalled();
    });

    it("does not update the model if the spot is disabled", function() {
      $("#0").removeClass("enabled");
      boardView.move(click);
      expect(boardView.model.makeMove).not.toHaveBeenCalled();
    });
  });

  describe("disableAllSpots", function() {
    it("disables the spots on the board", function() {
      boardView.disableAllSpots();
      for (i = 0; i < 9; i++) {
        expect($("#" + i)).not.toHaveClass("enabled");
      }
    });
  });

  describe("enableAllSpots", function() {
    it("enables the spots on the board", function() {
      boardView.disableAllSpots();
      boardView.enableAllSpots();
      for (i = 0; i < 9; i++) {
        expect($("#" + i)).toHaveClass("enabled");
      }
    });
  });

  describe("enableEmptySpots", function() {
    beforeEach(function() {
      boardView.model.updateBoard(newBoard);
      boardView.render();
      boardView.disableAllSpots();
      boardView.enableEmptySpots();
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
      expect(boardView.getMarkerHTML('X')).toEqual(humanMove);
      expect(boardView.getMarkerHTML('O')).toEqual(computerMove);
    });
  });

});
