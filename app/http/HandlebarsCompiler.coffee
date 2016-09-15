$ = require('jquery')
Backbone = require('backbone')
Handlebars = require('handlebars')

HandlebarsCompiler = Backbone.Model.extend(

  load: (templateName, onCompletion) ->
    $.ajax "./partials/#{templateName}.html",
      success: (data) ->
        template = Handlebars.compile(data)
        onCompletion(template)

  appendToContainer: (container, template) ->
    $(container).html(template)
)

module.exports = HandlebarsCompiler
