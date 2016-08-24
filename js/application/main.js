require.config({
  baseUrl: 'js/application',
  paths: {
    jquery: '../lib/jquery/jquery-3.1.0.min',
    underscore: '../lib/underscore/underscore-min',
    backbone: '../lib/backbone/backbone-min'
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
  'models/Game',
  'views/SpotView'
], function($, Backbone, Game, MenuView, GameView, SpotView) {
  var Router = Backbone.Router.extend({
    routes: {
      "": "main"
    },
    main: function() {
      var game = new Game();
      var spots = new SpotView();
    }
  });
  var router = new Router();
  Backbone.history.start();
});
