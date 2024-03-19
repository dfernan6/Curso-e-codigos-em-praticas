import React from 'react';
import { Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';

import Todo from '../todo/Todo.jsx';
import About from '../about/About.jsx';

const Routes = props => (
  <HashRouter>
    <Redirect from='*' to='/todo' />
    <Route path='/todo' component={Todo} />
    <Route path='/about' component={About} />
  </HashRouter>
);

export default Routes;
