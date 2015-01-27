'use strict';

var ngModule;

try {
	ngModule = angular.module('pd');
} catch(err) {
	ngModule = angular.module('pd', []);
}

module.exports = ngModule;


ngModule.service('pdOffcanvas', require('./services/pdOffcanvas.js'));
ngModule.directive('pdOffcanvas', require('./directives/pdOffcanvas.js'));
ngModule.directive('pdOffcanvasCover', require('./directives/pdOffcanvasCover.js'));
