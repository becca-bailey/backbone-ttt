$ = require('jquery')
_ = require('underscore')
Game = require('./Game')
messages = require('../../config/UIConfig').statusMessages

HumanVsHumanGame = Game.extend(
  player1TurnMessage: messages.xTurn
  player2TurnMessage: messages.oTurn

  makeMove: (spotId) ->
    @setSpotToMarker(parseInt spotId)
    @changeTurn()
    @checkGameStatus()

  checkGameStatus: ->
    parameters = "?board=#{JSON.stringify(@get 'board')}"
    client = @get 'client'
    client.getGameStatus(parameters, _.bind(((response)->
      @updateStatusWithResponseData(response)), this))

  updateStatusWithResponseData: (response) ->
    @updateStatus response.status
)

module.exports = HumanVsHumanGame
