import React from 'react';

const Menu = props => (
  <nav className='navbar navbar-inverse bg-inverse'>
    <div className='container'>
      <div className='navbar-header'>
        <a className='navbar-brand' href='#/todo'>
          <i className='fa fa-calendar-check-o'></i> TodoApp
        </a>
    </div>

    <div id='navbar' className='navbar-collapse collapse'>
      <ul className='nav navbar-nav'>
        <li><a href='#/todo'>Tarefas</a></li>
        <li><a href='#/about'>Sobre</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Menu;
