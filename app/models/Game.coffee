require('coffee-script')
Backbone = require('backbone')
$ = require('jquery')

Game = Backbone.Model.extend(
  defaults:
    board: ['','','','','','','','','']
    status: 'in progress'
    isXTurn: true

  isOver: ->
    @get('status') != 'in progress'

  changeTurn: ->
    @set 'isXTurn': !@get('isXTurn')

  endTurn: ->
    @changeTurn()
    @computerMove()
    @changeTurn();

  getCurrentMarker: ->
    if @get('isXTurn') then 'X' else 'O'

  makeMove: (spotId) ->
    board = @get('board')
    board[spotId] = @getCurrentMarker()
    @updateBoard board
    @endTurn();

  updateBoard: (board) ->
    @set 'board': board

  updateStatus: (status) ->
    @set 'status': status

  updateGameWithResponseData: (response, game) ->
    game.set 'board': response.board
    game.set 'status': response.status

  computerMove: () ->
    json = {board: @get('board'), gameType: "humanVsComputer", computerDifficulty: "hard"}
    data = JSON.stringify(json)
    client = @get 'client'
    client.postUpdatedGame(data, this, @updateGameWithResponseData)

  resetAttributes: ->
    @set @defaults
    @set 'board': ['','','','','','','','','']
)

module.exports = Game
