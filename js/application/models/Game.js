define(['jquery', 'backbone'], function($, Backbone) {
  var Game = Backbone.Model.extend({
    defaults: {
      board: ["", "", "", "", "", "", "", "", ""],
      status: "in progress"
    },
    initialize: function() {

    },
    isOver: function() {
      return this.get('status') != "in progress";
    }
  });
  return Game;
});
