HumanVsComputerGame = require('./models/HumanVsComputerGame')
HumanVsHumanGame = require('./models/HumanVsHumanGame')
GameView = require('./views/GameView')
MenuView = require('./views/MenuView')
Client = require('./http/Client')
HandlebarsCompiler = require('./http/HandlebarsCompiler')

httpConfig = require('../config/HTTPConfig')
client = new Client(config: httpConfig)
handlebarsCompiler = new HandlebarsCompiler
attributes =  
  client: client
  compiler: handlebarsCompiler

Router = Backbone.Router.extend(
  routes:
    '': 'main'
    'humanvscomputer(/)': 'humanVsComputer'
    'humanvshuman(/)': 'humanVsHuman'

  main: ->
    @menuView = new MenuView()

  humanVsComputer: ->
    @game = new HumanVsComputerGame(attributes)
    @gameView = new GameView(model: game)

  humanVsHuman: ->
    @game = new HumanVsHumanGame(attributes)
    @gameView = new GameView(model: game)
)

module.exports = Router
