"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var RedditApi = require('../api/redditApi');
var ActionTypes = require('../constants/ActionTypes');

var RedditActions = {
	redditData: function(selectBoxValue) {
		console.log("catching reddit object from api...");

		var redditObject = {};

		RedditApi.getRedditData(selectBoxValue, function(result) {
			redditObject = result.data.children;

			console.log('RESULTS', result);

			Dispatcher.dispatch({
				actionType: ActionTypes.REDDIT_OBJECT,
				reddit: redditObject
			}); //Hey dispatcher, go tell all the stores that an redditobject was just created.

		}); 

	}
};

module.exports = RedditActions;