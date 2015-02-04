(function (){
	var app = angular.module('myApp', []);

	app.directive('enter', function () {
		return {
			restrict: 'A',

			// templateUrl: 'product-description.html'

			template: 'class',

			link: function (scope, element, attrs) {
				element.on('mouseenter', function (e) {
					console.log('Hi there!');
					console.log(attrs.enter);
				})

				element.on('mouseleave', function (e) {
					console.log('Bye!');
				})
			}
		}
	})
}());
