import React, { Component } from 'react';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import graphNodes from '../directedGraph.js';

/*
const graphNodes= {
	n1: {
			text: "So what are we going to do tonight Brain?",
			options: [ ["Continue", "n2"], ["Do not continue", "n3"] ]
	},
	n2: {
			text: "The same thing we do every night Pinky...",
			options: [ ["2Continue", "n3"], ["2Do not continue", "n1"] ]
	},
	n3: {
			text: "We have reached the end",
			options: [ ["3Back to start", "n1"], ["3Back to n2", "n2"] ]
	},
 };
*/

export default class Nodes extends Component {

		constructor(props) {
				super(props);

				this.state = {
						activeNode: 'n1',
						text: graphNodes['n1'].text,
						options: graphNodes['n1'].options
				};

				this.makeButtons = this.makeButtons.bind(this);
				this.setNewNode = this.setNewNode.bind(this);
		}

		setNewNode (nodeStr) {
				var newNode = graphNodes[nodeStr];
				this.setState({
						activeNode: nodeStr,
						text: graphNodes[nodeStr].text,
						options: graphNodes[nodeStr].options
				});
				console.log('New state: ', this.state);
		}

		makeButtons (){
				// find current options
				var activeNode = this.state.activeNode;
				var optionsArr = graphNodes[ activeNode ].options;
				return optionsArr.map(function(tuple, index){
						console.log("1st Element : ", tuple[0], "2nd Element ", tuple[1] );
						return (
										<button onClick={ this.setNewNode.bind(this, tuple[1]) }
							     	key={index} className="btn btn-default btn-lg questionButton" type="button"
										> { tuple[0] } </button>
						);
				}.bind(this));
		}

		render () {
				return (
								<div className="text-center">
									<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={300} transitionEnterTimeout={100} transitionLeaveTimeout={100}>
										<div className="col-md-3">
										</div>
										<div className="col-md-6">
											<div><span className="question"> { this.state.text } </span></div>
											<div> { (this.makeButtons.bind(this))() }  </div>
										</div>
										<div className="col-md-3">
										</div>
									</ReactCSSTransitionGroup>
								</div>
				);
		}
}
