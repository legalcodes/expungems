import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import FinePrint from '../FinePrint/FinePrint'

export default React.createClass({
	render() {
			return (
					<div>
						<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={300}>
							<h1>Eligible</h1>
							<div className="row">
								<FinePrint grid="col-md-10" />
							</div>
						</ReactCSSTransitionGroup>
			</div>
			)
	}
})
