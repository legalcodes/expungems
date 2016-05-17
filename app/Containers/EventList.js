import React, { Component } from 'react';
import { connect } from 'react-redux';

class EventList extends Component {
		renderList() {
				return this.props.events.map((event) => {
						return (
										<li key={event.date} className="list-group-item">
												{event.title}
										</li>
						);
				});
		}

		render () {
				return (
								<ul className="list-group col-sm-4">
										{this.renderList()}
								</ul>
				);
		}
}

function mapStateToProps(state){
		return {
				events: state.events
		};
};

export default connect(mapStateToProps)(EventList);













/* 


// glue between React and Redux
// slices relevant part of state and returns that slice in an object

// whenever application state changes, EventList will re-render
// whenever application sate changes, books will be passed to props

function mapStateToProps(state){
		// Whatever is returned will show up as props inside of BookList
		return {
				events: state.events
		};
};


// for containers, export the container
// connect takes a function and a component, and returns a container
// a container is aware of the state contained by redux
export default connect(mapStateToProps)(EventList);
*/
