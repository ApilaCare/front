import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Register from './register/Register';
import Login from './login/Login';
import Home from './home/Home';
import Menu from './menu/Menu';

import About from './about/About';
import Docs from './docs/Docs';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={ App } >
      <IndexRoute components={{ main:Home, sidebar:Menu }} />
      <Route path="/docs" components={{ main:Docs, sidebar:Menu }} />
      <Route path="/about" components={{ main:About, sidebar:Menu }} />
    </Route>
    <Route path="/register" component={ Register } />
    <Route path="/login" component={ Login } />
  </Router>
);

export default Routes;
