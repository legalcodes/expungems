import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';
import HowTo from './HowTo';
import Eligible from './Eligible';
import Resources from './Resources';
import BoxButton from './BoxButton/BoxButton';
import InfoBox from './InfoBox/InfoBox';
require("./style.css");

var Home = React.createClass({
	render: function () {
		return (
			<div className="container-fluid">
				<div className="row">
						<BoxButton first="EXPUNGE " third="HOW-TO" link="/howto" order="box1" firstLine="#9BA3AE" />
						<BoxButton first="AM " second="I " third="ELIGIBLE ?" link="/eligible" order="box2" firstLine="#9BA3AE" />
						<BoxButton first="FAQ " second="& " third="RESOURCES" link="/resources" order="box3" firstLine="#2A2A2A" />
				</div>
				<div className="row">
						<InfoBox first="77 MILLION" second="AMERICANS HAVE" third="A CRIMINAL RECORD" link="/resources" firstLine="#2A2A2A" />
				</div>
			</div>
		);
	}
});

ReactDOM.render((
	  <Router history={hashHistory}>
			<Route path="/" component={Home}/>
			<Route path="/howto" component={HowTo}/>
			<Route path="/eligible" component={Eligible}/>
			<Route path="/resources" component={Resources}/>

		</Router>
  ),
	document.getElementById('app')
);
