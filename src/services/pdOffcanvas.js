'use strict';

module.exports = ['$rootScope', function($scope) {
	var service = this;

	var store = {};
	var docEl = $(document);

	this.register = function(name, el) {

		var item = store[name] = store[name] || {};

		item.canvasEl = el;
	};

	this.registerCover = function(name, el) {
		var item = store[name] = store[name] || {};

		item.coverEl = el;
	};

	this.toggle = function(id) {
		var item = store[id];
		if(!item) { return; }



		var escEventName = 'keyup.pdOffCanvas-'+id;
		var outClickEventName = 'click.pdOffCanvas-'+id;

		function eventsOn() {
			setTimeout(function() {
				docEl.on(escEventName, function(e) {
					if(e.which === 27) {
						service.toggle(id);
					}
				});

				docEl.on(outClickEventName, function(e) {
					var target = $(e.target);
					if( !target.is(item.canvasEl) && !item.canvasEl.has(target).length ) {
						e.preventDefault();
						service.toggle(id);
					}
				});
			});

		}

		function eventsOff() {
			docEl.off(escEventName);
			docEl.off(outClickEventName);
		}


		var cover = item.coverEl;

		if(!item.status) {
			item.status = true;
			cover.addClass('pd-offcanvas-cover-move');
			$scope.$broadcast('pdOffCanvas:show', id);
			eventsOn();

		} else {
			item.status = false;
			cover.removeClass('pd-offcanvas-cover-move');
			$scope.$broadcast('pdOffCanvas:hide', id);
			eventsOff();
		}

	};
}];
