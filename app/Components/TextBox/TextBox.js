import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';
require("./textBox.css");




export default React.createClass({
		render() {
				return (
						    <div className={this.props.grid}>
									<div className="frontCopy">
										{this.props.content}
									</div>
								</div>
				)
		}
})
