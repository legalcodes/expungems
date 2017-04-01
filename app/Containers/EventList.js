import React, { Component } from 'react';
import { connect } from 'react-redux';
import Event from '../Components/Events/Event';
// import '../Components/Events/events.css';
import './eventList.css';

class EventList extends Component {
		renderList() {
				return this.props.events.map((event) => {
						return (
										<Event key={event.id + 'eventList'} e={event} />
						);
				});
		}

		render () {
				return (
          <div>
            <ul className="list-group col-lg-12">
              {this.renderList()}
            </ul>
            <div className="partner-list-container">

              The following organizations provide free legal assistance to Mississippians who wish to expunge their criminal records
              <p className="partner-container">
                <h4>Mission First Legal Aid Office</h4>
                <div ><a className="partner-link" href="http://www.missionfirst.org">www.missionfirst.org</a></div>
                <div>601-608-0056</div>
                <div>Hinds, Madison and Rankin Counties Only</div>
              </p>

              <p className="partner-container">
                <h4>Mississippi Center for Justice</h4>
                <div><a className="partner-link" href="http://www.mscenterforjustice.org">www.mscenterforjustice.org</a></div>
                <div>228-435-7284</div>
                <div>Statewide assistance</div>
              </p>

              <p className="partner-container">
                <h4>North Mississippi Rural Legal Services</h4>
                <div><a className="partner-link" href="http://www.nmrls.com">www.nmrls.com</a></div>
                <div>1-800-498-1804</div>
                <div>North Mississippi and Delta</div>
              </p>
            </div>
          </div>
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
