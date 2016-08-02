import React from 'react';
import '../Events/events.css';
import './editEvents.css';
import {selectEvent} from '../../Actions/index.js';
import { Button,
				 FormControl,
				 FormGroup,
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
		  <form>
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Text"
      placeholder="Enter text"
    />
    <FieldGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
    />
    <FieldGroup
      id="formControlsPassword"
      label="Password"
      type="password"
    />
    <FieldGroup
      id="formControlsFile"
      type="file"
      label="File"
      help="Example block-level help text here."
    />
​
    <Checkbox checked readOnly>
      Checkbox
    </Checkbox>
    <Radio checked readOnly>
      Radio
    </Radio>
​
    <FormGroup>
      <Checkbox inline>
        1
      </Checkbox>
      {' '}
      <Checkbox inline>
        2
      </Checkbox>
      {' '}
      <Checkbox inline>
        3
      </Checkbox>
    </FormGroup>
    <FormGroup>
      <Radio inline>
        1
      </Radio>
      {' '}
      <Radio inline>
     kk   2
      </Radio>
      {' '}
      <Radio inline>
        3
      </Radio>
    </FormGroup>
​
    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>
    <FormGroup controlId="formControlsSelectMultiple">
      <ControlLabel>Multiple select</ControlLabel>
      <FormControl componentClass="select" multiple>
        <option value="select">select (multiple)</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>
​
    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Textarea</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>
​
    <FormGroup>
      <ControlLabel>Static text</ControlLabel>
      <FormControl.Static>
        email@example.com
      </FormControl.Static>
    </FormGroup>
​
    <Button type="submit">
      Submit
    </Button>
  </form>
	);
}

export default formInstance;
