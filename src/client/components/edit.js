import React, { Component } from 'react'
import FormNote from './form-note';
export default class Edit extends Component {
  constructor(props){
    super(props);
    if (props.staticContext && props.staticContext.data) {
     this.state = {
       _id: props.staticContext.data._id,
       name : props.staticContext.data.name,
       description : props.staticContext.data.description,
       severity : props.staticContext.data.severity,
     };
   } else {
     this.state = {
       note: {},
       _id: '',
       name: '',
       description : '',
       severity : '',
     };
   }
   
    this.submitForm = this.submitForm.bind(this);
    this.onNameChange =  this.onNameChange.bind(this);
    this.onSeverityChange = this.onSeverityChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount(){
    setTimeout(() => {
      if (window.__R_DATA) {
        this.setState({
          note: window.__R_DATA,
          _id: window.__R_DATA._id,
          name: window.__R_DATA.name,
          description: window.__R_DATA.description,
          severity: window.__R_DATA.severity,

        });
        delete window.__R_DATA;
      } else {
       const url = window.location.pathname.split('/').filter(el => el).pop();
       
        this.props.service(url).then(note => {
          this.setState({
            note,
            _id: note._id,
            name: note.name,
            description: note.description,
            severity: note.severity,
          });
        })
      }
    }, 0);
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

  submitForm(event){
    event.preventDefault();
    const note = {
      _id: this.state.note._id,
      name: this.state.name,
      severity: this.state.severity,
      description: this.state.description
    };
    this.props.postService(note);
    this.props.history.push('/');
  }

  render() {
    const {_id, name, severity, description} = this.state;
    return (
      <div>
        <h2>Add Note</h2>
       <FormNote
            onDescriptionChange={this.onDescriptionChange}
            onNameChange={this.onNameChange}
            onSeverityChange={this.onSeverityChange}
            submitForm={this.submitForm}
            _id={_id}
            name={name}
            severity={severity}
            description={description}/>            
      </div>
    )
  }
}
