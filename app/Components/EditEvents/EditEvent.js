import React from 'react';
import '../Events/events.css';
import './editEvents.css';
import {selectEvent} from '../../Actions/index.js';

export default React.createClass({
  render() {
      console.log('Current event: ', this.props.e.title, this.props.e.date );
    return (
        <div>
            <div className="container">

            <button type="button"
                className="btn btn-info btn-lg"
                data-toggle="modal"
                data-target={'#' + this.props.e.id}>

                Edit &nbsp;  {this.props.e.title}
            </button>

            <div className="modal fade" id={this.props.e.id} role="dialog">
                <div className="modal-dialog modal-lg">

                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h2 className="modal-title">{this.props.e.title}</h2>
                    </div>
                    <div className="modal-body">
                        <div><h4>Current date : </h4>{this.props.e.date}</div>
                        <div><h4>Current title :</h4>{this.props.e.title}</div>
                        <div><h4>Current address : </h4>{this.props.e.address}</div>
                        <div><h4>Current admission info :</h4>{this.props.e.admission}</div>
                        <div><h4>Current miscellaneous info :</h4>{this.props.e.misc}</div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                    </div>

                </div>
                </div>

            </div>
            <div className="row event-date row-eq-height">
                <h4 className="event-date-text">{this.props.e.date}</h4>
            </div>
            <div className="row row-eq-height">
                <div className="col-md-2 event-time">
                    <h4> {this.props.e.time}</h4>
                </div>
                <div className="col-md-10 event-title">
                    <h4 className="event-title-text"><b>{this.props.e.title}</b></h4>
                    <p className="event-address-text">{this.props.e.address}</p>
                    <p className="event-admission-text">{this.props.e.admission}</p>
                    <p className="event-misc-text">{this.props.e.misc}</p>
                </div>
            </div>
        </div>
    );
  }
});
