'use strict';

var fullName = 'Steven McGrath';
var getFirstName = function getFirstName(fullName) {
	return fullName.split(' ')[0];
};
var getFirstNameExpression = function getFirstNameExpression(fullName) {
	return fullName.split(' ')[0];
};

getFirstName(fullName);
getFirstNameExpression(fullName);

var add = function add(a, b) {
	return a + b;
};

var user = {
	name: 'Steven',
	cities: ['Fremont', 'Madison', 'Morrisville'],
	printPlacesLived: function printPlacesLived() {
		var _this = this;

		this.cities.forEach(function (city) {
			console.log(_this.name, 'has lived in', city);
		});
	}
};

console.log(add(1, 3));
user.printPlacesLived();
