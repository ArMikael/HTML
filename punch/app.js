(function () {
	'use strict';

	var app = angular.module('Punch', ['ngRoute']);

	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'components/employee/main.html',
				controller : 'MainCtrl'
			})
			.when('/login', {
				templateUrl : 'partials/login.html',
				controller : 'LoginController'
			})
			.when('/employee/:employeeId', {
				templateUrl : 'components/employee/employee.html',
				controller : 'EmployeeController'
			})
			.otherwise({
				redirectTo : '/'
			})
	}]);
}());

console.log('app.js loaded');


