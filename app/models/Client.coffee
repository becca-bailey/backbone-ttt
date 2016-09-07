require('coffee-script')
Backbone = require('backbone')
$ = require('jquery')

Client = Backbone.Model.extend(
  defaults:
    url: "http://stormy-savannah-24890.herokuapp.com/api/computer_move"

  postUpdatedGame: (data, model, onSuccess)->
    $.ajax "http://stormy-savannah-24890.herokuapp.com/api/computer_move",
      type: 'POST'
      context: model
      crossOrigin: true
      dataType: 'json'
      data: data
      success: (response) ->
        onSuccess(response, model)
)

module.exports = Client
