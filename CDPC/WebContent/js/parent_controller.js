angular.module('cdpc.controllers').controller('ParentController', function($scope, $location, $routeParams, $route){

	
	$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
	$scope.headerOff = false;
		
	$scope.$on('$routeChangeSuccess', function (event, page) { 				
		if(page.loadedTemplateUrl != "partials/home.html"){		
			$scope.headerOff = true;
		}else{		
			$scope.headerOff = false;
		}
	});
  
});