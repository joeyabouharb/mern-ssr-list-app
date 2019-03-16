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
     };
   }
    
   }
 
   componentDidMount() {
     setTimeout(() => {
       if (window.__R_DATA) {
         this.setState({
           note: window.__R_DATA
         });
         delete window.__R_DATA;
       } else {
        const url = window.location.pathname.split('/').filter(el => el).pop();
         this.props.service(url).then(note => {
           this.setState({
             note,
           })
         })
       }
     }, 0);
   }
  render() {
    const {note} = this.state;
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
          <Button href="#">Delete</Button>
          <CardLink href="#">Edit</CardLink>
        </CardBody>
      <CardFooter> <CardSubtitle><small>Note Created: {note.date}</small></CardSubtitle> </CardFooter>
      </Card>

    )
  }
}
