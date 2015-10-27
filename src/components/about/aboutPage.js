"use strict";

var React = require('react');

var About = React.createClass({
	/* Trying out transitions
	statics: {	
		willTransitionTo: function(transition, params, query, callback) {
			if (!confirm('are you sure you want to go there?')) {
				transition.about();
			} else {
				callback();
			}
	}, 

		willTransitionFrom: function(transition, component) {
			if (!confirm('are you sure you want to leave?')) {
				transition.about();
			}
		}
	}, 
	*/
	render: function(){
		return (
			<div>
				<h1>About</h1>
				<p> 
					This is a funny homepage made to learn react and the flux pattern.
					This application uses the following technologies:
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Gulp</li>
						<li>Browserify</li>
						<li>Bootstrap</li>
						<li>Reddit Api</li>
					</ul>
				</p>
			</div>
		);
	}
});


module.exports = About;
