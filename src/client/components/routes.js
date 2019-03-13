import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';
import Home from './home';
import Add from './add';
export default class Routes extends Component {
  render() {
    return (
     <Switch>
       <Route exact path="/"  component={Home}/>
       <Route path="/home" component={Home}/>
       <Route path="/add" component={Add}/>
     </Switch>
    )
  }
}