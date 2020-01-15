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

	var jan = new CalEntry('2020-01-11','Club Shoot (Handgun) and Prospective shooters: M v Biljon');
    var feb = new CalEntry('2020-02-08','NSO, Multi Division Classifier for Handgun');
    var mar = new CalEntry('2020-03-14','Club Shoot (Handgun/Rifle)');
    var apr = new CalEntry('2020-04-11','Club Shoot (DMG)');
    var may = new CalEntry('2020-05-09','Club Shoot (Handgun) and Prospective shooters');
    var jun = new CalEntry('2020-06-13','Club Shoot (Day / Night Handgun)');
    var jul = new CalEntry('2020-07-11','SADPA League (Handgun)');
    var aug = new CalEntry('2020-08-08','Club Shoot (Handgun / Rifle)');
    var sep = new CalEntry('2020-09-12','Club shoot (Handgun)');
    var oct = new CalEntry('2020-10-10','DMG league');
    var nov = new CalEntry('2020-11-14','Club Shoot (Handgun / Shotgun )');
    var dec = new CalEntry('2020-12-12','Club Shoot (Year End Fun Shoot)');


	scope.calEntries = [jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec];

};

angular.module('cdpc').directive('calendarElem', function() { return calendarElemObj; } );
	