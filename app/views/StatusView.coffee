Backbone = require('backbone')
$ = require('jquery')
messages = require('../../config/UIConfig').statusMessages

StatusView = Backbone.View.extend(
  el: '#status'

  initialize: ->
    @listenTo @model, 'change', @render

  render: ->
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
      messages.humanTurn
    else 
      messages.computerTurn
)

module.exports = StatusView
