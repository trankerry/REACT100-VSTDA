/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import TodoItem from './todoItemComponent';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.sort = this.sort.bind(this);
  }

  sort() {
    let sortType = { this.props.sort };
    let list = { this.props.todoList };
    if( sortType === 'AD') {
      list.sort((a,b) => {
        let a = a.todo.toLowerCase(), b = b.todo.toLowerCase();

        if(a<b) {
          return
        }
      })
    }
  }

  render() {
    return (
      <div className='card'>
        <div className='card-header d-flex justify-content-between'>
          ViewTodos
          <select
            name='sort'
            className='form-control w-25'
            id='sort'
            value={ this.state.sort }
            onChange={ this.props.handleChange }
          >
            <option value='AD'>Alphabetical Descending</option>
            <option value='AA'>Alphabetical Ascending</option>
            <option value='PLD'>Priority Level Descending </option>
            <option value='PLA'>Priority Level Ascending</option>
          </select>
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
