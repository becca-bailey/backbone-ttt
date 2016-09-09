Backbone = require('backbone')
$ = require('jquery')

GameView = Backbone.View.extend(
  el: '#game'
  events:
    'click .spot': 'move'
    'click #play-again': 'resetGame'

  initialize: ->
    $('.spot').height $('.spot').width()
    @listenTo @model, 'change', @render
    @listenTo @model, 'change:board', @enableEmptySpots
    @listenTo @model, 'change:status', @checkGameStatus

  move: (e) ->
    spotClicked = $(e.currentTarget)
    if spotClicked.hasClass 'enabled'
      @disableAllSpots()
      @model.makeMove spotClicked.attr('id')

  render: ->
    text = @getStatusText(@model.get('status'))
    $("#status").html(text)
  
    for i in [0...9]
      marker = @model.get('board')[i]
      $('#' + i).html @getMarkerHTML(marker)

  checkGameStatus: ->
    if @model.isOver()
      @endGame()

  endGame: ->
    @disableAllSpots()

  getStatusText: (status) ->
    switch status
      when !@model.get('isXTurn') then "Computer is thinking..."
      when "in progress" && @model.get('isXTurn') then "Your turn!"
      when "tie" then "It's a tie!"
      when "player1Wins" then "X Wins!"
      when "player2Wins" then "O Wins!"

  getMarkerHTML: (marker) ->
    htmlclass = if marker == 'X' then 'human-move' else 'computer-move'
    "<span class=#{htmlclass}>#{marker}</span>"

  resetGame: ->
    @model.resetAttributes()
    @enableAllSpots()

  applyToAllSpots: (functionToApply) ->
    for i in [0...9]
      $spot = $('#' + i)
      functionToApply($spot, i)
    
  enableAllSpots: ->
    @applyToAllSpots ($spot) ->
      unless $spot.hasClass 'enabled'
        $spot.addClass 'enabled'

  disableAllSpots: -> 
    @applyToAllSpots ($spot) ->
      if $spot.hasClass 'enabled' 
        $spot.removeClass 'enabled'

  enableEmptySpots: ->
    board = @model.get('board')
    @applyToAllSpots ($spot, i) ->
      if board[i] == ""
        $spot.addClass 'enabled'
)

module.exports = GameView
