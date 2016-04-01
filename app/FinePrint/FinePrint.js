import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';
require("./finePrint.css");

export default React.createClass({
		render() {
				return (
							<div>
								<div className="col-md-1">
								</div>
								<div className={this.props.grid}>
									<p className="fine">
										This website is intended to help clarify expungement in Mississippi and does not serve as a substitute for legal advice. It is a good idea to speak to a lawyer if you still have questions about your record and are unsure of how to answer any of the questions in this app. Use of this website does not create an attorney-client relationship.
									</p>
								</div>
								<div className="col-md-1">
								</div>
							</div>
				)
		}
})
