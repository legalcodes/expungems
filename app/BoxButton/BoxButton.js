import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router'
require("./boxButton.css");

export default React.createClass({
		render() {
				return (
					<div className="col-md-4" id={this.props.order}>
						<h2>
							<Link to={this.props.link}>
								<span style={{ color: this.props.firstLine }}>{this.props.first}</span>
								<span style={{ color: this.props.firstLine }}>{this.props.second}</span>
								<div>{this.props.third}</div>
							</Link>
						</h2>
					</div>
				)
		}
})
