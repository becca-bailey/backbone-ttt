// Generated by CoffeeScript 1.10.0
(function() {
  var $, Backbone, Game;

  require('coffee-script');

  Backbone = require('backbone');

  $ = require('jquery');

  Game = Backbone.Model.extend({
    defaults: {
      board: ['', '', '', '', '', '', '', '', ''],
      status: 'in progress',
      isXTurn: true
    },
    isOver: function() {
      return this.get('status') !== 'in progress';
    },
    changeTurn: function() {
      var currentTurn;
      currentTurn = !this.get('isXTurn');
      return this.set({
        'isXTurn': currentTurn
      });
    },
    nextTurn: function() {
      return this.changeTurn();
    },
    getCurrentMarker: function() {
      var isXTurn;
      isXTurn = this.get('isXTurn');
      if (isXTurn) {
        return 'X';
      } else {
        return 'O';
      }
    },
    makeMove: function(spotId) {
      var board;
      board = this.get('board');
      board[spotId] = this.getCurrentMarker();
      return this.updateBoard(board);
    },
    updateBoard: function(board) {
      return this.set({
        'board': board
      });
    },
    computerMove: function() {
      return this.makeMove(2);
    },
    resetAttributes: function() {
      return this.set({
        'board': ['', '', '', '', '', '', '', '', ''],
        'status': 'in-progress',
        'isXTurn': true
      });
    }
  });

  module.exports = Game;

}).call(this);