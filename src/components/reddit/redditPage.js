"use strict";

var React = require('react');
var Router = require('react-router');
var RedditActions = require('../../actions/redditActions');
var RedditStore = require('../../stores/RedditStore');
var RedditLinkList = require('./redditLinkList');
var Link = Router.Link;
var Dropdown = require('../common/dropdown');

var RedditPage = React.createClass({

	getInitialState: function(){

		var teststuff = RedditStore.getSubReddits();
		console.log('balls', teststuff);
		return {
			subreddits: RedditStore.getSubReddits()
		};
	},
	getReddit: function(){

		var selectBoxValue = $('.selectBox').val();

		RedditActions.redditData(selectBoxValue);

	},

	componentWillMount: function() {
		console.log('mounting auhtorpage component');
		RedditStore.addChangeListener(this._onChange);
	},

	//clean up when this component is unmounted.
	componentWillUnmount: function() {
		console.log('unmounting auhtorpage component');
		RedditStore.removeChangeListener(this._onChange);
	},
	_onChange: function() {
		console.log('on change listener in redditpage');
		this.setState({reddits: RedditStore.getAllReddits() });
	},

	render: function () {
		console.log('state ', this.state);


		var dropdownArray = this.state.subreddits.map(function(option){
				console.log(option);
				return option.subRedditName;
			});

		var redditlinks;

		if(this.state.reddits)
		{
			redditlinks = <RedditLinkList reddits={this.state.reddits} />;
		}

		return (
				<div>
					<h1>Reddit is fun!</h1>
					<h3>Select Subreddit: </h3>
					<div className="input-group">
						<Dropdown options={dropdownArray} />

						<button className="btn btn-default event-button" onClick={this.getReddit}> Get Reddit Data! </button>
						

					</div>

					{redditlinks}
					
				</div>
			);
	}
});


module.exports = RedditPage;
