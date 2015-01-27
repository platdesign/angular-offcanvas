'use strict';

module.exports = ['pdOffcanvas', function(pdOffcanvas) {
	return {
		restrict: 'A',
		link: function(scope, el, attrs) {

			var id = attrs.pdOffcanvasCover;

			pdOffcanvas.registerCover(id, el);

			scope.$on('pdOffcanvas:toggle', function(event, id) {
				pdOffcanvas.toggle(id);
			});

		}
	}
}];
