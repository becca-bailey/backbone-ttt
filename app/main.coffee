$ = require('jquery')
Backbone = require('backbone')
Game = require('./models/Game')
BoardView = require('./views/BoardView')
StatusView = require('./views/StatusView')
Client = require('./models/Client')
httpConfig = require('../config/HTTPConfig')

Router = Backbone.Router.extend(
  routes: '': 'main'

  main: ->
    client = new Client(config: httpConfig)
    game = new Game(client: client)
    boardView = new BoardView(model: game)
    statusView = new StatusView(model: game)
)

$(document).ready ->
  router = new Router
  Backbone.history.start()
