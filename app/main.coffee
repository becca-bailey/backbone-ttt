$ = require('jquery')
Backbone = require('backbone')
Game = require('./models/Game')
GameView = require('./views/GameView')
Client = require('./models/Client')
Router = Backbone.Router.extend(
  routes: '': 'main'
  main: ->
    client = new Client
    game = new Game(client: client)
    gameView = new GameView(model: game)
    return
)
$(document).ready ->
  router = new Router
  Backbone.history.start()
  return
