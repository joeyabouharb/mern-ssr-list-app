import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';
import routeController from '../../routes/routeController';
export default class Routes extends Component {
  render() {
    return (
      <Switch>
      {routeController.map(({ path, exact, component: Component, ...rest }) => (
        <Route key={path} path={path} exact={exact} render={(props) => (
          <Component {...props} {...rest} />
        )} />
      ))}
    </Switch>
    )
  }
}