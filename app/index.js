// REACT AND REACT ROUTER
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// UI COMPONENTS
import BoxButton from './BoxButton/BoxButton';
import InfoBox from './InfoBox/InfoBox';
import TextBox from './TextBox/TextBox';
import FinePrint from './FinePrint/FinePrint';
import Bars from './Bars/Bars';
// GRAPH FOR ROUTES
import MajorFunc from './directedGraph.js';
// STYLESHEET
require("./style.css");
// NESTED VIEWS
import Menu from './Menu/Menu';
import HowTo from './HowTo/HowTo';
import Resources from './Resources';
import Eligible from './Eligible/Eligible';
import Disclaimer from './Eligible/Disclaimer';
import Nodes from './Eligible/Nodes';
import Selection from './Eligible/Selection';
//QUESTION
import Question from './Eligible/Question';

const graphNodes= {
		n1: {
				text: "So what are we going to do tonight Brain?"
		},
		n2: {
				text: "The same thing we do every night Pinky"
		},
		n3: "Hello"
};

var newRoutes= Object.keys(graphNodes).map(function(value){
		return <Route path={value} component={Question} key={value} ></Route>
})

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
						<Route path="/nodes" component={Nodes} />
						{newRoutes}
					</Route>
				</Route>
		</Router>
  ),
	document.getElementById('app')
);
