require('coffee-script')
Backbone = require('backbone')
$ = require('jquery')

Client = Backbone.Model.extend(

  getURL: ->
    config = @get('config')
    environment = config.environment
    config[environment].url + config.computerMove

  postUpdatedGame: (data, model, onSuccess)->
    url = @getURL()
    $.ajax url,
      type: 'POST'
      context: model
      crossOrigin: true
      dataType: 'json'
      data: data
      success: (response) ->
        onSuccess(response, model)
)

module.exports = Client
