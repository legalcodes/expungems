import React from 'react';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';


const graphNodes= {
	n1: {
		text: "So what are we going to do tonight Brain?"
	},
	n2: {
		text: "The same thing we do every night Pinky"
	},
		n3: "Hello"
 };

export default React.createClass({
	render() {
			return (
					<div>
							Nodes Component is now rendering.
					</div>
			)
	}
})
