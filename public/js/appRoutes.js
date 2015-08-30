angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
		.when('/click', {
			templateUrl: 'views/click/click.html',
			controller: 'ClickController'
		})
		.when('/hover', {
			templateUrl: 'views/hover/hover.html',
			controller: 'HoverController'
		})
		.when('/drag', {
			templateUrl: 'views/drag/drag.html',
			controller: 'DragController'
		})
		.when('/slider', {
			templateUrl: 'views/slider/slider.html',
			controller: 'SliderController'
		})
		.when('/carouzel', {
			templateUrl: 'views/carouzel/carouzel.html',
			controller: 'CarouzelController'
		})
		.when('/zoom', {
			templateUrl: 'views/zoom/zoom.html',
			controller: 'ZoomController'
		})

	$locationProvider.html5Mode(true);

}]);