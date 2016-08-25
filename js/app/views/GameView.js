define(['jquery', 'backbone'], function($, Backbone) {
  var GameView = Backbone.View.extend({
    el: '#board',
    events: {
      "click .spot": "move"
    },

    initialize: function() {
      $(".spot").height($(".spot").width());
      this.listenTo(this.model, 'updateBoard', this.render);
    },

    move: function(e) {
      var spotClicked = $(e.currentTarget);
      if (spotClicked.hasClass("enabled")) {
        spotClicked.removeClass("enabled");
        this.model.makeMove(spotClicked.attr("id"));
        this.model.changeTurn();
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
    }
  });
  return GameView;
});
