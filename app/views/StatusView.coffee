Backbone = require('backbone')
HandlebarsCompiler = require('../http/HandlebarsCompiler')
$ = require('jquery')
messages = require('../../config/UIConfig').statusMessages

StatusView = Backbone.View.extend(
  el: '#status'

  initialize: ->
    @render()
    @listenTo @model, 'change', @showStatus

  render: ->
    compiler = new HandlebarsCompiler
    compiler.load("status", ((template)->
      compiler.appendToContainer("#status-container", template)
      @showStatus()).bind(this))

  showStatus: ->
    text = @getStatusText(@model.get('status'))
    $("#status").html(text)

  getStatusText: (status) ->
    switch status
      when "tie" then messages.tie
      when "player1Wins" then messages.player1Wins
      when "player2Wins" then messages.player2Wins
      when "in progress" then @getInProgressText()

  getInProgressText: ->
    if @model.get('isXTurn')
      @model.player1TurnMessage 
    else
      @model.player2TurnMessage
)

module.exports = StatusView
