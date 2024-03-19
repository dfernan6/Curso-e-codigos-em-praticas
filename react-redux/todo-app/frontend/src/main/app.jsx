import React from 'react';
import Menu from '../template/Menu.jsx';
import Routes from './Routes.jsx';
import '../template/custom.css';

require('bootstrap/dist/css/bootstrap.min.css');
require('font-awesome/css/font-awesome.min.css');

const App = props => (
  <div className="container">
    <Menu />
    <Routes />
  </div>
);

export default App;
