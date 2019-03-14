import React, { Component } from 'react'
import { Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
export default class Add extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      severity: '',
      description: '',
    };
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onNameChange =  this.onNameChange.bind(this);
    this.onSeverityChange = this.onSeverityChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm(event){
    event.preventDefault();
    const notes = {
      name: this.state.name,
      severity: this.state.severity,
      description: this.state.description
    };
    axios.post('/api/add', notes)
    .then((response) => {
      alert(response.data);
    }).catch(error => {
      throw error;
    });
  }

  onNameChange(event){
    this.setState({
      name: event.target.value,
    });
  }
  onSeverityChange(event){
    this.setState({
      severity: event.target.value,
    });
  }
  onDescriptionChange(event){
    this.setState({
      description: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <h2>Add Note</h2>
        <Form onSubmit={this.submitForm}>
        <FormGroup>
          <Label>Note Name</Label>
          <Input value={this.state.name} onChange={this.onNameChange} placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label>Severity</Label>
          <select className="custom-select" value={this.state.severity} onChange={this.onSeverityChange} type="select" name="electselect" id="exampleSelect">
            <option></option>
            <option value="Low" >Low</option>
            <option value="Medium" >Medium</option>
            <option value="High">High</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <textarea className="form-control rounded-0" value={this.state.description} onChange={this.onDescriptionChange}></textarea>
        </FormGroup>
        <Input type="submit" value="Submit"/>
      </Form>
      </div>
    )
  }
}
