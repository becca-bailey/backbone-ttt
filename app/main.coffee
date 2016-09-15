$ = require('jquery')
Backbone = require('backbone')
HumanVsComputerGame = require('./models/HumanVsComputerGame')
HumanVsHumanGame = require('./models/HumanVsHumanGame')
GameView = require('./views/GameView')
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
    gameView = new GameView(model: game)

  humanVsHuman: ->
    game = new HumanVsHumanGame(client: client)
    gameView = new GameView(model: game)
)

$(document).ready ->
  router = new Router
  Backbone.history.start()
