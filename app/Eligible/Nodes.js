import React, { Component } from 'react';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// GRAPHS
import pretrialDiversionGraph from './Graphs/pretrialDiversion.js';
import fcUnder21Graph from './Graphs/fcUnder21Graph.js';
import fcGraph from './Graphs/fcGraph.js';
import dcfcGraph from './Graphs/dcfcGraph.js';
import foncGraph from './Graphs/foncGraph.js';
import mcGraph from './Graphs/mcGraph.js';
import mncGraph from './Graphs/mncGraph.js';
/* import duiicGraph from './Graphs/duiicGraph.js';
import trafficGraph from './Graphs/trafficGraph.js';
import identityGraph from './Graphs/identityGraph.js'; */

// set graphNodes to be whatever is in params

var selections = {
		pretrialDiversion: pretrialDiversionGraph,
		fcUnder21: fcUnder21Graph,
		fc: fcGraph,
		dcfc: dcfcGraph,
		fonc: foncGraph,
		mc: mcGraph,
		mnc: mncGraph,
		/* duiic: duiicGraph,
		traffic: trafficGraph,
		identity: identityGraph */
};

export default class Nodes extends Component {

		constructor(props) {
				super(props);
				var area = this.props.params.area;
				this.state = new function() {
						this.graphNodes = selections[area];
						this.activeNode = 'n1';
						this.text = this.graphNodes['n1'].text;
						this.options = this.graphNodes['n1'].options;
				};

				this.makeButtons = this.makeButtons.bind(this);
				this.setNewNode = this.setNewNode.bind(this);
		}

		setNewNode (nodeStr) {
				var newNode = this.state.graphNodes[nodeStr];
				this.setState({
						activeNode: nodeStr,
						text: this.state.graphNodes[nodeStr].text,
						options: this.state.graphNodes[nodeStr].options
				});
		}

		makeButtons (){
				// find current options
				var activeNode = this.state.activeNode;
				var optionsArr = this.state.graphNodes[ activeNode ].options;
				return optionsArr.map(function(tuple, index){
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
