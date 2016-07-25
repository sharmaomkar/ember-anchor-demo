define('myweb/tests/helpers/resolver', ['exports', 'myweb/resolver', 'myweb/config/environment'], function (exports, _mywebResolver, _mywebConfigEnvironment) {

  var resolver = _mywebResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _mywebConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _mywebConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});