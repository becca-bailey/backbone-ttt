$ = require('jquery')
Backbone = require('backbone')
Game = require('./models/Game')
BoardView = require('./views/BoardView')
StatusView = require('./views/StatusView')
Client = require('./models/Client')
Router = Backbone.Router.extend(
  routes: '': 'main'
  main: ->
    client = new Client
    game = new Game(client: client)
    boardView = new BoardView(model: game)
    statusView = new StatusView(model: game)
)
$(document).ready ->
  router = new Router
  Backbone.history.start()
