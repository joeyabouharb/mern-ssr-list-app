import React, { Component } from 'react'
import {Container, Row} from 'reactstrap';
import { getNotes } from '../../services/noteService';
import {Notes} from './Notes';
export default class Home extends Component {
  constructor(props){
   super(props);
   if (props.staticContext && props.staticContext.data) {
    this.state = {
      notes: props.staticContext.data
    };
  } else {
    this.state = {
      notes: [],
    };
  }
   
  }

  componentDidMount() {
    setTimeout(() => {
      if (window.__R_DATA) {
        this.setState({
          notes: window.__R_DATA
        });
        delete window.__R_DATA;
      } else {
        getNotes().then(notes => {
          this.setState({
            notes,
          })
        })
      }
    }, 0);
  }
  render() {
    const {notes} = this.state;
    return (
      <div>
        <h2>Home Page</h2>
        {
          notes.map(note => {
            <div key={note._id}>{note.name}</div>
          })
        }
      
      </div>
    )
  }
}

