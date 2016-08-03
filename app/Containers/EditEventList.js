import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditEvent from '../Components/EditEvents/EditEvent';
import { bindActionCreators } from 'redux';
import { selectEvent } from '../Actions/index.js';
import '../Components/Events/events.css';
import Event from '../Components/Events/Event';

// container that generates a view for each event

class EventList extends Component {
  renderList() {
    return this.props.events.map((event) => {
      return (
				<div key={event.id}>
						<EditEvent key={event.id} e={event} selectEvent={selectEvent} />
						<Event key={event.id + 'bareEvent'} e={event} />
				</div>
      );
    });
  }

  render() {
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

// Anything returned from mapDispatchToProps() will be props on EventList Container, e.g. this.props.selectEvent()
function mapDispatchToProps(dispatch){
    // Pass result of selectBook() to all of our reducers
    return bindActionCreators({ selectEvent: selectEvent }, dispatch);
}

// Promote EventList from component to Container - it also needs to know about selectBook dispatch method.
// selectBook is now available as props
export default connect(mapStateToProps, mapDispatchToProps)(EventList);



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
