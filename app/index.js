import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router'
import HowTo from './HowTo'
import Eligible from './Eligible'
import Resources from './Resources'
import BoxButton from './BoxButton'
require("./style.css");

var Home = React.createClass({
	render: function () {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4">
						<BoxButton first="EXPUNGE " second="HOW" third="-TO" link="/howto" /> 
					</div>
					<div className="col-md-4">
						<BoxButton first="AM " second="I " third="ELIGIBLE?" link="/eligible" /> 
					</div>
					<div className="col-md-4">
						<BoxButton first="FAQ " second="AND" third="RESOURCES" link="/resources" /> 
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
			<Route path="/resources" component={Resources}/>

		</Router>
  ),
	document.getElementById('app')
);
