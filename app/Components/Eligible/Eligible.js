import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FinePrint from '../FinePrint/FinePrint';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';
import Disclaimer from './Disclaimer';

/*
const nodes= {
		1: {
				text: "So what are we going to do tonight Brain?"
		},
		2: {
				text: "The same thing we do every night Pinky"
		}
};
 */

// Render routes for eligibility tree
// render "Disclaimer" as the first node in Graph

export default class Node extends React.Component {
		render() {
				return (
								<div>
									"Eligible Component"
									{this.props.children}
								</div>
				);
		}
}
