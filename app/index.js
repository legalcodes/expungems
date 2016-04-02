import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';

import HowTo from './HowTo';
import Eligible from './Eligible/Eligible';
import Resources from './Resources';
import BoxButton from './BoxButton/BoxButton';
import InfoBox from './InfoBox/InfoBox';
import TextBox from './TextBox/TextBox';
import FinePrint from './FinePrint/FinePrint';
import Bars from './Bars/Bars';
import Menu from './Menu/Menu';
require("./style.css");

//window.addEventListener("beforeunload", function () {
	//	document.body.classList.add("animate-out");
// });

var Home = React.createClass({
	render: function () {
		return (
			<div>
				<Bars/>
				{this.props.children}
				<div className="row">
						<FinePrint grid="col-md-10" />
				</div>
			</div>
		);
	}
});

ReactDOM.render((
	  <Router history={hashHistory}>
				<Route path="/" component={Home}>
					<Route path="/menu" component={Menu}/>
					<Route path="/howto" component={HowTo}/>
					<Route path="/eligible" component={Eligible}/>
					<Route path="/resources" component={Resources}/>
				</Route>
		</Router>
  ),
	document.getElementById('app')
);
