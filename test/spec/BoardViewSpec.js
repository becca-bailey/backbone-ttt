define(['../../js/app/views/BoardView', '../../js/app/models/Game'], function(BoardView, Game) {
  describe("BoardView", function() {
    beforeEach(function() {
      game = new Game();
      boardView = new BoardView(game);
    });

    it("exists", function() {
      expect(boardView).toBeDefined();
    });

    it("has a game", function() {
      expect(boardView.game).toEqual(game);
    });

    it("initializes board spots with an equal height and width", function() {
      expect($(".spot").height()).toEqual($(".spot").width());
    });
  });
});
