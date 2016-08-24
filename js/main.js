require.config({
  baseUrl: 'js',
  paths: {
    jquery: 'lib/jquery/jquery-3.1.0.min',
    underscore: 'lib/underscore/underscore-min',
    backbone: 'lib/backbone/backbone-min'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require([
  'jquery',
  'backbone',
  'application/models/Game',
  'application/views/BoardView'
], function($, Backbone, Game, BoardView) {
  var Router = Backbone.Router.extend({
    routes: {
      "": "main"
    },
    main: function() {
      var game = new Game();
      var board = new BoardView(game);
    }
  });
  var router = new Router();
  Backbone.history.start();
});