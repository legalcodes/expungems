import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router'
import HowTo from './HowTo'
import Eligible from './Eligible'


var Home = React.createClass({
	render: function () {
		return (
				<div>
				  <h1>Home</h1>
					<li><Link to="/howto">How-To</Link></li>
					<li><Link to="/eligible">Eligible</Link></li>
				</div>
				
		)
	}
});

ReactDOM.render((
	  <Router history={hashHistory}>
			<Route path="/" component={Home}/>
			<Route path="/howto" component={HowTo}/>
			<Route path="/eligible" component={Eligible}/>
		</Router>
  ),
	document.getElementById('app')
);
