/*eslint-disable strict*/ // Disable strict because we need global vars

$ = jQuery = require('jquery');
var boostrap = require('bootstrap');
var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
render: function(){
	return	(
			<div>
				<Header/>
				<div className="container-fluid">
					<RouteHandler/>
				</div>
			</div>
		);
	}
});

module.exports = App;