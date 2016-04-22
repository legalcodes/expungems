import React, { Component } from 'react';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';

const graphNodes= {
	n1: {
			text: "So what are we going to do tonight Brain?",
			options: [ ["Continue", "n2"], ["Do not continue", "n3"] ]
	},
	n2: {
		text: "The same thing we do every night Pinky..."
	},
		n3: "Hello"
 };

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

		makeButtons (nodeStr){
				var optionsArr = graphNodes[nodeStr].options;
				return optionsArr.map(function(tuple, index){
						console.log("1st Element : ", tuple[0], "2nd Element ", tuple[1] );
						return (
										<button onClick={ this.setNewNode.bind(this, "n2") }
							     	key={index} className="btn btn-default btn-lg" type="button"
										> { tuple[0] } </button>
						);
				}.bind(this));
		}

		render () {
				return (
								<div>
									<div> { this.state.text } </div>
								<div> { (this.makeButtons.bind(this, "n1"))() }  </div>
								</div>
				);
		}
}
