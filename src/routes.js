import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from './services/auth'

// Views
import Signup from './views/signup'
import Login from './views/login'
import Home from './views/home'
import NotFound from './views/notfound'

const ProtectedRoute = ({ component: Component, ...attrs }) => (
  <Route
    {...attrs}
    render={props => 
      isAuthenticated() 
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
    }
  />
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <ProtectedRoute exact path='/' component={Home} />
      <Route path='*' component={NotFound} />
    </Switch>
  </BrowserRouter>
) 

export default Routes