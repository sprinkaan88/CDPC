angular.module('cdpc').controller('ScoreCardController', function($scope) {
	$scope.name = "ScoreCardController";

	// These values are based on the scoresheet table height of 90% and the
	// header height of 4% and column height of 6% and 16 columns
	var scoresheetHeight = angular.element("#scoreSheet").height() * 0.9;
	$scope.lineHeight = (scoresheetHeight - (scoresheetHeight * 0.04)) / 16;

	$scope.columnStyle = {
		"line-height" : $scope.lineHeight + "px"
	};

	$scope.options = {
		"targets" : {
			"max" : 9,
			"prefix" : "T",
			"amount" : 16
		},
		"strings" : {
			"max" : 6,
			"prefix" : "String ",
			"amount" : 1
		},
		"totalCol" : 16
	};

	$scope.getNumber = function(num) {
		return new Array(num);
	}

});