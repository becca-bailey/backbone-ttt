$ = require('jquery')
Game = require('./Game')
messages = require('../../config/UIConfig').statusMessages

HumanVsComputerGame = Game.extend(
  player1TurnMessage: messages.humanTurn
  player2TurnMessage: messages.computerTurn

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
