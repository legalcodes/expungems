// REACT AND REACT ROUTER
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// UI COMPONENTS
import BoxButton from './Components/BoxButton/BoxButton';
import InfoBox from './Components/InfoBox/InfoBox';
import TextBox from './Components/TextBox/TextBox';
import FinePrint from './Components/FinePrint/FinePrint';
import Bars from './Components/Bars/Bars';
// GRAPH FOR ROUTES
//import MajorFunc from './directedGraph.js';
// STYLESHEET
require("./style.css");
// NESTED VIEWS
import Menu from './Components/Menu/Menu';
import HowTo from './Components/HowTo/HowTo';
import Resources from './Components/Events/Resources';
import Eligible from './Components/Eligible/Eligible';
import Disclaimer from './Components/Eligible/Disclaimer';
import Nodes from './Components/Eligible/Nodes';
import Selection from './Components/Eligible/Selection';
//QUESTION
import Question from './Components/Eligible/Question';

 /*
var newRoutes= Object.keys(graphNodes).map(function(value){
		return <Route path={value} component={Question} key={value} ></Route>
}) */

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

//render child routes using the graph keys

ReactDOM.render((
	  <Router history={hashHistory}>
				<Route path="/" component={Home}>
					<IndexRoute component={Menu}/>
					<Route path="/howto" component={HowTo}/>
					<Route path="/resources" component={Resources}/>
					<Route path="/eligible" component={Eligible} >
						<IndexRoute component={Selection} />
						<Route path="/areas/:area" component={Nodes} />
					</Route>
				</Route>
		</Router>
  ),
	document.getElementById('app')
);
