import React, {Component} from 'react';
import Routes from './routes';
import {Link} from 'react-router-dom';
import {Container, Row, Nav} from 'reactstrap';
class App extends Component {
 
  render(){
  return (
    <Container>
      <Row>
        <Nav>
          <Link className="nav-item nav-link" to="/">Home</Link>
          <Link className="nav-item nav-link" to="/add">add note</Link>
      </Nav>
      </Row>
    <Routes/>

    </Container>
      
  );
  }
}

export default App;