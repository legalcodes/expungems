import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const graphNodes= {
		n1: {
				text: "So what are we going to do tonight Brain?"
		},
		n2: {
				text: "The same thing we do every night Pinky"
		},
		n3: "Hello"
};


export default React.createClass({
		render() {
				return (
								<div className="text-center">
										<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={300} transitionEnterTimeout={100} transitionLeaveTimeout={100}>
										<h2 className="fromTop">
												DISCLAIMER
								    </h2>
										<div className="col-md-3">
										</div>
										<div className="col-md-6">
												<p className="text-left">
												This website is intended to help clarify expungement in Mississippi and does not serve as a substitute for legal advice. It is a good idea to speak to a lawyer if you still have questions about your record and are unsure of how to answer any of the questions in this app. Use of this website does not create an attorney-client relationship.
												</p>
												<button className="btn btn-default btn-lg " type="button" >I Accept</button>
										</div>
										<div className="col-md-3">
										</div>
										</ReactCSSTransitionGroup>
								</div>
				);
		}
})
