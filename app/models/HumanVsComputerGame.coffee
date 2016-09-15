$ = require('jquery')
_ = require('underscore')
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

  updateGameWithResponseData: (response) ->
    @updateBoard response.board
    @updateStatus response.status
    @changeTurn()

  computerMove: ->
    json = {board: @get('board'), gameType: "humanVsComputer", computerDifficulty: "hard"}
    data = JSON.stringify(json)
    client = @get 'client'
    client.postUpdatedGame(data, _.bind(((response)->
      @updateGameWithResponseData(response)), this))
)

module.exports = HumanVsComputerGame
