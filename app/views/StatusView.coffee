Backbone = require('backbone')
$ = require('jquery')

StatusView = Backbone.View.extend(
  el: '#status'

  initialize: ->
    @listenTo @model, 'change', @render

  render: ->
    text = @getStatusText(@model.get('status'))
    $("#status").html(text)

  getStatusText: (status) ->
    switch status
      when "tie" then "It's a tie!"
      when "player1Wins" then "X Wins!"
      when "player2Wins" then "O Wins!"
      when "in progress" then @getInProgressText()

  getInProgressText: ->
    if @model.get('isXTurn')
      "Your turn!"
    else 
      "Computer is thinking..."
)

module.exports = StatusView
