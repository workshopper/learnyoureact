var React = require('react');
var TodoBox = require('./views/index.jsx');

var data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
React.render(<TodoBox data={data} />, document.getElementById("app"));