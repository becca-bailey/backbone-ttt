define(['jquery', 'backbone'], function($, Backbone) {
  var Game = Backbone.Model.extend({
    defaults: {
      board: ["", "", "", "", "", "", "", "", ""],
      status: "in progress",
      isXTurn: true
    },

    initialize: function() {

    },

    isOver: function() {
      return this.get('status') != "in progress";
    },

    changeTurn: function() {
      var currentTurn = !this.get('isXTurn');
      this.set({'isXTurn': currentTurn});
    },

    getCurrentMarker: function() {
      var isXTurn = this.get('isXTurn');
      if (isXTurn) {
        return "X";
      } else {
        return "O";
      }
    },

    makeMove: function(spotId) {
      console.log(spotId);
    }
  });
  return Game;
});
