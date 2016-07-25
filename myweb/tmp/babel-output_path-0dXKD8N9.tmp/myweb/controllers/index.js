define('myweb/controllers/index', ['exports', 'ember', 'ember-anchor/mixins/controller-support'], function (exports, _ember, _emberAnchorMixinsControllerSupport) {
	exports['default'] = _ember['default'].Controller.extend(_emberAnchorMixinsControllerSupport['default'], {
		queryParams: ['anc'],
		anc: 'first'
	});
});