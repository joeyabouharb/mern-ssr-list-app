import React, { Component } from 'react'
import {Container, Row} from 'reactstrap';
export default class Home extends Component {
  constructor(props){
   
    super(props);
    this.state = {
      notes: [],
    };
   
  }

  render() {
    return (
      <Container>
        <h2>Home Page</h2>
        <Row>
        </Row>
      </Container>
    )
  }
}

