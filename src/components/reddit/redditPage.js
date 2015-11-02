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
		return {
			subreddits: RedditStore.getSubReddits()
		};
	},
	getReddit: function(){

		var selectBoxValue = $('.selectBox').val();

		RedditActions.redditData(selectBoxValue);

	},

	componentWillMount: function() {
		RedditStore.addChangeListener(this._onChange);
	},

	//clean up when this component is unmounted.
	componentWillUnmount: function() {
		RedditStore.removeChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState({reddits: RedditStore.getAllReddits() });
	},

	render: function () {

		var dropdownArray = this.state.subreddits.map(function(option){
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
