require.config({
  paths: {
    jquery: '../js/lib/jquery/jquery-3.1.0.min',
    underscore: '../js/lib/underscore/underscore-min',
    backbone: '../js/lib/backbone/backbone-min',
    'jasmine': 'jasmine/lib/jasmine-2.4.1/jasmine',
    'jasmine-html': 'jasmine/lib/jasmine-2.4.1/jasmine-html',
    'jasmine-boot': 'jasmine/lib/jasmine-2.4.1/boot',
  },
  shim: {
    'jasmine-html': {
      deps: ['jasmine']
    },
    'jasmine-boot': {
      deps: ['jquery', 'jasmine', 'jasmine-html']
    }
  }
});

require(['jasmine-boot'], function() {
  require(['spec/GameSpec', 'spec/GameViewSpec'], function() {
    window.onload()
  });
});
