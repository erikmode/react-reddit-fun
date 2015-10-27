"use strict";
//$ = jQuery = require('jquery');
var subReddits = require('./subreddits').subReddits;

var RedditApi = {

	getRedditData: function(selectBoxValue, callback) {

		$.getJSON("http://www.reddit.com/r/" + selectBoxValue + ".json?jsonp=?", callback)
			.error(function() {
				console.log("error");
			})
			.complete(function() {
				console.log("complete");
			});

	},

	getSubreddits: function() {
		/*$.getJSON("https://www.reddit.com/reddits.json?limit=20", callback)
			.error(function() {
				console.log("error");
			})
			.complete(function() {
				console.log("complete");
			});
		*/
		return JSON.parse(JSON.stringify(subReddits));
			
	}



};

module.exports = RedditApi;
