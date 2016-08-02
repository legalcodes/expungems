import React from 'react';
import '../Events/events.css';
import './editEvents.css';
import {selectEvent} from '../../Actions/index.js';
import { Button, Modal, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap';

// exports a button and modal for mapping to each event

// return event views underneath the buttons

export default React.createClass({
getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
        <p></p>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
        Edit &nbsp; {this.props.e.title}
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
						<div><h4>Edit date : </h4>{this.props.e.date}</div>
						<div><h4>Edit title :</h4>{this.props.e.title}</div>
						<div><h4>Edit address : </h4>{this.props.e.address}</div>
						<div><h4>Edit admission info :</h4>{this.props.e.admission}</div>
						<div><h4>Edit miscellaneous info :</h4>{this.props.e.misc}</div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});
