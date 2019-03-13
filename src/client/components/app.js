import React, {Component} from 'react';
import Routes from './routes';
import {NavLink} from 'react-router-dom';
class App extends Component {
 
  render(){
  return (
    <div>
        <ul>
        <li>
          <NavLink to="/" className="link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add" className="link">add note</NavLink>
        </li>
      </ul>
    <Routes/>
    </div>
      
  );
  }
}

export default App;