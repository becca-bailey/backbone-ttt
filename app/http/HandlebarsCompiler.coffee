$ = require('jquery')
Backbone = require('backbone')
Handlebars = require('handlebars')

HandlebarsCompiler = Backbone.Model.extend(

  load: (templateName) ->
    $.ajax "../partials/#{templateName}.html",
      success: (data) ->
        template = Handlebars.compile(data)
        $("##{templateName}-container").html(template)
        $(".spot").height $(".spot").width()
)

module.exports = HandlebarsCompiler
