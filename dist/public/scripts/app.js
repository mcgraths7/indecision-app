'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var render = _reactDom2.default.render();

var template = React.createElement('p', null, 'This is changed again');
var appRoot = document.getElementById('app');

render(template, appRoot);
//# sourceMappingURL=app.js.map