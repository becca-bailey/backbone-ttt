define(['underscore', 'jquery', 'backbone'], function(_, $, Backbone) {
  var Game = Backbone.Model.extend({
    defaults: {
      board: ["", "", "", "", "", "", "", "", ""],
      status: "in progress"
    },
    initialize: function() {
      console.log("game created");
    },
    isOver: function() {
      return this.get('status');
    }
  });
  return Game;
});
