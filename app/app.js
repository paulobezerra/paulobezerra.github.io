angular.module('meuSite', ['ngRoute', 'ngResource', 'ngCookies'])
.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'view/home.html',
                controller: 'HomeController'
  	})
        .when('/post', {
		templateUrl: 'view/single-post.html',
                controller: 'PostController'
  	})
        .when('/sobre', {
		templateUrl: 'view/sobre.html'
  	})
	.otherwise({
		redirectTo: '/'
	});
});
