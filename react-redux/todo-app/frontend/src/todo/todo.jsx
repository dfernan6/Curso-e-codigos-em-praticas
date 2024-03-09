import React, { Component } from 'react'
import PageHeader from '../template/pageHeader.jsx'
import TodoForm from './todoForm.jsx'
import TodoList from './todoList.jsx'

export default class Todo extends Component {
    render() {
        return (
            <div>
               <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
               <TodoForm />
               <TodoList />
            </div>
        )
    }
}