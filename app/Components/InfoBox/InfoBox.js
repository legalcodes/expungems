import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';
require("./infoBox.css");

export default React.createClass({
		render() {
				return (
								<div className="col-md-5">
								    <div className="centered">
											<div className="firstLine" style={{ color: this.props.firstLine }}>{this.props.first}</div>
											<div className="secondLine" style={{ color: this.props.secondLine }}>{this.props.second}</div>
								<div className="thirdLine" style={{ color: this.props.thirdLine }}>{this.props.third}</div>
								    </div>
								</div>
				)
		}
})
