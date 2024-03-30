import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';
//import { HashRouter } from 'react-router-dom';

import Todo from '../todo/Todo.jsx';
import About from '../about/About.jsx';

const Routes = props => (
  <Router history={hashHistory}>
    <Route path='/todo' component={Todo} />
    <Route path='/about' component={About} />
    <Redirect from='*' to='/todo' />
  </Router>
);

export default Routes;
