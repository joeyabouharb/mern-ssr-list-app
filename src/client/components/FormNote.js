import React, {useState, useEffect} from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';

const FormNote = (props) => {
  const {_id,
     name, 
     severity, 
     description,
     submitForm,
     onNameChange,
     onDescriptionChange,
     onSeverityChange} = props;
  

  return(
  <Form onSubmit={submitForm}>
  <FormGroup>
    <input hidden defaultValue={_id}/>
    <Label>Note Name</Label>
    <Input value={name} onChange={onNameChange} placeholder="with a placeholder" />
  </FormGroup>
  <FormGroup>
    <Label>Severity</Label>
    <select className="custom-select" value={severity} onChange={onSeverityChange} type="select" name="electselect" id="exampleSelect">
      <option></option>
      <option value="Low" >Low</option>
      <option value="Medium" >Medium</option>
      <option value="High">High</option>
    </select>
  </FormGroup>
  <FormGroup>
    <Label>Description</Label>
    <textarea className="form-control rounded-0" value={description} onChange={onDescriptionChange}></textarea>
  </FormGroup>
  <Input type="submit" value="Submit"/>
</Form>
  )
}
export default FormNote;