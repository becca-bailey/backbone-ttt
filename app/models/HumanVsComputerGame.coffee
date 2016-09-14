$ = require('jquery')
Game = require('./Game')

HumanVsComputerGame = Game.extend(

  makeMove: (spotId) ->
    board = @get('board')
    board[spotId] = @getCurrentMarker()
    @updateBoard board
    @changeTurn()
    @computerMove()

  updateGameWithResponseData: (response, game) ->
    game.set 'board': response.board
    game.set 'status': response.status
    game.set 'isXTurn': !game.get('isXTurn')

  computerMove: ->
    json = {board: @get('board'), gameType: "humanVsComputer", computerDifficulty: "hard"}
    data = JSON.stringify(json)
    client = @get 'client'
    client.postUpdatedGame(data, this, @updateGameWithResponseData)
)

module.exports = HumanVsComputerGame
