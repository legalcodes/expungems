import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router'

export default React.createClass({
		render() {
				return (
								<h2><Link to={this.props.link}>
								<span>{this.props.first}</span>
								<span>{this.props.second}</span>
								<span>{this.props.third}</span>
					</Link></h2>
				)
		}
})
