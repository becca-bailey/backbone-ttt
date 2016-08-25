define(['../../js/app/views/GameView', '../../js/app/models/Game', 'jquery'], function(GameView, Game, $) {
  describe("GameView", function() {
    beforeEach(function() {
      game = new Game();
      gameView = new GameView({model: game});
    });

    it("exists", function() {
      expect(gameView).toBeDefined();
    });

    it("initializes board spots with an equal height and width", function() {
      expect($(".spot").height()).toEqual($(".spot").width());
    });

    describe("resetGame", function() {
      it("resets the model", function() {
        spyOn(game, 'resetAttributes');
        gameView.resetGame();
        expect(game.resetAttributes).toHaveBeenCalled();
      });
      
      it("enables all the spots", function() {
        spyOn(gameView, 'enableAllSpots');
        gameView.resetGame();
        expect(gameView.enableAllSpots).toHaveBeenCalled();
      })
    });
  });
});
