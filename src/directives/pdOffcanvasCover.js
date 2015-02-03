'use strict';

var $ = global.$;

module.exports = ['pdOffcanvas', function(pdOffcanvas) {
	return {
		restrict: 'A',
		scope: {
			pdOffcanvasCover: '='
		},
		link: function(scope, el) {

			var id = scope.pdOffcanvasCover;

			if( $.isArray(id) ) {
				$.each(id, function(item, key) {
					pdOffcanvas.registerCover(key, el);
				});
			} else {
				pdOffcanvas.registerCover(id, el);
			}


			scope.$on('pdOffcanvas:show', function(event, id) {
				pdOffcanvas.show(event, id);
			});

			scope.$on('pdOffcanvas:hide', function(event, id) {
				pdOffcanvas.hide(event, id);
			});

			scope.$on('pdOffcanvas:toggle', function(event, id) {
				pdOffcanvas.toggle(event, id);
			});

		}
	}
}];
