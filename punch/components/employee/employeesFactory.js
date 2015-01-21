(function () {
	'use strict';

	var app = angular.module('Punch');

	// Service. With this syntax we create new object(module) 'employees' that will be
	// available to other modules with app.controller('MainCtrl',
	// ['$scope', 'employees', function($scope, employees){

	app.factory('employees', [function(){
		var model = {
			employees: [
				{
					id: 3289123456,
					fname: 'Alice',
					lname: 'Cooper',
					title: 'fed',
					hours: 10
				},
				{
					id: 328234567,
					fname: 'Bob',
					lname: 'Smith',
					title: 'proj',
					hours: 24
				},
				{
					id: 321483843,
					fname: 'Michael',
					lname: 'Goldberg',
					title: 'qaarch',
					hours: 32
				}
			],

			jobs: {
				fed: 'Front-End Developer',
				proj: 'Project Manager',
				qaarch: 'QA Architect'
			}
		};

		return model;
	}]);
}());
