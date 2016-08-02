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

function formInstance () {
	return (
		<Form horizontal>
			<FormGroup controlId="formHorizontalEmail">
				<Col componentClass={ControlLabel} sm={2}>
						Date
				</Col>
				<Col sm={10}>
						<FormControl type="date" placeholder="Email" />
				</Col>
			</FormGroup>

			<FormGroup controlId="formHorizontalEmail">
				<Col componentClass={ControlLabel} sm={2}>
						Title
				</Col>
				<Col sm={10}>
						<FormControl type="title" placeholder="Email" />
				</Col>
			</FormGroup>

			<FormGroup controlId="formHorizontalEmail">
				<Col componentClass={ControlLabel} sm={2}>
						Address
				</Col>
				<Col sm={10}>
						<FormControl type="address" placeholder="Email" />
				</Col>
			</FormGroup>

​
    <FormGroup controlId="formControlsTextarea">
			<Col componentClass={ControlLabel} sm={2}>
				Admission Info
			</Col>
			<Col sm={10}>
				<FormControl componentClass="textarea" placeholder="Email" />
			</Col>
    </FormGroup>


			<FormGroup controlId="formControlsTextarea">
				<Col componentClass={ControlLabel} sm={2}>
						Misc Info
				</Col>
				<Col sm={10}>
						<FormControl componentClass="textarea" placeholder="Email" />
				</Col>
			</FormGroup>


​
    <Button type="submit">
      Submit
    </Button>
  </Form>
	);
}

export default formInstance;
