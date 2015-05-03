angular.module('meuSite', ['ngRoute', 'ngResource', 'ngCookies'])
.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app/view/home.html',
                controller: 'HomeController'
  	})
        .when('/post/:url', {
		templateUrl: 'app/view/single-post.html',
                controller: 'PostController'
  	})
        .when('/page/:page', {
		templateUrl: 'app/view/page.html',
                controller: 'PageController'
  	})
	.otherwise({
		redirectTo: '/'
	});
});
