require('coffee-script')
Backbone = require('backbone')
$ = require('jquery')

MockClient = Backbone.Model.extend(

  postUpdatedGame: (data, model, onSuccess) ->
    response = {board: ["X", "X", "X", "O", "", "", "O", "", ""], status: "player1Wins"}
    onSuccess(response, model)
)

module.exports = MockClient
