/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import EditTodo from './editTodoComponent';
import TodoItem from './todoItemComponent';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    this.isEditing = this.isEditing.bind(this);
  }

  isEditing() {
    this.setState({ editing: true });
  }

  render() {
    return (
      <div className='card'>
        <div className='card-header'>View Todos</div>
        <div
          className='defaultMessage py-4 m-0 alert alert-info'
          id='defaultMessage'
        >
          <h6>Welcome to Very Simple Todo App!</h6>
          <p className='m-0'>
            Get started now by adding a new todo on the left.
          </p>
        </div>
        {this.props.todoList.map(item =>
            this.state.editing ? (
              <EditTodo
                todo={ item.todo }
                priority={ item.priority }
                id={ item.id }
                handleDelete={ this.props.handleDelete }
                editing={ this.state.editing }
                isEditing={ this.isEditing }
              />
            ) : (
              <TodoItem
                todo={ item.todo }
                priority={ item.priority }
                id={ item.id }
                handleDelete={ () => this.props.handleDelete(item) }
                editing={ this.state.editing }
                isEditing={ this.isEditing }
              />
            )
          )}
      </div>
    );
  }
}
