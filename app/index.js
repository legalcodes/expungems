import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

var Home = React.createClass({
	render: function () {
		return <div> Home </div>
	}
});

ReactDOM.render((
	  <Router history={hashHistory}>
			<Route path="/" component={Home}/>
		</Router>
  ),
	document.getElementById('app')
);
