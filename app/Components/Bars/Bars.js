import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';

require("./bars.css");

var mail = require("../../Assets/web.png");
var twitter = require("../../Assets/social.png");
var site = require("../../Assets/screen.png");

export default React.createClass({
		render() {
				return (
						<div>
								<div className="barsBackground">
									<div className="container">
										<div className="col-sm-3" >
											<h3>
								        <a href="/">
													EXPUNGE MISSISSIPPI
						            </a>
											</h3>
										</div>
										<div className="col-sm-3" >
										</div>
										<div className="col-sm-2" >
											<span>
								<a target="_blank" href="http://twitter.com/expungeus">
													<img src={ twitter }/>
								        </a>
											</span>
										</div>
										<div className="col-sm-2" >
											<span>
								<a target="_blank" href="http://expungeus.org">
													<img src={ site }/>
								        </a>
											</span>
										</div>
										<div className="col-sm-2" >
											<span>
												<a href="mailto:jon@expungeus.org">
													<img src={ mail }/>
								        </a>
											</span>
										</div>
									</div>
								</div>
						</div>
				)
		}
})
