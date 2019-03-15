import React, {Component} from 'react';
import routeController from '../../routes/routeController';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router'
import {Row,
  Col,
   Nav,
  Container} from 'reactstrap';
class App extends Component {
 
  render(){
  return (
    <Row>
      <Col xs="auto">
        <Nav vertical>
          <Link className="nav-item nav-link" to="/">Home</Link>
          <Link className="nav-item nav-link" to="/add">add note</Link>
      </Nav>
      </Col>
      <Col>
      <Container>
      <Switch>
      {routeController.map(({ path, exact, component: Component, ...rest }) => (
        <Route key={path} path={path} exact={exact} render={(props) => (
          <Component {...props} {...rest} />
        )} />
      ))}
    </Switch>
    </Container>
    </Col>
    </Row>
      
  );
  }
}

export default App;