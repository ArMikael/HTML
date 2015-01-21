(function () {
	'use strict';

	var app = angular.module('Punch');

	// We need $routeParams when we want to use $routeProvider variables in our Controllers
	// For example, here we using $routeParams to get the :employeeId variable.
	app.controller('EmployeeController',
		['$scope', '$routeParams', function($scope, $routeParams){
			$scope.employeeID = $routeParams.employeeId;
			console.log($routeParams);
	}]);
}());

console.log('EmployeeController loaded');
