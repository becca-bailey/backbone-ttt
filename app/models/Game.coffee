require('coffee-script')
Backbone = require('backbone')
$ = require('jquery')

Game = Backbone.Model.extend(
  defaults:
    board: [
      ''
      ''
      ''
      ''
      ''
      ''
      ''
      ''
      ''
    ]
    status: 'in progress'
    isXTurn: true

  isOver: ->
    @get('status') != 'in progress'

  changeTurn: ->
    currentTurn = !@get('isXTurn')
    @set 'isXTurn': currentTurn

  nextTurn: ->
    @changeTurn()
    # if(!this.isXTurn) {
    #   this.computerMove();
    #   this.changeTurn();
    # }

  getCurrentMarker: ->
    isXTurn = @get('isXTurn')
    if isXTurn then 'X' else 'O'

  makeMove: (spotId) ->
    board = @get('board')
    board[spotId] = @getCurrentMarker()
    @updateBoard board

  updateBoard: (board) ->
    @set 'board': board

  computerMove: ->
    @makeMove 2

  resetAttributes: ->
    @set
      'board': [
        ''
        ''
        ''
        ''
        ''
        ''
        ''
        ''
        ''
      ]
      'status': 'in-progress'
      'isXTurn': true
)

module.exports = Game
