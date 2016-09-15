$ = require('jquery')
_ = require('underscore')
Backbone = require('backbone')
BoardView = require('./BoardView')
StatusView = require('./StatusView')

GameView = Backbone.View.extend(
  el: '#game-container'
  events:
    'click #play-again': 'resetGame'

  initialize: ->
    @render()

  render: ->
    compiler = @model.get('compiler')
    compiler.load("game", _.bind(((template)->
      compiler.appendToContainer("#game-container", template)
      @boardView = new BoardView(model: @model)
      @statusView = new StatusView(model: @model)), this))

  resetGame: ->
    @model.resetAttributes()
    @boardView.enableAllSpots()
)

module.exports = GameView
