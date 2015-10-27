"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Page not found</h1>
				<p>Whooops! Nothing to see here</p>
				<p><Link to="app">Move along, please</Link></p>
			</div>
		);
	}
});


module.exports = NotFoundPage;

