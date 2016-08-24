define(['jquery', 'backbone'], function($, Backbone) {
  var BoardView = Backbone.View.extend({
    el: '#board',
    events: {
      "click .spot": "move"
    },

    initialize: function(game) {
      this.game = game;
      $(".spot").height($(".spot").width());
    },

    move: function(e) {
      var spotClicked = $(e.currentTarget);
      if (spotClicked.hasClass("enabled")) {
        spotClicked.removeClass("enabled");
        spotClicked.html(this.game.getCurrentMarker());
        this.game.makeMove(spotClicked.attr("id"));
        this.game.changeTurn();
      }
    }
  });
  return BoardView;
});
