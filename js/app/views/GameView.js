define(['jquery', 'backbone'], function($, Backbone) {
  var GameView = Backbone.View.extend({
    el: '#game',
    events: {
      "click .spot": "move",
      "click #play-again": "resetGame"
    },

    initialize: function() {
      $(".spot").height($(".spot").width());
      this.listenTo(this.model, 'change', this.render);
    },

    move: function(e) {
      var spotClicked = $(e.currentTarget);
      if (spotClicked.hasClass("enabled")) {
        spotClicked.removeClass("enabled");
        this.model.makeMove(spotClicked.attr("id"));
        this.model.nextTurn();
      }
    },

    render: function() {
      for (i = 0; i < 9; i++) {
        var marker = this.model.get('board')[i]
        $("#" + i).html(this.getMarkerHTML(marker));
      }
    },

    getMarkerHTML: function(marker) {
      var htmlclass = marker === "X" ? "human-move" : "computer-move";
      return ("<span class=" + htmlclass + ">" + marker + "</span>");
    },

    resetGame: function() {
      this.model.resetAttributes();
      this.enableAllSpots();
    },

    enableAllSpots: function() {
      for (i = 0; i < 9; i++) {
        var $spot = $("#" + i);
        if (!$spot.hasClass("enabled")) {
          $spot.addClass("enabled");
        }
      }
    }
  });
  return GameView;
});
