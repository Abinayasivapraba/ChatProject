var app = angular.module('chatApp',['ngRoute','ngCookies','firebase']);
app.config(function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl : 'Home/Home.html'	
	})
	
	.when('/goRegister', {
		templateUrl : 'User/Register.html',
		controller : 'UserController'
	})
	.when('/login', {
		templateUrl : 'User/Login.html',
		controller : 'UserController'
	})
	.when('/viewUsers', {
		templateUrl : 'User/ViewUsers.html',
		controller : 'UserController'
	})
	

	.otherwise({
		redirectTo : '/'
			
	});
});