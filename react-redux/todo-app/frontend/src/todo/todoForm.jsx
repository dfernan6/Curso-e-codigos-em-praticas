/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '../template/Grid.jsx';
import IconButton from '../template/IconButton.jsx';

const TodoForm = props => {
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      // eslint-disable-next-line react/prop-types
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === 'Escape') {
      // eslint-disable-next-line react/prop-types
      props.handleClear();
    }
  };

  return (
    <div role='form' className='todoForm'>
      <Grid cols='12 9 10'>
        <input id='description' className='form-control' placeholder='Adicione uma tarefa' onChange={props.handleChange} onKeyUp={keyHandler} value={props.description}></input>
      </Grid>

      <Grid cols='12 3 2'>
        {/* Mudamos o nome da propriedade style para btnStyle, pois o Lint reclamava e essa é a melhor maneira de contornar esse problema */}
        <IconButton btnStyle='primary' icon='plus' onClick={props.handleAdd}></IconButton>
        // eslint-disable-next-line react/prop-types
        <IconButton btnStyle='info' icon='search' onClick={props.handleSearch}/>
        <IconButton btnStyle='default' icon='close' onClick={props.handleClear}/>
      </Grid>
    </div>
  );
};

export default TodoForm;
