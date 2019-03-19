import React, { Component } from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

export default class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPass: '',
    }
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.onPassConfirmChange = this.onPassConfirmChange.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
  }

  onEmailChange(event){
    const email = event.target.value
    this.setState({
      email,
    });
  }

  onPasswordChange(event){
    const password = event.target.value;
    this.setState({
        password,
    });
  }
  onPassConfirmChange(event){
    const confirmPass = event.target.value;
    this.setState({
        confirmPass,
    });
  }

  onFirstNameChange(event){
    const firstName = event.target.value;
    this.setState({
        firstName,
    });
  }

  onLastNameChange(event){
    const lastName = event.target.value;
    this.setState({
        lastName,
    });
  }

  submitForm(event){
    event.preventDefault();

  }

  render() {
    const {firstName, lastName, password, confirmPass, email} = this.state;
    return (
      <div>
         <Form onSubmit={this.submitForm}>
  <FormGroup>
  <FormGroup>
    <Label>First Name: </Label>
    <Input value={firstName} onChange={this.onFirstNameChange} placeholder="First Name" />
  </FormGroup>
  <FormGroup>
    <Label>Last Name: </Label>
    <Input value={lastName} onChange={this.onLastNameChange} placeholder="Last Name" />
  </FormGroup>
    <Label>Email: </Label>
    <Input value={email} onChange={this.onEmailChange} placeholder="Email" />
  </FormGroup>
  <FormGroup>
    <Label>Password: </Label>
    <Input value={password} onChange={this.onPasswordChange} placeholder="Password" />
  </FormGroup>
  <FormGroup>
    <Label>Confirm Password: </Label>
    <Input value={confirmPass} onChange={this.onPassConfirmChange} placeholder="confirm password" />
  </FormGroup>
  <Button type="submit">Login</Button>
  </Form>
      </div>
    )
  }
}
