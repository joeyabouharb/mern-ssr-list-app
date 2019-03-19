import React, { Component } from 'react'
import FormNote from './FormNote';
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
    const note = {
      name: this.state.name,
      severity: this.state.severity,
      description: this.state.description
    };
    this.props.postService(note);
    this.props.history.push('/');
   
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
       <FormNote _id={this.state._id}
            name={this.state.name}
            severity={this.state.severity}
            description={this.state.description}
            onDescriptionChange={this.onDescriptionChange}
            onSeverityChange={this.onSeverityChange}
            onNameChange={this.onNameChange}
            submitForm={this.submitForm}/>            
      </div>
    )
  }
}
