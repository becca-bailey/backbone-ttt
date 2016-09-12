require('coffee-script')
Backbone = require('backbone')
$ = require('jquery')

MockClient = Backbone.Model.extend(

  response: {board: ["X", "X", "X", "O", "", "", "O", "", ""], status: "player1Wins"}

  postUpdatedGame: (data, model, onSuccess) ->
    onSuccess(@response, model)
)

module.exports = MockClient
