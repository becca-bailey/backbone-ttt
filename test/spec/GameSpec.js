define(['../../js/app/models/Game'], function(Game){
  describe("Game", function() {
    beforeEach(function() {
      game = new Game();
    });

    it("is initialized with an empty board", function() {
      var board = game.get('board');
      expect(board).toEqual(["", "", "", "", "", "", "", "", ""]);
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
  });
});
