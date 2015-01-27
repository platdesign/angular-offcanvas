'use strict';

module.exports = ['pdOffcanvas', function(pdOffcanvas) {
	return {
		restrict: 'A',
		link: function(scope, el, attrs) {

			var id = attrs.pdOffcanvas;

			pdOffcanvas.register(id, el);

		}
	}
}];
