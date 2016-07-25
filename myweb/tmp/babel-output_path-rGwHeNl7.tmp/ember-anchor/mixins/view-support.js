define('ember-anchor/mixins/view-support', ['exports', 'ember', 'ember-anchor/mixins/controller-support'], function (exports, _ember, _emberAnchorMixinsControllerSupport) {
  'use strict';

  var Mixin = _ember['default'].Mixin;
  var scheduleOnce = _ember['default'].run.scheduleOnce;
  var oneWay = _ember['default'].computed.oneWay;
  var get = _ember['default'].get;
  var $ = _ember['default'].$;

  exports['default'] = Mixin.create({
    _anchorConfig: (0, _emberAnchorMixinsControllerSupport.injectConfig)(),
    anchorQueryParam: oneWay('_anchorConfig.anchorQueryParam'),

    init: function init() {
      this._super.apply(this, arguments);
      var controllerProp = this.get('a') ? 'a' : 'controller.' + this.get('anchorQueryParam');
      this.addObserver(controllerProp, this, this._onQpChanged);
    },

    _onQpChanged: function _onQpChanged() {
      var controllerProp = !!get(this, 'attrs.a') ? 'a' : 'controller.' + this.get('anchorQueryParam');
      var elem = $('[data-anchor="' + this.get(controllerProp) + '"]');
      if (!elem) {
        return;
      }
      scheduleOnce('afterRender', this, this._scrollToElemPosition);
    },

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this._scrollToElemPosition();
    },

    _scrollToElemPosition: function _scrollToElemPosition() {
      var qp = this.get('anchorQueryParam');
      var qpVal = this.get(!!get(this, 'attrs.a') ? 'a' : 'controller.' + qp);
      var elem = $('[data-' + qp + '="' + qpVal + '"]');
      var offset = elem && elem.offset && elem.offset() ? elem.offset().top : null;
      if (offset) {
        $('body').scrollTop(offset);
      }
    }
  });
});