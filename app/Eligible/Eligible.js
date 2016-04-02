import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default React.createClass({
	render() {
			return (
					<div>
						<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
							<h1>Eligible</h1>
						</ReactCSSTransitionGroup>
			</div>
			)
	}
})
