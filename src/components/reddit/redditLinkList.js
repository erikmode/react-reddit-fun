"use strict";

var React = require('react');
var Router = require('react-router');

var RedditLinkList = React.createClass({
	propTypes: {
		
	},


	render: function () {

		var subRedditTitle = this.props.reddits[0].data.subreddit; 

		var storyNodes = this.props.reddits.map(function(item) {

			var storyImage;
			if (item.data.preview)
			{
				storyImage = <img className="storyImg" src={item.data.preview.images[0].source.url}/>;
				
			}
			else {
				console.log(item.data.id + ": " + "NO PREVIEW IMAGE");
			}

			return (
				<tr className="story" key={item.data.url}>
					<td>
						<p className="score">{item.data.score}</p>
					</td>
					<td>
						<p className="title">
							<a href={item.data.url}>
								{item.data.title}
							</a>
						</p>
						<p className="author">
							Posted by <b>{item.data.author}</b>
						</p>
						<a className="comment" href={"http://reddit.com" + item.data.permalink}>Comments</a>
					</td>
					<td>
						{storyImage}
					</td>
				</tr>
			);
		});


		return (
			<div>
				<h2>{subRedditTitle}</h2>
				<table className="redditTable">
					<tbody>
						{storyNodes}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = RedditLinkList;