"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

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
define('myweb/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'myweb/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _mywebConfigEnvironment) {

  var name = _mywebConfigEnvironment['default'].APP.name;
  var version = _mywebConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('myweb/components/ember-anchor', ['exports', 'ember-anchor/components/ember-anchor'], function (exports, _emberAnchorComponentsEmberAnchor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAnchorComponentsEmberAnchor['default'];
    }
  });
});
define('myweb/controllers/index', ['exports', 'ember', 'ember-anchor/mixins/controller-support'], function (exports, _ember, _emberAnchorMixinsControllerSupport) {
	exports['default'] = _ember['default'].Controller.extend(_emberAnchorMixinsControllerSupport['default'], {
		queryParams: ['anc'],
		anc: 'first'
	});
});
define('myweb/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('myweb/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('myweb/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'myweb/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _mywebConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_mywebConfigEnvironment['default'].APP.name, _mywebConfigEnvironment['default'].APP.version)
  };
});
define('myweb/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('myweb/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
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
define('myweb/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('myweb/initializers/export-application-global', ['exports', 'ember', 'myweb/config/environment'], function (exports, _ember, _mywebConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_mywebConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _mywebConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_mywebConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('myweb/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('myweb/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('myweb/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("myweb/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('myweb/mixins/controller-support', ['exports', 'ember-anchor/mixins/controller-support'], function (exports, _emberAnchorMixinsControllerSupport) {
  exports['default'] = _emberAnchorMixinsControllerSupport['default'];
});
define('myweb/mixins/view-support', ['exports', 'ember-anchor/mixins/view-support'], function (exports, _emberAnchorMixinsViewSupport) {
  exports['default'] = _emberAnchorMixinsViewSupport['default'];
});
define('myweb/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('myweb/router', ['exports', 'ember', 'myweb/config/environment'], function (exports, _ember, _mywebConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _mywebConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('myweb/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('myweb/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("myweb/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "myweb/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("Welcome to Ember");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 0], [3, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("myweb/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 47,
            "column": 0
          }
        },
        "moduleName": "myweb/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h5");
        dom.setAttribute(el1, "data-anc", "first");
        var el2 = dom.createTextNode("First");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nBacon ipsum dolor amet tri-tip turkey doner meatloaf sirloin cupim pork belly shankle short ribs fatback t-bone meatball flank. Bacon turducken meatloaf, kielbasa hamburger tri-tip doner ham pig filet mignon. Pork chop jerky capicola salami jowl, cupim alcatra beef ball tip. Shankle brisket sirloin doner. Pancetta t-bone sausage, brisket bacon sirloin pork chop swine meatball alcatra boudin andouille pork. ZEOMEGA CONSULATE SAME NAVIGATE TEST Porchetta turducken strip steak, pork loin kevin kielbasa ribeye cow pancetta.\n\nSpare ribs short ribs tongue, tenderloin kevin meatloaf venison prosciutto. Pork chop sausage beef ribs pancetta pastrami, short ribs swine shoulder. Pork belly chuck fatback pork, salami pastrami hamburger capicola biltong turducken tail frankfurter jerky prosciutto ham. Frankfurter salami ham tail shankle jerky ribeye corned beef rump.\n\nBiltong jowl tenderloin swine, ball tip brisket alcatra. Swine ribeye boudin shankle. Drumstick tenderloin alcatra tongue turducken jowl hamburger chicken t-bone capicola pork loin shank. Spare ribs andouille corned beef drumstick turducken pig shoulder tail bacon pork loin. Pork alcatra porchetta, bresaola meatball short ribs ham turkey shoulder cow beef ribs pancetta leberkas.\n\nHamburger boudin capicola jowl meatball, ball tip sirloin strip steak. Kielbasa capicola leberkas jerky sirloin short ribs salami pork loin. Alcatra fatback venison bresaola tri-tip turducken. Pork chop cow brisket, pork belly ground round boudin landjaeger. Leberkas short ribs flank doner boudin pork landjaeger tri-tip jowl ham bacon shank chicken pork chop venison. Jerky pork chop filet mignon, rump biltong sausage kielbasa chuck boudin andouille salami corned beef meatball.\n\nBacon sirloin ball tip boudin venison, jowl swine shoulder salami pork chop hamburger turducken tongue pork. Turkey cow t-bone tenderloin jowl filet mignon turducken, salami pastrami capicola porchetta tri-tip biltong spare ribs pork loin. Shank andouille landjaeger ham hock tail pork belly brisket boudin bresaola flank ground round. Bresaola frankfurter porchetta pork chop capicola leberkas. Frankfurter shank pastrami bresaola kevin venison pork. Tongue brisket tenderloin chuck flank bacon beef meatloaf. Biltong pork loin turducken meatloaf ribeye bresaola tail short loin shank tongue swine.\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h5");
        dom.setAttribute(el1, "data-anc", "second");
        var el2 = dom.createTextNode("Second");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nBacon ipsum dolor amet tri-tip turkey doner meatloaf sirloin cupim pork belly shankle short ribs fatback t-bone meatball flank. Bacon turducken meatloaf, kielbasa hamburger tri-tip doner ham pig filet mignon. Pork chop jerky capicola salami jowl, cupim alcatra beef ball tip. Shankle brisket sirloin doner. Pancetta t-bone sausage, brisket bacon sirloin pork chop swine meatball alcatra boudin andouille pork. Porchetta turducken strip steak, pork loin kevin kielbasa ribeye cow pancetta.\n\nSpare ribs short ribs tongue, tenderloin kevin meatloaf venison prosciutto. Pork chop sausage beef ribs pancetta pastrami, short ribs swine shoulder. ZEOMEGA CONSULATE SAME NAVIGATE TEST Pork belly chuck fatback pork, salami pastrami hamburger capicola biltong turducken tail frankfurter jerky prosciutto ham. Frankfurter salami ham tail shankle jerky ribeye corned beef rump.\n\nBiltong jowl tenderloin swine, ball tip brisket alcatra. Swine ribeye boudin shankle. Drumstick tenderloin alcatra tongue turducken jowl hamburger chicken t-bone capicola pork loin shank. Spare ribs andouille corned beef drumstick turducken pig shoulder tail bacon pork loin. Pork alcatra porchetta, bresaola meatball short ribs ham turkey shoulder cow beef ribs pancetta leberkas.\n\nHamburger boudin capicola jowl meatball, ball tip sirloin strip steak. Kielbasa capicola leberkas jerky sirloin short ribs salami pork loin. Alcatra fatback venison bresaola tri-tip turducken. Pork chop cow brisket, pork belly ground round boudin landjaeger. Leberkas short ribs flank doner boudin pork landjaeger tri-tip jowl ham bacon shank chicken pork chop venison. Jerky pork chop filet mignon, rump biltong sausage kielbasa chuck boudin andouille salami corned beef meatball.\n\nBacon sirloin ball tip boudin venison, jowl swine shoulder salami pork chop hamburger turducken tongue pork. Turkey cow t-bone tenderloin jowl filet mignon turducken, salami pastrami capicola porchetta tri-tip biltong spare ribs pork loin. Shank andouille landjaeger ham hock tail pork belly brisket boudin bresaola flank ground round. Bresaola frankfurter porchetta pork chop capicola leberkas. Frankfurter shank pastrami bresaola kevin venison pork. Tongue brisket tenderloin chuck flank bacon beef meatloaf. Biltong pork loin turducken meatloaf ribeye bresaola tail short loin shank tongue swine.\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h5");
        dom.setAttribute(el1, "data-anc", "third");
        var el2 = dom.createTextNode("Third");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nBacon ipsum dolor amet tri-tip turkey doner meatloaf sirloin cupim pork belly shankle short ribs fatback t-bone meatball flank. Bacon turducken meatloaf, kielbasa hamburger tri-tip doner ham pig filet mignon. Pork chop jerky capicola salami jowl, cupim alcatra beef ball tip. Shankle brisket sirloin doner. Pancetta t-bone sausage, brisket bacon sirloin pork chop swine meatball alcatra boudin andouille pork. Porchetta turducken strip steak, pork loin kevin kielbasa ribeye cow pancetta.\n\nSpare ribs short ribs tongue, tenderloin kevin meatloaf venison prosciutto. ZEOMEGA CONSULATE SAME NAVIGATE TEST Masala Dosa with Chutney, Poori saagu, Upma, shavige payasa, short ribs swine shoulder. Pork belly chuck fatback pork, salami pastrami hamburger capicola biltong turducken tail frankfurter jerky prosciutto ham. Frankfurter salami ham tail shankle jerky ribeye corned beef rump.\n\nBiltong jowl tenderloin swine, ball tip brisket alcatra. Swine ribeye boudin shankle. Drumstick tenderloin alcatra tongue turducken jowl hamburger chicken t-bone capicola pork loin shank. Spare ribs andouille corned beef drumstick turducken pig shoulder tail bacon pork loin. Pork alcatra porchetta, bresaola meatball short ribs ham turkey shoulder cow beef ribs pancetta leberkas.\n\nHamburger boudin capicola jowl meatball, ball tip sirloin strip steak. Kielbasa capicola leberkas jerky sirloin short ribs salami pork loin. Alcatra fatback venison bresaola tri-tip turducken. Pork chop cow brisket, pork belly ground round boudin landjaeger. Leberkas short ribs flank doner boudin pork landjaeger tri-tip jowl ham bacon shank chicken pork chop venison. Jerky pork chop filet mignon, rump biltong sausage kielbasa chuck boudin andouille salami corned beef meatball.\n\nBacon sirloin ball tip boudin venison, jowl swine shoulder salami pork chop hamburger turducken tongue pork. Turkey cow t-bone tenderloin jowl filet mignon turducken, salami pastrami capicola porchetta tri-tip biltong spare ribs pork loin. Shank andouille landjaeger ham hock tail pork belly brisket boudin bresaola flank ground round. Bresaola frankfurter porchetta pork chop capicola leberkas. Frankfurter shank pastrami bresaola kevin venison pork. Tongue brisket tenderloin chuck flank bacon beef meatloaf. Biltong pork loin turducken meatloaf ribeye bresaola tail short loin shank tongue swine.\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "ember-anchor", [], ["a", ["subexpr", "@mut", [["get", "anc", ["loc", [null, [1, 17], [1, 20]]]]], [], []]], ["loc", [null, [1, 0], [1, 22]]]], ["inline", "link-to", ["Go to First", "index", ["subexpr", "query-params", [], ["anc", "first"], ["loc", [null, [4, 32], [4, 58]]]]], ["class", "first-link"], ["loc", [null, [4, 0], [4, 79]]]], ["inline", "link-to", ["Go to Second", "index", ["subexpr", "query-params", [], ["anc", "second"], ["loc", [null, [5, 33], [5, 60]]]]], ["class", "second-link"], ["loc", [null, [5, 0], [5, 82]]]], ["inline", "link-to", ["Go to Third", "index", ["subexpr", "query-params", [], ["anc", "third"], ["loc", [null, [6, 32], [6, 58]]]]], ["class", "third-link"], ["loc", [null, [6, 0], [6, 79]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('myweb/config/environment', ['ember'], function(Ember) {
  var prefix = 'myweb';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("myweb/app")["default"].create({"name":"myweb","version":"0.0.0+babb4867"});
}

/* jshint ignore:end */
//# sourceMappingURL=myweb.map