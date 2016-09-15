// Generated by CoffeeScript 1.10.0
var $, Backbone, Handlebars, HandlebarsCompiler;

$ = require('jquery');

Backbone = require('backbone');

Handlebars = require('handlebars');

HandlebarsCompiler = Backbone.Model.extend({
  load: function(templateName, onCompletion) {
    return $.ajax("../partials/" + templateName + ".html", {
      success: function(data) {
        var template;
        template = Handlebars.compile(data);
        return onCompletion(template);
      }
    });
  },
  appendToContainer: function(container, template) {
    return $(container).html(template);
  }
});

module.exports = HandlebarsCompiler;