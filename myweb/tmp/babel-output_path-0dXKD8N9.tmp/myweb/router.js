define('myweb/router', ['exports', 'ember', 'myweb/config/environment'], function (exports, _ember, _mywebConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _mywebConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});