app.factory('NextBackBasicService', function($route, $location) {
  //array for keeping defined routes
  var routes = [];

  angular.forEach($route.routes, function(config, route) {
    //not to add same route twice
    if (angular.isUndefined(config.redirectTo)) {
      routes.push(route);
    }
  });

  return {
    goNext: function() {
      var nextIndex = routes.indexOf($location.path()) + 1;
      if (nextIndex === routes.length) {
        $location.path(routes[0]);
      } else {
        $location.path(routes[nextIndex]);
      }
    },
    goBack: function() {
      var backIndex = routes.indexOf($location.path()) - 1;
      if (backIndex === -1) {
        $location.path(routes[routes.length - 1]);
      } else {
        $location.path(routes[backIndex]);
      }
    }
  };

});


/*
app.run(function($rootScope, NextBackBasicService){
  $rootScope.goNext = function() {
    NextBackBasicService.goNext();
  };

  $rootScope.goBack = function() {
    NextBackBasicService.goBack();
  };
});

*/