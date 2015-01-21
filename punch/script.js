(function () {
	'use strict';

	var app = angular.module('Punch');

	// Creating Custom filter to Angular
	app.filter('searchBy', [function() {
		return function(arr, searchText, prop) {
			if (!searchText) {
				return arr;
			}

			return arr.filter(function(item) {
				return item[prop].indexOf(searchText) > -1;
			})
		}
	}]);

}());

console.log('script.js loaded');
