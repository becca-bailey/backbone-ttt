Backbone = require('backbone')
$ = require('jquery')
classes = require('../../config/UIConfig').classes

BoardView = Backbone.View.extend(
  el: '#game'
  events:
    'click .spot': 'move'
    'click #play-again': 'resetGame'

  initialize: ->
    @listenTo @model, 'change', @render
    @listenTo @model, 'change:board', @enableEmptySpots
    @listenTo @model, 'change:status', @disableAllSpots

  move: (e) ->
    spotClicked = $(e.currentTarget)
    if spotClicked.hasClass classes.enabled
      @disableAllSpots()
      @model.makeMove spotClicked.attr('id')

  render: ->
    for i in [0...9]
      marker = @model.get('board')[i]
      $('#' + i).html @getMarkerHTML(marker)

  getMarkerHTML: (marker) ->
    htmlclass = if marker == 'X' then classes.x else classes.o
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
      unless $spot.hasClass classes.enabled
        $spot.addClass classes.enabled

  disableAllSpots: ->
    @applyToAllSpots ($spot) ->
      if $spot.hasClass classes.enabled
        $spot.removeClass classes.enabled

  enableEmptySpots: ->
    board = @model.get('board')
    @applyToAllSpots ($spot, i) ->
      if board[i] == ""
        $spot.addClass classes.enabled
)

module.exports = BoardView
