import React from 'react';
import '../Events/events.css';
import './editEvents.css';
import {selectEvent} from '../../Actions/index.js';
import EventForm from './EventForm';
import { Button,
				 Modal,
				 Popover,
				 Tooltip,
				 OverlayTrigger
			 } from 'react-bootstrap';

// for each event, exports a button (with modal)

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
            <Modal.Title>Edit &nbsp; {this.props.e.title} &nbsp; Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
						<EventForm e={this.props.e} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
});
