import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
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

  submitForm(event){
    event.preventDefault();

  }
  render(){
    const {email, password} = this.state;
    return(
      <div>
         <Form onSubmit={this.submitForm}>
  <FormGroup>
    <Label>Email: </Label>
    <Input value={email} onChange={this.onEmailChange} placeholder="with a placeholder" />
  </FormGroup>
  <FormGroup>
    <Label>Password: </Label>
    <Input value={password} onChange={this.onPasswordChange} placeholder="with a placeholder" />
  </FormGroup>
  <Button type="submit">Login</Button>
  </Form>
      </div>
    )
  }
}
export default Login;