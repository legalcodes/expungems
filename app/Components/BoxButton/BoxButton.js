import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';
require("./boxButton.css");

export default React.createClass({
//		componentWillUnmount: function() {
				// document.body.classList.add("animate-out");
	//	},
		render() {
				return (
					<div className="col-lg-4" id={this.props.order}>
						<h2>
							<Link to={this.props.link}>
								<span style={{ color: this.props.firstLine }}>{this.props.first}</span>
								<span style={{ color: this.props.firstLine }}>{this.props.second}</span>
								<div>{this.props.third}</div>
							</Link>
						</h2>
					</div>
				);
		}
})
