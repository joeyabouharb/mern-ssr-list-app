/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap';
import { getNotes } from '../../services/noteService';
import {Link} from 'react-router-dom'
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
  getClassName(severity){
    if(severity === 'Low') return 'info';
    if(severity === 'Medium') return 'warning';
    if(severity === 'High') return 'danger';
    return ''
  }

  render() {
    const {notes} = this.state;
    return (
      <div>
        <h2>Home Page</h2>
        <ListGroup>
         {
           notes.map(({name, severity, _id},index) =>{
             return (
            
               <ListGroupItem style={styles.listItem} key={index}
                color={this.getClassName(severity)}>
                <Link to={`/note/${_id}`}>{name}</Link>
               </ListGroupItem>

             )
           })
         }
        </ListGroup>
      </div>
    )
  }
}
const styles = {
  listItem: {
    marginTop: '6px'
  }
}