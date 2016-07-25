define('myweb/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'myweb/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _mywebConfigEnvironment) {

  var name = _mywebConfigEnvironment['default'].APP.name;
  var version = _mywebConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});