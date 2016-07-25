define('myweb/tests/test-helper', ['exports', 'myweb/tests/helpers/resolver', 'ember-qunit'], function (exports, _mywebTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_mywebTestsHelpersResolver['default']);
});