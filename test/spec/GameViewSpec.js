define(['../../js/app/views/GameView', '../../js/app/models/Game'], function(GameView, Game) {
  describe("BoardView", function() {
    beforeEach(function() {
      game = new Game();
      gameView = new GameView(game);
    });

    it("exists", function() {
      expect(gameView).toBeDefined();
    });

    it("has a game", function() {
      expect(gameView.game).toEqual(game);
    });

    it("initializes board spots with an equal height and width", function() {
      expect($(".spot").height()).toEqual($(".spot").width());
    });

    it("can render the board", function() {
      gameView.render();
    });
  });
});
