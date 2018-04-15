console.log('Running');

let template = React.createElement(
	"p",
	{ id: "identifier" },
	"This is JSX"
);
let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);