'use strict';

var template = React.createElement(
  'p',
  null,
  'This is changed again'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
