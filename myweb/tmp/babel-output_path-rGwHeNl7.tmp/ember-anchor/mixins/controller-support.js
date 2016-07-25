define('ember-anchor/mixins/controller-support', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.injectConfig = injectConfig;

  var Mixin = _ember['default'].Mixin;
  var getOwner = _ember['default'].getOwner;
  var computed = _ember['default'].computed;
  var oneWay = _ember['default'].computed.oneWay;

  function injectConfig() {
    return computed(function () {
      var owner = getOwner ? getOwner(this) : this.container;
      return owner.lookup('config:ember-anchor');
    });
  }

  exports['default'] = Mixin.create({
    anchorQueryParam: oneWay('_anchorConfig.anchorQueryParam'),
    _anchorConfig: injectConfig(),

    init: function init() {
      var qpValue = this.get('anchorQueryParam');
      this.queryParams = qpValue ? [qpValue] : [];
      this._super.apply(this, arguments);
    }
  });
});