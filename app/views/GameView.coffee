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

  move: (e) ->
    spotClicked = $(e.currentTarget)
    if spotClicked.hasClass('enabled')
      spotClicked.removeClass 'enabled'
      @model.makeMove spotClicked.attr('id')
      @model.nextTurn()

  render: ->
    for i in [0...9] 
      marker = @model.get('board')[i]
      $('#' + i).html @getMarkerHTML(marker)

  getMarkerHTML: (marker) ->
    htmlclass = if marker == 'X' then 'human-move' else 'computer-move'
    "<span class=#{htmlclass}>#{marker}</span>"

  resetGame: ->
    @model.resetAttributes()
    @enableAllSpots()

  enableAllSpots: ->
    for i in [0...9]
      $spot = $('#' + i)
      unless $spot.hasClass('enabled')
        $spot.addClass 'enabled'
)

module.exports = GameView
