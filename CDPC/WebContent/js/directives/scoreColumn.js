angular.module('cdpc').directive('scoreColumn', function() {

	var targetsCustom = function(){
		console.log("Doing targetsCustom");
	}
	
	
	return {
		restrict : 'A',
		link : function(scope, element, attrs) {
			var index = parseInt(attrs.index) + 1;
			var option = attrs.scoreColumn;
			var options = scope.$parent.options;

			if (index > options[option].max) {
				targetsCustom();
				return;
			}

			var maxToRender = options[option].max;
			var amountToRender = options[option].amount;
			var columnName = options[option].prefix;

			scope.columnName = columnName + index;

		},
		template : "<b>{{columnName}}</b>"
	};
});
