define(['jquery', 'backbone'], function($, Backbone) {
  var GameView = Backbone.View.extend({
    el: '#board',
    events: {
      "click .spot": "move"
    },

    initialize: function(game) {
      this.game = game;
      $(".spot").height($(".spot").width());
      this.listenTo(game, 'updateBoard', this.render);
    },

    move: function(e) {
      var spotClicked = $(e.currentTarget);
      if (spotClicked.hasClass("enabled")) {
        spotClicked.removeClass("enabled");
        spotClicked.html(this.game.getCurrentMarker());
        this.game.makeMove(spotClicked.attr("id"));
        this.game.changeTurn();
      }
    },

    render: function() {
      for (i = 0; i < 9; i++) {
        board = this.game.get('board')
        $("#" + i).html(board[i]);
      }
    },
  });
  return GameView;
});
