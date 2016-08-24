define(['jquery', 'backbone'], function($, Backbone) {
  var SpotView = Backbone.View.extend({
    el: '.spot',
    events: {

    },
    initialize: function() {
      this.$el.height(this.$el.width());
    }
  });
  return SpotView;
});
