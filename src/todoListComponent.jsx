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
        <div className='card-header form-inline d-flex justify-content-between'>
          <div>ViewTodos</div>
          {/* Bonus sort features */}
          <div>
            <select
              name='sortType'
              className='form-control mr-3'
              id='sortType'
              value={ this.props.sortType }
              onChange={ this.props.handleChange }
            >
              <option value='' disabled selected>
                Sort
              </option>
              <option value='Alpha'>Alphabetical</option>
              <option value='Level'>Priority Level</option>
            </select>
            <button
              type='button'
              className='btn btn-secondary'
              onClick={ () => this.props.handleSort() }
            >
              Apply
            </button>
          </div>
        </div>
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
            handleSave={ () => this.props.handleSave(item) }
          />
        ))}
      </div>
    );
  }
}
