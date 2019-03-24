//Heading Icons : http://fontawesome.io/icons

var contentLinkObj = {};
contentLinkObj.restrict = 'E';
contentLinkObj.transclude = true;
contentLinkObj.templateUrl = "./partials/directivePartials/contentLink.html";
contentLinkObj.scope = {
	heading: "@heading",
	'goto' : "@goto",
	content: "@content",
	btnText: "@btnText",
	imgSrc: "@imgSrc",
	headingIcon: "@headingIcon"
};
contentLinkObj.link = function(scope, element, attrs) {
	scope.go = function(path){
		scope.$parent.go(path);
	};
	
};

angular.module('cdpc').directive('contentLink', function() { return contentLinkObj; } );
	