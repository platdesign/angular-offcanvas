'use strict';

module.exports = ['$rootScope', function($scope) {
	var service = this;
	var store = {};
	var docEl = $(document);
	var activeItem;
	var eventName = function(event, id) {
		return event+'.pdOffCanvas-'+id;
	};



	this.register = function(id, el) {
		var item = store[id] = store[id] || {};

		item.id = id;
		item.canvasEl = el;
		el.hide();

		el.addClass('pd-offcanvas-'+id);
	};

	this.registerCover = function(id, el) {
		var item = store[id] = store[id] || {};

		item.coverEl = el;
		el.addClass('pd-offcanvas-cover-'+id);
	};


	this.show = function(event, id) {

		var item = store[id];
		if(!item) { return; }

		var cover = item.coverEl;
		var canvas = item.canvasEl;

		if( cover.status === true && activeItem ) {
			// Switch only between canvas
			// remove the old events to prevent closing the cover
			docEl.off( eventName('keyup', activeItem.id) );
			docEl.off( eventName('click', activeItem.id) );
			service.hide(event, activeItem.id);
			canvas.show();

			if(activeItem !== item) {
				$scope.$broadcast('pdOffCanvas:visible', id);
			}
		} else {
			canvas.show();
			$scope.$broadcast('pdOffCanvas:visible', id);
		}


		if(activeItem && activeItem.canvasEl !== canvas) {
			activeItem.canvasEl.hide();
		}

		cover.addClass('pd-offcanvas-cover-move');
		cover.addClass('pd-offcanvas-cover-move-'+id);



		setTimeout(function() {
			docEl.on( eventName('keyup', id) , function(e) {
				if(e.which === 27) {
					service.hide(e, id);
				}
			});

			docEl.on( eventName('click', id) , function(e) {
				var target = $(e.target);
				if( !target.is(item.canvasEl) && !item.canvasEl.has(target).length ) {
					e.preventDefault();
					service.hide(e, id);
				}
			});
		});


		cover.status = true;
		activeItem = item;
	};

	this.hide = function(event, id, hide) {
		var item = store[id];
		if(!item) { return; }

		var cover = item.coverEl;
		var canvas = item.canvasEl;



		cover.removeClass('pd-offcanvas-cover-move');
		cover.removeClass('pd-offcanvas-cover-move-'+id);
		$scope.$broadcast('pdOffCanvas:hidden', id);

		cover.status = false;

		docEl.off( eventName('keyup', id) );
		docEl.off( eventName('click', id) );
	};


	this.toggle = function(event, id) {
		var item = store[id];
		if(!item) { return; }

		var cover = item.coverEl;

		if(!cover.status) {
			service.show(event, id);
		} else {
			service.hide(event, id);
		}
	};

}];
