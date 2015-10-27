"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
	<Route name="app" path="/" handler={require('./components/app')}>
		<DefaultRoute handler={require('./components/homePage')} />
		<Route name="about" handler={require('./components/about/aboutPage')} />
		<Route name="reddit" handler={require('./components/reddit/redditPage')} />
		<NotFoundRoute handler={require('./components/NotFoundPage')} />

		// React route assumes the name to be the path if not specified. 
	</Route>
);

module.exports = routes;