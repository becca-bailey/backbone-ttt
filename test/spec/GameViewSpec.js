define(['../../js/app/views/GameView', '../../js/app/models/Game', 'jquery'], function(GameView, Game, $) {
  describe("GameView", function() {
    beforeEach(function() {
      game = new Game();
      gameView = new GameView(game);
      spyOn(gameView, 'render');
      spyOn(game, 'updateBoard');
    });

    it("exists", function() {
      expect(gameView).toBeDefined();
    });

    it("initializes board spots with an equal height and width", function() {
      expect($(".spot").height()).toEqual($(".spot").width());
    });

    // it("listens for 'change' events in the model", function() {
    //   game.makeMove(0);
    //   expect(game.updateBoard).toHaveBeenCalled();
    // });
  });
});
