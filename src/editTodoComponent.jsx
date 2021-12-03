/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class EditTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className={ `${this.props.priority} alert mb-0 py-3` }>
        <div className='form-group'>
          <label htmlFor='inputTodo' className='font-weight-bold'>
            Description
          </label>
          <textarea className='form-control' rows='4' value={ this.props.todo } />
        </div>
        <div className='form-group'>
          <label htmlFor='inputPriority' className='font-weight-bold'>
            Priority
          </label>
          <select
            name='priority'
            id='inputPriority'
            className='form-control col-sm-6'
            value={ this.props.priority }
          >
            <option value='alert-danger'>High Priority</option>
            <option value='alert-warning'>Mid Priority</option>
            <option value='alert-success'>Low Priority</option>
          </select>
        </div>
        <div className='col-sm-12 text-right'>
          <button className='btn btn-success'>Save</button>
        </div>
      </form>
    );
  }
}
