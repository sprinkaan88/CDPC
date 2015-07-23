angular.module('cdpc.controllers').controller('NavController', function($rootScope, $scope, $location, $route, $routeParams){
//console.log("Nav Controller");
	$scope.name = "NavController";
    $scope.params = $routeParams;

	
	var partialsHome = 'partials/';
	$scope.headerOff = false;
	var internalNav = true;
	
	$scope.headerOff = false;
		
	$scope.$on('$routeChangeSuccess', function (event, page) { 				
		if(page.loadedTemplateUrl != "partials/home.html"){		
			$scope.headerOff = true;
		}else{		
			$scope.headerOff = false;
		}
	});
	
});