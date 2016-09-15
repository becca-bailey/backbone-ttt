Backbone = require('backbone')
$ = require('jquery')
HandlebarsCompiler = require('../http/HandlebarsCompiler')

MenuView = Backbone.View.extend(
  el: '#menu-container'
  events: 
    'click #human-vs-human': 'navigateToHVH'
    'click #human-vs-computer': 'navigateToHVC'

  initialize: ->
    @render()

  render: ->
    compiler = new HandlebarsCompiler
    compiler.load("menu", (template) ->
      compiler.appendToContainer("#menu-container", template))

  navigateToHVH: ->
    Backbone.history.navigate('humanvshuman', {trigger: true})
    this.$el.hide()

  navigateToHVC: ->
    Backbone.history.navigate('humanvscomputer', {trigger: true})
    this.$el.hide()
)

module.exports = MenuView
