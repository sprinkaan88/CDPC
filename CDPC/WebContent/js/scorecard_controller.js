angular.module('cdpc').controller('ScoreCardController', 	function($scope) {
	
			$scope.name = "ScoreCardController";

			// These values are based on the scoresheet table height of 90% and
			// the
			// header height of 4% and column height of 6% and 16 columns
			var scoresheetHeight = angular.element("#scoreSheet").height() * 0.9;
			$scope.lineHeight = (scoresheetHeight - (scoresheetHeight * 0.04)) / 16;

			var scoresheetWidth = angular.element("#scoreSheetHeadings").width();
			var marginOffset = (scoresheetWidth / 2) - (scoresheetWidth * 0.3) / 2;
			$scope.headingsStyle = {
				"margin-left" : marginOffset + "px"
			};

			$scope.columnStyle = {
				"line-height" : $scope.lineHeight + "px"
			};

			$scope.options = {
				"targets" : {
					"max" : 10, // Static field, not to change
					"prefix" : "T", // Static field, not to change
					"numberOf" : 10
				},
				"strings" : {
					"max" : 6,
					"prefix" : "String ",
					"numberOf" : 2
				},
				"totalCol" : 16
			};

			$scope.scoring = {
				"totalPointsDown" : 0,
				"stringTime" : 0,
				"proceduralErrors" : 0,
				"hont" : 0,
				"ftn" : 0,
				"ftdr" : 0,
				"stageScore" : 0,
				"scoreLabel12" : 0,
				"secondsLabel11" : 0,
				"secondsLabel12" : 0,
				"secondsLabel13" : 0,
				"secondsLabel14" : 0,
				"secondsLabel15" : 0,
				"secondsLabel16" : 0
			};

			$scope.getNumber = function(num) {
				return new Array(num);
			}

			$scope.scoringChanged = function(index) {
				console.log("scoringChanged");

				if (index < 11) {
					$scope.scoring.totalPointsDown = 0;

					for (i = 1; i <= $scope.options.targets.numberOf; i++) {
						var pointsDown = parseInt(angular.element("#target" + i)[0].value);
						if (!isNaN(pointsDown))
							$scope.scoring.totalPointsDown += pointsDown;
					}

					$scope.scoring.scoreLabel12 = $scope.scoring.totalPointsDown;
					$scope.scoring.secondsLabel12 = $scope.scoring.totalPointsDown * 0.5;
				} else {
					switch (index) {
					case 13: {
						var pe = parseInt(angular.element("#target" + index)[0].value);
						$scope.scoring.proceduralErrors = pe;
						$scope.scoring.secondsLabel13 = pe * 3;
						break;
					}
					case 14:
						var hont = parseInt(angular.element("#target" + index)[0].value);
						$scope.scoring.hont = hont;
						$scope.scoring.secondsLabel14 = hont * 5;
						break;
					case 15:
						var ftn = parseInt(angular.element("#target" + index)[0].value);
						$scope.scoring.ftn = ftn;
						$scope.scoring.secondsLabel15 = ftn * 5;
						break;
					case 16:
						var ftdr = parseInt(angular.element("#target" + index)[0].value);
						$scope.scoring.ftdr = ftdr;
						$scope.scoring.secondsLabel16 = ftdr * 20;
						break;

					}

				}
				doStageTotal();
			}

			$scope.timeChanged = function() {
				console.log("timeChanged");
				$scope.scoring.stringTime = 0;

				for (i = 1; i <= $scope.options.strings.numberOf; i++) {
					var stringTime = parseFloat(angular.element("#string" + i)[0].value);
					if (!isNaN(stringTime))
						$scope.scoring.stringTime += stringTime;
				}

				$scope.scoring.secondsLabel11 = $scope.scoring.stringTime;
				doStageTotal();
			}

			function doStageTotal() {
				$scope.scoring.stageScore = $scope.scoring.secondsLabel11 + $scope.scoring.secondsLabel12 + $scope.scoring.secondsLabel13
						+ $scope.scoring.secondsLabel14 + $scope.scoring.secondsLabel15 + $scope.scoring.secondsLabel16;
			}

			$scope.getScoreLabelValue = function(index) {
				return $scope.scoring["scoreLabel" + index];
			}

			$scope.getSecondsLabelValue = function(index) {
				return $scope.scoring["secondsLabel" + index];
			}

		});