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
      <Route path="docs" components={ Docs } />
      <Route path="about" components={ About } />
    </Route>
    <Route path="/register" component={ Register } />
    <Route path="/login" component={ Login } />
  </Router>
);

export default Routes;
