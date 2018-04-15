'use strict';

// let template = ( 
// 	<div>
// 		<h1>Steven McGrath</h1> 
// 		<p>This is changed again</p>
// 	</div>
// );

var myTemplate = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Steven McGrath'
	),
	React.createElement(
		'p',
		null,
		'Age: 27'
	),
	React.createElement(
		'p',
		null,
		'Location: North Carolina'
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(myTemplate, appRoot);
