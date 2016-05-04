import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './eligible.css';
import { Link } from 'react-router';

export default React.createClass({
	render() {
		return (
				<div className="text-center">
					<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={300} transitionEnterTimeout={100} transitionLeaveTimeout={100}>
						<div className="list-group">
							<Link to='nodes' className="list-group-item">
								<h4 className="list-group-item-heading">PRE TRIAL DIVERSION</h4>
								<p className="list-group-item-text"></p>
							</Link>
							<Link to='nodes' className="list-group-item">
								<h4 className="list-group-item-heading">FELONY CONVICTIONS UNDER AGE 21</h4>
						<p className="list-group-item-text"></p>
							</Link>
							<Link to='nodes' className="list-group-item">
								<h4 className="list-group-item-heading">FELONY CONVICTIONS</h4>
						<p className="list-group-item-text">If eligible, apply at the court where you were convicted.</p>
							</Link>

						</div>
					</ReactCSSTransitionGroup>
				</div>
		);
	}
});
