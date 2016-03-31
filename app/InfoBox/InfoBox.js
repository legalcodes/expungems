import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router'
require("./infoBox.css");

export default React.createClass({
		render() {
				return (
								<div className="col-md-5" >
								<h2>
								<Link to={this.props.link}>
									<div className="line1" style={{ color: this.props.firstLine }}>{this.props.first}</div>
								<div className="line2" style={{ color: this.props.firstLine }}>{this.props.second}</div>
								<div className="line3">{this.props.third}</div>
								</Link>
								</h2>
								</div>
				)
		}
})
