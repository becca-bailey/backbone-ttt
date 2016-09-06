var Backbone = require('backbone');
var $ = require('jquery');

var Game = Backbone.Model.extend({
  defaults: {
    board: ["", "", "", "", "", "", "", "", ""],
    status: "in progress",
    isXTurn: true
  },

  isOver: function() {
    return this.get('status') != "in progress";
  },

  changeTurn: function() {
    var currentTurn = !this.get('isXTurn');
    this.set({'isXTurn': currentTurn});
  },

  nextTurn: function(){
    this.changeTurn();
    // if(!this.isXTurn) {
    //   this.computerMove();
    //   this.changeTurn();
    // }
  },

  getCurrentMarker: function() {
    var isXTurn = this.get('isXTurn');
    return isXTurn ? "X" : "O";
  },

  makeMove: function(spotId) {
    var board = this.get('board');
    board[spotId] = this.getCurrentMarker();
    this.updateBoard(board);
  },

  updateBoard: function(board) {
    this.set({'board': board});
  },

  computerMove: function() {
    this.makeMove(2);
  },

  resetAttributes: function() {
    this.set({'board': ["", "", "", "", "", "", "", "", ""],
              'status': 'in-progress',
              'isXTurn': true});
  }
});
// return Game;

module.exports = Game;
