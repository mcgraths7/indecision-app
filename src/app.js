const app = {
	title: 'Title',
	subtitle: 'Subtitle',
	options: ['Option one', 'Option two']
};

const user = {
	name: 'Steven McGrath',
	age: 27,
	location: 'Raleigh'
};

const template = ( 
	<div>
		{app.title ? <h1>{app.title}</h1> : 'Untitled'}
		{app.subtitle && <p>{app.subtitle}</p>}
		{app.options.length > 0 ? <p>Here are your options</p> : <p>No Options</p>}
	</div>
);

const templateTwo = (
	<div>
		{user.name ? <h1>{user.name}</h1> : 'Anonymous'}
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
		{user.location && <p>Location: {user.location}</p>}
	</div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);