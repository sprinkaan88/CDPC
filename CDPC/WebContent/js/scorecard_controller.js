angular.module('cdpc').controller('ScoreCardController', function($scope) {
	$scope.name = "ScoreCardController";

	// These values are based on the scoresheet table height of 90% and the
	// header height of 4% and column height of 6% and 16 columns
	var scoresheetHeight = angular.element("#scoreSheet").height() * 0.9;
	$scope.lineHeight = (scoresheetHeight - (scoresheetHeight * 0.04)) / 16;

	var scoresheetWidth = angular.element("#scoreSheetHeadings").width();
	var marginOffset = (scoresheetWidth / 2) - (scoresheetWidth * 0.3) / 2;
	$scope.headingsStyle = {"margin-left" : marginOffset+"px"};
	

$scope.columnStyle = {
		"line-height" : $scope.lineHeight + "px"
	};

	$scope.options = {
		"targets" : {
			"max" : 10, //Static field, not to change
			"prefix" : "T", //Static field, not to change
			"numberOf" : 10
		},
		"strings" : {
			"max" : 6,
			"prefix" : "String ",
			"numberOf" : 3
		},
		"totalCol" : 16
	};

	$scope.getNumber = function(num) {
		return new Array(num);
	}

});