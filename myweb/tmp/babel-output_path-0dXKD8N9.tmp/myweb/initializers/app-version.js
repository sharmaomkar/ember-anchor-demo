define('myweb/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'myweb/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _mywebConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_mywebConfigEnvironment['default'].APP.name, _mywebConfigEnvironment['default'].APP.version)
  };
});