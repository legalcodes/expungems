import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import FinePrint from '../FinePrint/FinePrint'
require('./howto.css')


export default React.createClass({
	render() {
		return (
				<div className="text-center">
					<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={300}>
						<h2 className="titleHowTo">
						  MISSISSIPPI EXPUNGEMENT HOW - TO
						</h2>
				    <div className="row">
							<div className="col-md-3">
							</div>
							<div className="col-md-6">
								<h3 className="headerHowTo text-left">What is Expungement?</h3>
								<p className="bodyHowTo text-left">
									Expungement is the process used to erase a criminal record; it is a way to restore a person to the legal status they were in before the incident that generated the record. Following an expungement, you will never be guilty of perjury or false statement for failing to mention the expunged arrest or conviction.
				( See Miss. Code Ann. § 99-19-71 )
								</p>
				<h3 className="headerHowTo text-left">How Much Does Expungement Cost?</h3>
								<p className="bodyHowTo text-left">
				Expungement in Mississippi will cost at least $150 by law. (See § 99-19-72)
								</p>
							</div>
							<div className="col-md-3">
							</div>
						</div>


						<div>
							<FinePrint />
						</div>
				</ReactCSSTransitionGroup>
				</div>
		)
	}
})
