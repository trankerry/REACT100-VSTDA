/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import List from './todoListComponent';

export default class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='container'>
        <div className='header mt-2'>
          <h1>Very Simple Todo App</h1>
          <h5>Track all of the things</h5>
          <hr />
        </div>
        <div className='body'>
          <div className='row'>
            <div className='col-sm-4'>
              <div className='card inputPanel'>
                <div className='card-header' id='inputHeader'>
                  Add New Todo
                </div>
                <div className='card-body'>
                  <form>
                    <div className='form-group'>
                      <label
                        htmlFor='create-todo-text'
                        className='font-weight-bold'
                      >
                        I want to..
                      </label>
                      <textarea
                        name='todo'
                        className='form-control create-todo-text'
                        rows='4'
                        value={ this.props.todo }
                        onChange={ this.props.handleChange }
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label
                        htmlFor='create-todo-priority'
                        className='font-weight-bold'
                      >
                        How much of a priority is this?
                      </label>
                      <select
                        name='priority'
                        id='create-todo-priority'
                        className='form-control create-todo-priority'
                        value={ this.props.priority }
                        onChange={ this.props.handleChange }
                        required
                      >
                        <option value='' disabled>
                          Select a Priority
                        </option>
                        <option value='alert-danger'>High Priority</option>
                        <option value='alert-warning'>Medium Priority</option>
                        <option value='alert-success'>Low Priority</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className='card-footer'>
                  <button
                    type='button'
                    className='btn btn-success create-todo'
                    onClick={ this.props.handleClick }
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className='col-sm-8'>
              <List
                todoList={ this.props.todoList }
                sort={ this.props.sortType }
                handleChange={ this.props.handleChange }
                handleDelete={ this.props.handleDelete }
                handleSave={ this.props.handleSave }
                handleSort={ this.props.handleSort }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
