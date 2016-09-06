var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var Game = require('./models/Game');
var GameView = require('./views/GameView');

var Router = Backbone.Router.extend({
  routes: {
    "": "main"
  },
  main: function() {
        var game = new Game();
        var gameView = new GameView({model: game});
  }
});

$(document).ready(function() {
  var router = new Router();
  Backbone.history.start();
});
