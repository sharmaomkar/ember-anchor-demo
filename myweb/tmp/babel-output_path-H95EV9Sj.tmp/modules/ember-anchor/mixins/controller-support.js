export { injectConfig };
import Ember from 'ember';

var Mixin = Ember.Mixin;
var getOwner = Ember.getOwner;
var computed = Ember.computed;
var oneWay = Ember.computed.oneWay;

function injectConfig() {
  return computed(function () {
    var owner = getOwner ? getOwner(this) : this.container;
    return owner.lookup('config:ember-anchor');
  });
}

export default Mixin.create({
  anchorQueryParam: oneWay('_anchorConfig.anchorQueryParam'),
  _anchorConfig: injectConfig(),

  init: function init() {
    var qpValue = this.get('anchorQueryParam');
    this.queryParams = qpValue ? [qpValue] : [];
    this._super.apply(this, arguments);
  }
});