import React from 'react';
import '../Events/events.css';
import './editEvents.css';
import {selectEvent} from '../../Actions/index.js';
import { Button,
				 Form,
				 FormControl,
				 FormGroup,
				 Col,
				 ControlLabel,
				 HelpBlock,
				 Checkbox,
				 Radio
			 } from 'react-bootstrap';

	// <div><h4>Edit date : </h4>{this.props.e.date}</div>
	// <div><h4>Edit title :</h4>{this.props.e.title}</div>
	// <div><h4>Edit address : </h4>{this.props.e.address}</div>
	// <div><h4>Edit admission info :</h4>{this.props.e.admission}</div>
	// <div><h4>Edit miscellaneous info :</h4>{this.props.e.misc}</div>

function FieldGroup({ id, label, help }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl  />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class EventForm extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      title: "",
      date: "",
      time: "",
      address: "",
      admission: "",
      misc: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("SUBMISSION HANDLED FOR : ", event.target.value);
    this.setState({ date : event.target.value });
    console.log(this.state.date);
  }

	render() {
		return (
      <Form horizontal >
				<FormGroup controlId="formHorizontalEmail" onChange={this.handleChange}>
						<Col componentClass={ControlLabel} sm={2}>
								Date
						</Col>
						<Col sm={10}>
								<FormControl type="eventdate" placeholder={this.props.e.date} />
						</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={2}>
								Title
						</Col>
						<Col sm={10}>
								<FormControl type="title" placeholder={this.props.e.title} />
						</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={2}>
								Address
						</Col>
						<Col sm={10}>
								<FormControl type="address" placeholder={this.props.e.address} />
						</Col>
				</FormGroup>

		​
				<FormGroup controlId="formControlsTextarea">
				<Col componentClass={ControlLabel} sm={2}>
						Admission Info
				</Col>
				<Col sm={10}>
						<FormControl componentClass="textarea" placeholder={this.props.e.admission} />
				</Col>
				</FormGroup>


				<FormGroup controlId="formControlsTextarea">
						<Col componentClass={ControlLabel} sm={2}>
								Misc Info
						</Col>
						<Col sm={10}>
								<FormControl componentClass="textarea" placeholder={this.props.e.misc} />
						</Col>
				</FormGroup>
		​
				<Button type="submit">
          Submit
				</Button>
		</Form>
		);
  }
}

export default EventForm;
