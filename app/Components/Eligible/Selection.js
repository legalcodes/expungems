import React from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './eligible.css';
import { browserHistory, Router, Route, Link } from 'react-router';

export default React.createClass({
	render() {
		return (
				<div className="text-center">
					<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={300} transitionEnterTimeout={100} transitionLeaveTimeout={100}>
						<div className="list-group">
							<Link to="areas/pretrialDiversion" className="list-group-item" >
									<h4 className="list-group-item-heading">PRE TRIAL DIVERSION</h4>
									<p className="list-group-item-text"></p>
							</Link>
							<Link to="areas/fcUnder21" className="list-group-item" >
									<h4 className="list-group-item-heading">FELONY CONVICTIONS UNDER AGE 21</h4>
									<p className="list-group-item-text"></p>
							</Link>
							<Link to="areas/fc" className="list-group-item" >
									<h4 className="list-group-item-heading">FELONY CONVICTIONS</h4>
									<p className="list-group-item-text"></p>
							</Link>
							<Link to="areas/dcfc" className="list-group-item" >
									<h4 className="list-group-item-heading">DRUG COURT FELONY CONVICTIONS</h4>
									<p className="list-group-item-text"></p>
							</Link>
							<Link to="areas/fonc" className="list-group-item" >
									<h4 className="list-group-item-heading">FELONY OFFENSE NO CONVICTION</h4>
									<p className="list-group-item-text"></p>
							</Link>
							<Link to="areas/mc" className="list-group-item" >
									<h4 className="list-group-item-heading">MISDEMEANOR CONVICTIONS</h4>
									<p className="list-group-item-text"></p>
							</Link>
							<Link to="areas/mnc" className="list-group-item" >
									<h4 className="list-group-item-heading">MISDEMEANOR NO CONVICTION</h4>
									<p className="list-group-item-text"></p>
							</Link>
							<Link to="areas/duiic" className="list-group-item" >
									<h4 className="list-group-item-heading">DUI / IMPLIED CONSENT</h4>
									<p className="list-group-item-text"></p>
							</Link>
							<Link to="areas/traffic" className="list-group-item" >
									<h4 className="list-group-item-heading">TRAFFIC OFFENSES / TRAFFIC SAFETY VIOLATOR COURSE</h4>
									<p className="list-group-item-text"></p>
							</Link>
							<Link to="areas/identity" className="list-group-item" >
									<h4 className="list-group-item-heading">IDENTITY THEFT</h4>
									<p className="list-group-item-text"></p>
							</Link>

						</div>
						{this.props.children}
					</ReactCSSTransitionGroup>
				</div>
		);
	}
});
