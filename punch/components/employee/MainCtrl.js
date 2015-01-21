(function () {
	'use strict';

	var app = angular.module('Punch');

	app.controller('MainCtrl', ['$scope', '$http', 'employees',
		function($scope, $http, model){

		// Ajax request in AngularJS
		$http.get('components/bg-authors.json').success(function(data){
			$scope.data = data;
		}).error(function(data, status){
			console.log('Error ' + status);
		});

		$scope.model = model;

		$scope.toggleEdit = function(employee){
			// Toggle Flag for boolean value
			employee.edit = !employee.edit;

			// If we want to convert string to boolean value
			// employee.edit = !!employee.edit;
			// employee.edit = Boolean("false");
		}

		$scope.addEmployee = function(newEmployee) {
			newEmployee = angular.copy(newEmployee);
			$scope.model.employees.push(newEmployee);
		}

		$scope.deleteEmployee = function(index) {
			$scope.model.employees.splice(index, 1);
		}

		$scope.getTitle = function(id) {
			// console.log(id);
			// console.log($scope.model.jobs);
			return $scope.model.jobs[id];
		}

		$scope.searchFn = function(value, index) {
			if (!$scope.searchText) {
				return true;
			}
			return value.lname.indexOf($scope.searchText) > -1;
		}

		// Adding current time for checking filters features
		var timeNow = new Date();
		$scope.now = timeNow;


		// Adding filter by any column with reverse option
		$scope.sortField = undefined;
		$scope.reverse = false;

		$scope.sort = function(fieldName) {
			if ($scope.sortField === fieldName) {
				$scope.reverse = !$scope.reverse;
			} else {
				$scope.sortField = fieldName;
				$scope.reverse = false;
			}
		}

		$scope.isSortUp = function(fieldName){
			return $scope.sortField === fieldName && !$scope.reverse;
		}

		$scope.isSortDown = function(fieldName){
			return $scope.sortField === fieldName && $scope.reverse;
		}

	}]);

	// app.filter('reverse', function(employees) {
	// 	console.log(employees);
	// 	return function (text){
	// 		return text.split('').reverse().join('');
	// 	};
	// });


}());
