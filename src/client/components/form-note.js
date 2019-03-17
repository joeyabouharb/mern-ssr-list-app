import React from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';

const FormNote = (props) => {
  return(
  <Form onSubmit={props.submitForm}>
  <FormGroup>
    <input hidden defaultValue={props._id}/>
    <Label>Note Name</Label>
    <Input value={props.name} onChange={props.onNameChange} placeholder="with a placeholder" />
  </FormGroup>
  <FormGroup>
    <Label>Severity</Label>
    <select className="custom-select" value={props.severity} onChange={props.onSeverityChange} type="select" name="electselect" id="exampleSelect">
      <option></option>
      <option value="Low" >Low</option>
      <option value="Medium" >Medium</option>
      <option value="High">High</option>
    </select>
  </FormGroup>
  <FormGroup>
    <Label>Description</Label>
    <textarea className="form-control rounded-0" value={props.description} onChange={props.onDescriptionChange}></textarea>
  </FormGroup>
  <Input type="submit" value="Submit"/>
</Form>
  )
}
export default FormNote;