// let template = ( 
// 	<div>
// 		<h1>Steven McGrath</h1> 
// 		<p>This is changed again</p>
// 	</div>
// );

let myTemplate = (
	<div>
		<h1>Steven McGrath</h1>
		<p>Age: 27</p>
		<p>Location: North Carolina</p>
	</div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(myTemplate, appRoot);