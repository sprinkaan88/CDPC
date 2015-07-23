angular.module('cdpc',['cdpc.controllers', 'ngRoute']);
angular.module('cdpc.controllers',[]);

angular.module('cdpc').config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'NavController'
      }).
	  when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'NavController'
      }).
	  when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'NavController'
      }).
	  when('/faq', {
        templateUrl: 'partials/faq.html',
        controller: 'NavController'
      }).
	  when('/gallery', {
        templateUrl: 'partials/gallery.html',
        controller: 'NavController'
      }).
      otherwise({
        redirectTo: '/home'
      });
	  
	  
	$locationProvider.hashPrefix('!');
     //$locationProvider.html5Mode(true);
  }]);






//.config(function($routeProvider, $locationProvider){
//	console.log("Doing config for cdpc");
//  $routeProvider.when('/contact', {
//		templateUrl : 'partials/contact.html', 
//		controller: 'NavController' 
//  })
//  
//  $routeProvider.otherwise({
//          redirectTo : '/'
//  });
//  
//  //$locationProvider.hashPrefix('!');
//  //$locationProvider.html5Mode(true);
//});