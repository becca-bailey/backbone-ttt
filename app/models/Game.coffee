Backbone = require('backbone')
$ = require('jquery')

Game = Backbone.Model.extend(
  defaults:
    board: ['','','','','','','','','']
    status: 'in progress'
    isXTurn: true

  setSpotToMarker: (spot) ->
    board = @get('board')
    board[spot] = @getCurrentMarker()
    @updateBoard board

  isOver: ->
    @get('status') != 'in progress'

  changeTurn: ->
    @set 'isXTurn': !@get('isXTurn')

  getCurrentMarker: ->
    if @get('isXTurn') then 'X' else 'O'
  
  updateBoard: (board) ->
    @set 'board': board

  updateStatus: (status) ->
    @set 'status': status
  
  resetAttributes: ->
    @set @defaults
    @set 'board': ['','','','','','','','','']
)

module.exports = Game
