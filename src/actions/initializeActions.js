"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/ActionTypes');
var RedditApi = require('../api/redditApi');


var InitializeActions = {
	initApp: function() {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				subreddits:	RedditApi.getSubreddits()
			}
		});
	}
};

module.exports = InitializeActions;