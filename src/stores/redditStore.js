"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/ActionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _reddit = [];

var _subreddits = [];


var RedditStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getAllReddits: function() {
		console.log('REDDITSTORE gettAllReddits: ', _reddit);
		return _reddit;
	},

	getSubReddits: function() {
		console.log('REDDITSTORE getSubReddits: ', _subreddits);
		return _subreddits;
	}

});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.INITIALIZE:
			_subreddits = action.initialData.subreddits;
			RedditStore.emitChange();
			break;
		case ActionTypes.REDDIT_OBJECT:
			console.log('register reddit payload in store', action);
			_reddit = action.reddit;
			RedditStore.emitChange();
			break;

		default:
	}
});

module.exports = RedditStore;