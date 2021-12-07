/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import TodoItem from './todoItemComponent';

export default class List extends Component {
  constructor(props) {
    super(props);
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
        {this.props.todoList.map(item => (
          <TodoItem
            todo={ item.todo }
            priority={ item.priority }
            id={ item.id }
            handleDelete={ () => this.props.handleDelete(item) }
            handleChange={ this.props.handleChange }
            handleSave={ this.props.handleSave }
          />
        ))}
      </div>
    );
  }
}
