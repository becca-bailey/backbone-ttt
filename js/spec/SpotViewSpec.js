define(['../application/views/SpotView', '../application/models/Game'], function(SpotView, Game) {
  describe("SpotView", function() {
    beforeEach(function() {
      game = new Game();
      spotView = new SpotView(game);
    });

    it("exists", function() {
      expect(spotView).toBeDefined();
    });

    it("has a game", function() {
      expect(spotView.game).toEqual(game);
    });

    it("initializes board spots with an equal height and width", function() {
      expect(spotView.$el.height()).toEqual(spotView.$el.width());
    });
  });
});
