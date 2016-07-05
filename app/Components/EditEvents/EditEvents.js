import React from 'react';
import EditEventList from '../../Containers/EditEventList';

// create Event component
// create Events component ( that displays all events )

export default React.createClass({
		render() {
				return (
                <div className="container-fluid event-container">
                    <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10"><EditEventList /></div>
                    <div className="col-md-1"></div>
                </div>
                </div>

				);
		}
});
