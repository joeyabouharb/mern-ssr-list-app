import React, { Component } from 'react'
import {Card,
   CardBody, 
   CardTitle,
    CardText,
    CardSubtitle,
  CardLink,
  CardHeader,
  CardFooter,
Container,
Row,
Col,
Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import { ENETUNREACH } from 'constants';
export default class Note extends Component {
  constructor(props){
    super(props);
    if (props.staticContext && props.staticContext.data) {
     this.state = {
       note: props.staticContext.data
     };
   } else {
     this.state = {
       note: {},
       loading: true
     };
   }
    this.onDeleteSubmit = this.onDeleteSubmit.bind(this);
   }
 
   componentDidMount() {
     setTimeout(() => {
       if (window.__R_DATA) {
         this.setState({
           note: window.__R_DATA,
           loading: false
         });
         delete window.__R_DATA;
       } else {
        const url = window.location.pathname.split('/').filter(el => el).pop();
         this.props.service(url).then(note => {
           this.setState({
             note,
             loading: false
           })
         })
       }
     }, 0);
   }
   onDeleteSubmit(event){
     event.preventDefault();
     const _id = this.state.note._id;
     this.props.postService(_id);
     this.props.history.push('/');
   }
  render() {
    const {note, loading} = this.state;
    if(loading){
      return(
        <div>
          Loading...
        </div>
      )
    }
    return (
         <Card body>
         <CardHeader>
           <CardTitle>{note.name}</CardTitle>
           </CardHeader>
        
        <CardBody>
        <CardSubtitle>Severity: {note.severity}
        </CardSubtitle>
         
        </CardBody>
        <CardBody>
          <CardText>{note.description}</CardText>
          <form onSubmit={this.onDeleteSubmit}>
          <Button type="submit">Delete</Button>
          </form>
          
          <Link  to={`/edit/${note._id}`} >Edit</Link>
        </CardBody>
      <CardFooter> <CardSubtitle><small>Note Created: {note.date}</small></CardSubtitle> </CardFooter>
      </Card>

    )
  }
}
