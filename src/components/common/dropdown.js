"use strict";

var React = require('react');

var Dropdown = React.createClass({
	propTypes: {
		options: React.PropTypes.array.isRequired
	},

	render: function(){
		
		if(this.props.options) {
			var dropdownValues = this.props.options.map(function(option, optionId){

				return (		
						<option key={optionId}>
							<span value={option}>{option}</span>
						</option>
				);
			});
		}
		
		return (
			<div className="subreddits-dropdown">
				<select ref="selectBox" className="form-control selectBox" >
					{dropdownValues}
				</select>
			</div>

			);
	}
});

module.exports = Dropdown;

