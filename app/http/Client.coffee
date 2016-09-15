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

  postUpdatedGame: (data, onSuccess)->
    url = @getURL("computer")
    $.ajax url,
      type: 'POST'
      crossOrigin: true
      dataType: 'json'
      data: data
      success: (response) ->
        onSuccess(response)

  getGameStatus: (parameters, onSuccess)->
    url = @getURL("human") + parameters
    $.ajax url,
      crossOrigin: true
      dataType: 'json'
      success: (response) ->
        onSuccess(response)
)

module.exports = Client
