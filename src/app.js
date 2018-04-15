let app = {
	title: 'Title',
	subtitle: 'Subtitle'
};

let user = {
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

let template = ( 
	<div>
		<h1>{app.title}</h1> 
		<p>{app.subtitle}</p>
	</div>
);

let templateTwo = (
	<div>
		{user.name ? <h1>{user.name}</h1> : 'Anonymous'}
		{user.age ? <p>Age: {user.age}</p> : undefined}
		{user.location ? <p>Location: {user.location}</p> : undefined}
	</div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);