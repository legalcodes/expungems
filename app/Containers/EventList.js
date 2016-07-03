import React, { Component } from 'react';
import { connect } from 'react-redux';
import Event from '../Components/Events/Event';

class EventList extends Component {
		renderList() {
				return this.props.events.map((event) => {
						return (
										<Event key={event.date} which={event} />
						);
				});
		}

		render () {
				return (
								<ul className="list-group col-lg-12">
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
