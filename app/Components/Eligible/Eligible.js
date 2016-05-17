import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FinePrint from '../FinePrint/FinePrint';

export default class Node extends React.Component {
		render() {
				return (
								<div>
									{this.props.children}
								</div>
				);
		}
}
