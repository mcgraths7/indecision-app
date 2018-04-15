const fullName = 'Steven McGrath';
const getFirstName = (fullName) => {
	return fullName.split(' ')[0];
};
const getFirstNameExpression = (fullName) => fullName.split(' ')[0];

getFirstName(fullName);
getFirstNameExpression(fullName);

const add = (a,b) => {
	return a + b;
};

const user = {
	name: 'Steven',
	cities: ['Fremont', 'Madison', 'Morrisville'],
	printPlacesLived() {
		this.cities.forEach((city) => {
			console.log(this.name, 'has lived in', city);
		});
	}
};

console.log(add(1, 3));
user.printPlacesLived();