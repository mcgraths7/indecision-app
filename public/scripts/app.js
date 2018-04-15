'use strict';

var app = {
	title: 'Title',
	subtitle: 'Subtitle'
};

var user = {
	name: 'Steven McGrath',
	age: 27,
	location: 'North Carolina'
};

// function getLocation(location) {
// 	return location ? location : 'Unknown';
// }

// function getLocation(location) {
// 	return location ? <p>Location: {location}</p> : undefined;
// }
// function getAge(age) {
// 	return age ? <p>Age: {age}</p> : undefined;
// }
// function getName(name) {
// 	return name ? <h1>{name}</h1> : undefined;
// }

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	React.createElement(
		'p',
		null,
		app.subtitle
	)
);

var templateTwo = React.createElement(
	'div',
	null,
	user.name ? React.createElement(
		'h1',
		null,
		user.name
	) : 'Anonymous',
	user.age ? React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	) : undefined,
	user.location ? React.createElement(
		'p',
		null,
		'Location: ',
		user.location
	) : undefined
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
