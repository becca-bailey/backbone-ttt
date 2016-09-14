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
  compiler = new HandlebarsCompiler
  compiler.load("menu", (template)->
    compiler.appendToContainer("#menu-container", template))

  compiler.load("board", (template)->
    compiler.appendToContainer("#board-container", template)
    $(".spot").height $(".spot").width())

  compiler.load("status", (template)->
    compiler.appendToContainer("#status-container", template))

  router = new Router
  Backbone.history.start()
