define('myweb/app', ['exports', 'ember', 'myweb/resolver', 'ember-load-initializers', 'myweb/config/environment'], function (exports, _ember, _mywebResolver, _emberLoadInitializers, _mywebConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _mywebConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _mywebConfigEnvironment['default'].podModulePrefix,
    Resolver: _mywebResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _mywebConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});