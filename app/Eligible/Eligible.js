import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import FinePrint from '../FinePrint/FinePrint'

export default React.createClass({
	render() {
			return (
					<div className="text-center">
						<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={300}>
							<h2>
									DISCLAIMER
							</h2>
							<div className="col-md-3">
							</div>
							<div className="col-md-6">
								<p className="text-left">
								This website is intended to help clarify expungement in Mississippi and does not serve as a substitute for legal advice. It is a good idea to speak to a lawyer if you still have questions about your record and are unsure of how to answer any of the questions in this app. Use of this website does not create an attorney-client relationship.
								</p>
							</div>
							<div className="col-md-3">
							</div>
						</ReactCSSTransitionGroup>
					</div>
			)
	}
})