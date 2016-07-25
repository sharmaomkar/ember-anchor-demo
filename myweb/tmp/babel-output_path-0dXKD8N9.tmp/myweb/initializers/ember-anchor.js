define('myweb/initializers/ember-anchor', ['exports', 'myweb/config/environment'], function (exports, _mywebConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    var emberAnchor = _mywebConfigEnvironment['default'].emberAnchor;

    application.register('config:ember-anchor', emberAnchor, { instantiate: false });
  }

  exports['default'] = {
    name: 'ember-anchor',
    initialize: initialize
  };
});