$ = require('jquery')
Backbone = require('backbone')
HumanVsComputerGame = require('./models/HumanVsComputerGame')
HumanVsHumanGame = require('./models/HumanVsHumanGame')
BoardView = require('./views/BoardView')
StatusView = require('./views/StatusView')
MenuView = require('./views/MenuView')
Client = require('./http/Client')
httpConfig = require('../config/HTTPConfig')
client = new Client(config: httpConfig)

Router = Backbone.Router.extend(
  routes:
    '': 'main'
    'humanvscomputer(/)': 'humanVsComputer'
    'humanvshuman(/)': 'humanVsHuman'

  main: ->
    menuView = new MenuView()

  humanVsComputer: ->
    game = new HumanVsComputerGame(client: client)
    boardView = new BoardView(model: game)
    statusView = new StatusView(model: game)

  humanVsHuman: ->
    game = new HumanVsHumanGame(client: client)
    boardView = new BoardView(model: game)
    statusView = new StatusView(model: game)
)

$(document).ready ->
  router = new Router
  Backbone.history.start(pushState: true)
