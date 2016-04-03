import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';
require("./bars.css");

export default React.createClass({
		render() {
				return (
						<div>
								<div className="barsBackground">
									<div className="container">
										<div className="col-xs-3" >
											<h3>
												EXPUNGE MISSISSIPPI
											</h3>
										</div>
										<div className="col-xs-3" >
										</div>
										<div className="col-xs-2" >
											<span>
												<img src={require('../Assets/social.png')} />
											</span>
										</div>
										<div className="col-xs-2" >
											<span>
											</span>
										</div>
										<div className="col-xs-2" >
											<span>
											</span>
										</div>
									</div>
								</div>
						</div>
				)
		}
})
