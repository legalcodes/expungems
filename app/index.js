import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router'
import HowTo from './HowTo'
import Eligible from './Eligible'
import Resources from './Resources'
require("./style.css");

var Home = React.createClass({
	render: function () {
		return (
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-4">
									<h2><Link to="/howto">EXPUNGE HOW-TO</Link></h2>
								</div>
								<div className="col-md-4">
									<h2><Link to="/eligible">AM I ELIGIBLE?</Link></h2>
								</div>
								<div className="col-md-4">
									<h2><Link to="/resources">FAQ & RESOURCES</Link></h2>
								</div>
							</div>
						</div>
		)
	}
});

ReactDOM.render((
	  <Router history={hashHistory}>
			<Route path="/" component={Home}/>
			<Route path="/howto" component={HowTo}/>
			<Route path="/eligible" component={Eligible}/>
			<Route path="/resources" component={Eligible}/>

		</Router>
  ),
	document.getElementById('app')
);
