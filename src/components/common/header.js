"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function(){
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<Link to="app" className="navbar-brand">
						<img className="my-logo" src="images/reddit-logo.png" />
					</Link>
					<ul className="nav navbar-nav">
						<li><Link to="app">Home</Link></li>
						<li><Link to="about">About</Link></li>
						<li><Link to="reddit">Reddit</Link></li>
					</ul>	
				</div>
			</nav>
		);
	}
});


module.exports = Header;

