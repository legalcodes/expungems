import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';
require("./bars.css");
var mail = require("../Assets/web.png");
var twitter = require("../Assets/social.png");
var site = require("../Assets/screen.png");

export default React.createClass({
		render() {
				return (
						<div>
								<nav className="navbar navbar-default navbar-fixed-top">
									<div className="container">
										<div className="col-md-3" >
											<h3>
												EXPUNGE MS
											</h3>
										</div>
										<div className="col-md-3" >
											<span>
												<img src={ mail }/>
											</span>
										</div>
										<div className="col-md-3" >
											<span>
												<img src={ twitter }/>
											</span>
										</div>
										<div className="col-md-3" >
											<span>
												<img src={ site }/>
											</span>
										</div>
									</div>
								</nav>
						</div>
				)
		}
})
