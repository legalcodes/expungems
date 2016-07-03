import React from 'react';
import './events.css';

export default React.createClass({
		render() {
				return (
            <div>
                <div className="row event-date row-eq-height">
                    <h4 className="event-date-text">{this.props.which.date}</h4>
                </div>
                <div className="row row-eq-height">
                    <div className="col-md-2 event-time">
                        <h4> {this.props.which.time}</h4>
                    </div>
                    <div className="col-md-10 event-title">
                        <h4 className="event-title-text"><b>{this.props.which.title}</b></h4>
                        <p className="event-address-text">{this.props.which.address}</p>
                        <p className="event-admission-text">{this.props.which.admission}</p>
                        <p className="event-misc-text">{this.props.which.misc}</p>
                    </div>
                </div>
            </div>

                /*
								<li key={this.props.which.date} className="list-group-item">
										<div> {this.props.which.title}</div>
										<div> {this.props.which.date}</div>
										<div> {this.props.which.time}</div>
										<div> {this.props.which.address}</div>
										<div> {this.props.which.admission}</div>
										<div> {this.props.which.misc}</div>
								</li>
 */

				);
		}
});
