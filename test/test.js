require.config({
  paths: {
    jquery: '../js/lib/jquery/jquery-3.1.0.min',
    underscore: '../js/lib/underscore/underscore-min',
    backbone: '../js/lib/backbone/backbone-min',
    'jasmine': 'jasmine/lib/jasmine-2.4.1/jasmine',
    'jasmine-html': 'jasmine/lib/jasmine-2.4.1/jasmine-html',
    'jasmine-boot': 'jasmine/lib/jasmine-2.4.1/boot',
    sinon: 'sinon/sinon-1.17.5'
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
  require(['spec/GameSpec', 'spec/BoardViewSpec'], function() {
    window.onload()
  });
});
