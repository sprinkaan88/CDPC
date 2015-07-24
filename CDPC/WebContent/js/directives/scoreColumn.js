angular.module('cdpc').directive('scoreColumn', function() {

	var targetsCustom = function(index, scope) {

		switch (index) {
			case 12: {
				scope.columnName = "Total Points Down";
				break;
			}
			case 13: {
				scope.columnName = "Procedural Errors";
				break;
			}
			case 14: {
				scope.columnName = "Hit On Non Threat";
				break;
			}
			case 15: {
				scope.columnName = "Failure To Neutralize";
				break;
			}
			case 16: {
				scope.columnName = "Failure To Do Right";
				break;
			}
		}

	}
	
	var stringsCustom = function(index, scope) {

		switch (index) {
			case 11: {
				scope.columnName = "Total Time";
				break;
			}
			case 12: {
				scope.columnName = "X 0.50 seconds";
				break;
			}
			case 13: {
				scope.columnName = "X 3.00 seconds";
				break;
			}
			case 14: {
				scope.columnName = "X 5.00 seconds";
				break;
			}
			case 15: {
				scope.columnName = "X 5.00 seconds";
				break;
			}
			case 16: {
				scope.columnName = "X 20.00 seconds";
				break;
			}
		}

	}

	return {
		restrict : 'A',
		link : function(scope, element, attrs) {
			var index = parseInt(attrs.index) + 1;
			var option = attrs.scoreColumn;
			var options = scope.$parent.options;
			var maxToRender = options[option].max;

			if (index > maxToRender) {

				if (option == 'targets') {
					targetsCustom(index, scope);
				} else if (option == 'strings') {
					stringsCustom(index, scope);
				}

				return;
			}

			var numberToRender = options[option].numberOf;
			var columnName = options[option].prefix;

			if (index <= numberToRender) {
				scope.columnName = columnName + index;
			}

		},
		template : "<b>{{columnName}}</b>"
	};
});
