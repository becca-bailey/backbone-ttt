require('coffee-script')
Backbone = require('backbone')
$ = require('jquery')

Client = Backbone.Model.extend(

  getURL: (player) ->
    config = @get('config')
    environment = config.environment
    if player == "human"
      config[environment].url + config.humanMove
    else
      config[environment].url + config.computerMove

  postUpdatedGame: (data, model, onSuccess)->
    url = @getURL("computer")
    $.ajax url,
      type: 'POST'
      context: model
      crossOrigin: true
      dataType: 'json'
      data: data
      success: (response) ->
        onSuccess(response, model)

  getGameStatus: (parameters, model, onSuccess)->
    url = @getURL("human") + parameters
    $.ajax url,
      crossOrigin: true
      dataType: 'json'
      success: (response) ->
        onSuccess(response, model)
)

module.exports = Client
