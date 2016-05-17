import React from 'react';
import './events.css';

export default React.createClass({
		render() {
				return (
								<li key={this.props.which.date} className="list-group-item">
										<div> {this.props.which.title}</div>
										<div> {this.props.which.date}</div>
										<div> {this.props.which.time}</div>
										<div> {this.props.which.address}</div>
										<div> {this.props.which.admission}</div>
										<div> {this.props.which.misc}</div>
								</li>

				);
		}
});
