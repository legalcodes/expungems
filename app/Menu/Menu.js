import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import BoxButton from '../BoxButton/BoxButton';
import InfoBox from '../InfoBox/InfoBox';
import TextBox from '../TextBox/TextBox';
import FinePrint from '../FinePrint/FinePrint'

require("./menu.css");

var frontText=<div><p> If you have a criminal record, you may have been arrested but never charged, never prosecuted, or found guilty. Still, the incident could be preventing you from achieving your goals. This problem disproportionately plagues minority communities.</p><p>Expungement is not DIY-friendly, and private legal help is expensive. ExpungeMS.org was created to address these shortcomings.</p></div>

export default React.createClass({
		render() {
				return (
						<div>
							<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={300}>

								<div className="row">
									<BoxButton first="EXPUNGE " third="HOW-TO" link="/howto" order="box1" firstLine="#9BA3AE" />
									<BoxButton first="AM  I" third="ELIGIBLE ?" link="/eligible" order="box2" firstLine="#9BA3AE" />
									<BoxButton first="FAQ & " third="RESOURCES" link="/resources" order="box3" firstLine="#2A2A2A" />
								</div>
								<div className="row">
								</div>
								<div className="row">
									<InfoBox first="77 MILLION" second="AMERICANS HAVE" third="A CRIMINAL RECORD" link="/resources"
										firstLine="#9BA3AE" secondLine="fff" thirdLine="#650000" />
									<TextBox grid="col-md-7" content={frontText} />
								</div>
								<div className="row">
									<FinePrint grid="col-md-10" />
								</div>
						</ReactCSSTransitionGroup>
					</div>
				)
		}
})
