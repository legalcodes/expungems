import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';

import HowTo from './HowTo/HowTo';
import Eligible from './Eligible/Eligible';
import Resources from './Resources';
import BoxButton from './BoxButton/BoxButton';
import InfoBox from './InfoBox/InfoBox';
import TextBox from './TextBox/TextBox';
import FinePrint from './FinePrint/FinePrint';
import Bars from './Bars/Bars';
import Menu from './Menu/Menu';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import MajorFunc from './directedGraph.js';



require("./style.css");

var Home = React.createClass({
	render: function () {
		return (
			<div>
				<Bars/>
				{this.props.children}
			</div>
		);
	}
});

ReactDOM.render((
	  <Router history={hashHistory}>
				<Route path="/" component={Home}>
					<IndexRoute component={Menu}/>
					<Route path="/menu" component={Menu}/>
					<Route path="/howto" component={HowTo}/>
					<Route path="/eligible" component={Eligible}/>
					<Route path="/resources" component={Resources}/>
				</Route>
		</Router>
  ),
	document.getElementById('app')
);
