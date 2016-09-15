require('coffee-script')
Backbone = require('backbone')
$ = require('jquery')

MockClient = Backbone.Model.extend(

  response: {board: ["X", "X", "X", "O", "", "", "O", "", ""], status: "player1Wins"}

  postUpdatedGame: (data, onSuccess) ->
    onSuccess(@response)

  getGameStatus: (parameters, onSuccess) ->
    response = {status: "player1Wins"}
    onSuccess(response)
)

module.exports = MockClient
