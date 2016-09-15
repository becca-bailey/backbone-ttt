$ = require('jquery')
Game = require('./Game')
messages = require('../../config/UIConfig').statusMessages

HumanVsHumanGame = Game.extend(
  player1TurnMessage: messages.xTurn
  player2TurnMessage: messages.oTurn

  makeMove: (spotId) ->
    board = @get('board')
    board[spotId] = @getCurrentMarker()
    @updateBoard board
    @changeTurn()
    @checkGameStatus()

  checkGameStatus: ->
    parameters = "?board=#{JSON.stringify(@get 'board')}"
    client = @get 'client'
    client.getGameStatus(parameters, this, @updateStatusWithResponseData)

  updateStatusWithResponseData: (response, game) ->
    game.set 'status': response.status
)

module.exports = HumanVsHumanGame
