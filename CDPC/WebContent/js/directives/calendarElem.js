//Heading Icons : http://fontawesome.io/icons

var calendarElemObj = {};
calendarElemObj.restrict = 'E';
calendarElemObj.transclude = false;
calendarElemObj.templateUrl = "./partials/directivePartials/calendarElem.html";
calendarElemObj.scope = {
	year: "@year"
};
calendarElemObj.link = function(scope, element, attrs) {
    var monthNames = ["January", "February", "March","April", "May", "June", "July","August", "September", "October","November", "December"];
    var today = new Date();

	var CalEntry = function(f,d){
		this.fullDate = new Date(f);
		this.description = d;
		this.month= monthNames[this.fullDate.getMonth()];
		this.date = ('0' + this.fullDate.getDate()).slice(-2) + '/' + ('0' + (this.fullDate.getMonth()+1)).slice(-2) + '/' + this.fullDate.getFullYear();
		this.isDone = today > this.fullDate;
	};

	var jan = new CalEntry('2019-01-12','Club Shoot (Handgun) and Structured handgun exercise: M v Biljon');
    var feb = new CalEntry('2019-02-09','NSO, Classifier & Club Shoot (Handgun)');
    var mar = new CalEntry('2019-03-12','Club Shoot (Handgun/Rifle) and Structured handgun exercise: M v Biljon');
    var apr = new CalEntry('2019-04-13','SADPA League (Handgun)');
    var may = new CalEntry('2019-05-11','Club Shoot (Handgun) and Prospective new shooter (Huntex recruits)');
    var jun = new CalEntry('2019-06-08','Night Shoot (Handgun)');
    var jul = new CalEntry('2019-07-13','SADPA League (Handgun) and NSO');
    var aug = new CalEntry('2019-08-10','Club Shoot (Handgun)');
    var sep = new CalEntry('2019-09-14','Club Shoot (Handgun/Rifle)');
    var oct = new CalEntry('2019-10-12','DMG league');
    var nov = new CalEntry('2019-11-09','Club Shoot (Handgun/Shotgun )');
    var dec = new CalEntry('2019-12-14','Club Shoot (Year End Fun Shoot)');


	scope.calEntries = [jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec];

};

angular.module('cdpc').directive('calendarElem', function() { return calendarElemObj; } );
	