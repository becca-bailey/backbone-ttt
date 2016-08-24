require.config({
  paths: {
    jquery: '../lib/jquery/jquery-3.1.0.min',
    underscore: '../lib/underscore/underscore-min',
    backbone: '../lib/backbone/backbone-min',
    'jasmine': 'lib/jasmine-2.4.1/jasmine',
    'jasmine-html': 'lib/jasmine-2.4.1/jasmine-html',
    'jasmine-boot': 'lib/jasmine-2.4.1/boot'
  },
  shim: {
    'jasmine-html': {
      deps: ['jasmine']
    },
    'jasmine-boot': {
      deps: ['jasmine', 'jasmine-html']
    }
  }
});

require(['jasmine-boot'], function() {
  require(['../spec/GameSpec'], function() {
    window.onload()
  });
});
