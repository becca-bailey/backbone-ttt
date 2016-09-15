$ = require('jquery')
Backbone = require('backbone')
Router = require('./Router')

$(document).ready ->
  router = new Router
  Backbone.history.start()
