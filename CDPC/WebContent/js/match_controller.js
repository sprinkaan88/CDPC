angular.module('cdpc').controller('MatchController', function($scope) {
	$scope.name = "MatchController";

	$scope.orderByCol = "score";

	$scope.shooters = [ {
		"sadpa_no" : 2271,
		"name" : "Francois Bester",
		"division" : "SSP",
		"class" : "SS",
		"pd" : 5,
		"score" : 123.4
	}, {
		"sadpa_no" : 112,
		"name" : "Jan Piet van Aswegen",
		"division" : "CCP",
		"class" : "EX",
		"pd" : 25,
		"score" : 123.4
	}, {
		"sadpa_no" : 332,
		"name" : "Schoeman, Johannes van Aardt",
		"division" : "CCP",
		"class" : "SS",
		"pd" : 45,
		"score" : 123.4
	}, {
		"sadpa_no" : 1142,
		"name" : "Beneke, Sandra Barbara Helga",
		"division" : "SSP",
		"class" : "MA",
		"pd" : 125,
		"score" : 123.4
	}, {
		"sadpa_no" : 554,
		"name" : "Holder, Ishah",
		"division" : "SSP",
		"class" : "NO",
		"pd" : 21,
		"score" : 123.4
	}, {
		"sadpa_no" : 1,
		"name" : "Hattingh, Andre Jan Hendrik",
		"division" : "SSP",
		"class" : "MM",
		"pd" : 125,
		"score" : 123.4
	}, {
		"sadpa_no" : 21,
		"name" : "Hoy, Nathan William",
		"division" : "SSP",
		"class" : "EX",
		"pd" : 253,
		"score" : 123.4
	}, {
		"sadpa_no" : 2231,
		"name" : "Tayob, Asif",
		"division" : "SSP",
		"class" : "SS",
		"pd" : 25,
		"score" : 123.4
	}, {
		"sadpa_no" : 32,
		"name" : "Blignaut, Diaan",
		"division" : "SSP",
		"class" : "MM",
		"pd" : 25,
		"score" : 123.4
	}, {
		"sadpa_no" : 2271,
		"name" : "Francois Bester",
		"division" : "SSP",
		"class" : "SS",
		"pd" : 5,
		"score" : 123.4
	}, {
		"sadpa_no" : 112,
		"name" : "Jan Piet van Aswegen",
		"division" : "CCP",
		"class" : "EX",
		"pd" : 25,
		"score" : 123.4
	}, {
		"sadpa_no" : 332,
		"name" : "Schoeman, Johannes van Aardt",
		"division" : "CCP",
		"class" : "SS",
		"pd" : 45,
		"score" : 123.4
	}, {
		"sadpa_no" : 1142,
		"name" : "Beneke, Sandra Barbara Helga",
		"division" : "SSP",
		"class" : "MA",
		"pd" : 125,
		"score" : 123.4
	}, {
		"sadpa_no" : 554,
		"name" : "Holder, Ishah",
		"division" : "SSP",
		"class" : "NO",
		"pd" : 21,
		"score" : 123.4
	}, {
		"sadpa_no" : 1,
		"name" : "Hattingh, Andre Jan Hendrik",
		"division" : "SSP",
		"class" : "MM",
		"pd" : 125,
		"score" : 123.4
	}, {
		"sadpa_no" : 21,
		"name" : "Hoy, Nathan William",
		"division" : "SSP",
		"class" : "EX",
		"pd" : 253,
		"score" : 23.4
	}, {
		"sadpa_no" : 2231,
		"name" : "Tayob, Asif",
		"division" : "SSP",
		"class" : "SS",
		"pd" : 25,
		"score" : 23.4
	}, {
		"sadpa_no" : 32,
		"name" : "Blignaut, Diaan",
		"division" : "SSP",
		"class" : "MM",
		"pd" : 25,
		"score" : 223.4
	}, {
		"sadpa_no" : 2271,
		"name" : "Francois Bester",
		"division" : "SSP",
		"class" : "SS",
		"pd" : 5,
		"score" : 123.4
	}, {
		"sadpa_no" : 112,
		"name" : "Jan Piet van Aswegen",
		"division" : "CCP",
		"class" : "EX",
		"pd" : 25,
		"score" : 123.4
	}, {
		"sadpa_no" : 332,
		"name" : "Schoeman, Johannes van Aardt",
		"division" : "CCP",
		"class" : "SS",
		"pd" : 45,
		"score" : 123.4
	}, {
		"sadpa_no" : 1142,
		"name" : "Beneke, Sandra Barbara Helga",
		"division" : "SSP",
		"class" : "MA",
		"pd" : 125,
		"score" : 123.4
	}, {
		"sadpa_no" : 554,
		"name" : "Holder, Ishah",
		"division" : "SSP",
		"class" : "NO",
		"pd" : 21,
		"score" : 2123.4
	}, {
		"sadpa_no" : 1,
		"name" : "Hattingh, Andre Jan Hendrik",
		"division" : "SSP",
		"class" : "MM",
		"pd" : 125,
		"score" : 123.4
	}, {
		"sadpa_no" : 21,
		"name" : "Hoy, Nathan William",
		"division" : "SSP",
		"class" : "EX",
		"pd" : 253,
		"score" : 3.4
	}, {
		"sadpa_no" : 2231,
		"name" : "Tayob, Asif",
		"division" : "SSP",
		"class" : "SS",
		"pd" : 25,
		"score" : 123.4
	}, {
		"sadpa_no" : 32,
		"name" : "Blignaut, Diaan",
		"division" : "SSP",
		"class" : "MM",
		"pd" : 25,
		"score" : 123.4
	}, {
		"sadpa_no" : 2271,
		"name" : "Francois Bester",
		"division" : "SSP",
		"class" : "SS",
		"pd" : 5,
		"score" : 123.4
	}, {
		"sadpa_no" : 112,
		"name" : "Jan Piet van Aswegen",
		"division" : "CCP",
		"class" : "EX",
		"pd" : 25,
		"score" : 123.4
	}, {
		"sadpa_no" : 332,
		"name" : "Schoeman, Johannes van Aardt",
		"division" : "CCP",
		"class" : "SS",
		"pd" : 45,
		"score" : 123.4
	}, {
		"sadpa_no" : 1142,
		"name" : "Beneke, Sandra Barbara Helga",
		"division" : "SSP",
		"class" : "MA",
		"pd" : 125,
		"score" : 123.4
	}, {
		"sadpa_no" : 554,
		"name" : "Holder, Ishah",
		"division" : "SSP",
		"class" : "NO",
		"pd" : 21,
		"score" : 123.4
	}, {
		"sadpa_no" : 1,
		"name" : "Hattingh, Andre Jan Hendrik",
		"division" : "SSP",
		"class" : "MM",
		"pd" : 125,
		"score" : 123.4
	}, {
		"sadpa_no" : 21,
		"name" : "Hoy, Nathan William",
		"division" : "SSP",
		"class" : "EX",
		"pd" : 253,
		"score" : 123.4
	}, {
		"sadpa_no" : 2231,
		"name" : "Tayob, Asif",
		"division" : "SSP",
		"class" : "SS",
		"pd" : 25,
		"score" : 123.4
	}, {
		"sadpa_no" : 32,
		"name" : "Blignaut, Diaan",
		"division" : "SSP",
		"class" : "MM",
		"pd" : 25,
		"score" : 123.4
	}, {
		"sadpa_no" : 2271,
		"name" : "Francois Bester",
		"division" : "SSP",
		"class" : "SS",
		"pd" : 5,
		"score" : 123.4
	}, {
		"sadpa_no" : 112,
		"name" : "Jan Piet van Aswegen",
		"division" : "CCP",
		"class" : "EX",
		"pd" : 25,
		"score" : 123.4
	}, {
		"sadpa_no" : 332,
		"name" : "Schoeman, Johannes van Aardt",
		"division" : "CCP",
		"class" : "SS",
		"pd" : 45,
		"score" : 123.4
	}, {
		"sadpa_no" : 1142,
		"name" : "Beneke, Sandra Barbara Helga",
		"division" : "SSP",
		"class" : "MA",
		"pd" : 125,
		"score" : 123.4
	}, {
		"sadpa_no" : 554,
		"name" : "Holder, Ishah",
		"division" : "SSP",
		"class" : "NO",
		"pd" : 21,
		"score" : 123.4
	}, {
		"sadpa_no" : 1,
		"name" : "Hattingh, Andre Jan Hendrik",
		"division" : "SSP",
		"class" : "MM",
		"pd" : 125,
		"score" : 123.4
	}, {
		"sadpa_no" : 21,
		"name" : "Hoy, Nathan William",
		"division" : "SSP",
		"class" : "EX",
		"pd" : 253,
		"score" : 123.4
	}, {
		"sadpa_no" : 2231,
		"name" : "Tayob, Asif",
		"division" : "SSP",
		"class" : "SS",
		"pd" : 25,
		"score" : 123.4
	}, {
		"sadpa_no" : 32,
		"name" : "Blignaut, Diaan",
		"division" : "SSP",
		"class" : "MM",
		"pd" : 25,
		"score" : 123.4
	}, {
		"sadpa_no" : 2271,
		"name" : "Francois Bester",
		"division" : "SSP",
		"class" : "SS",
		"pd" : 5,
		"score" : 123.4
	}, {
		"sadpa_no" : 112,
		"name" : "Jan Piet van Aswegen",
		"division" : "CCP",
		"class" : "EX",
		"pd" : 25,
		"score" : 123.4
	}, {
		"sadpa_no" : 332,
		"name" : "Schoeman, Johannes van Aardt",
		"division" : "CCP",
		"class" : "SS",
		"pd" : 45,
		"score" : 123.4
	}, {
		"sadpa_no" : 1142,
		"name" : "Beneke, Sandra Barbara Helga",
		"division" : "SSP",
		"class" : "MA",
		"pd" : 125,
		"score" : 123.4
	}, {
		"sadpa_no" : 554,
		"name" : "Holder, Ishah",
		"division" : "SSP",
		"class" : "NO",
		"pd" : 21,
		"score" : 123.4
	}, {
		"sadpa_no" : 1,
		"name" : "Hattingh, Andre Jan Hendrik",
		"division" : "SSP",
		"class" : "MM",
		"pd" : 125,
		"score" : 123.4
	}, {
		"sadpa_no" : 21,
		"name" : "Hoy, Nathan William",
		"division" : "SSP",
		"class" : "EX",
		"pd" : 253,
		"score" : 123.4
	}, {
		"sadpa_no" : 2231,
		"name" : "Tayob, Asif",
		"division" : "SSP",
		"class" : "SS",
		"pd" : 25,
		"score" : 123.4
	}, {
		"sadpa_no" : 32,
		"name" : "Blignaut, Diaan",
		"division" : "SSP",
		"class" : "MM",
		"pd" : 25,
		"score" : 123.4
	},

	];

	$scope.shooterProfile = function() {
		console.log("Going to shooter profile");
	};

	$scope.sortBy = function(column) {
		if ($scope.orderByCol == column)
			column = '-' + column;

		$scope.orderByCol = column;

	};

});