/* eslint-disable react/prop-types */
import React, { Component } from 'react';


export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className={ `${this.props.priority} alert mb-0 py-1` }>
        <div className='form-row flex-nowrap'>
          <div className='col-sm-9 ml-3 mr-5'>
            <input type='checkbox' className='form-check-input' id='todo' />
            <label
              className='form-check-label strike-through font-weight-bold mx-2'
              htmlFor='todo'
            >
              {this.props.todo}
            </label>
          </div>
          <div className='col-auto text-right'>
            <button
              type='button'
              value={ this.props.id }
              className='btn text-info py-0 edit-todo'
              onClick={ this.props.isEditing }
            >
              <i className='fas fa-edit' />
            </button>
            <button
              type='button'
              value={ this.props.id }
              className='btn text-danger py-0 delete-todo'
              onClick={ this.props.handleDelete }
            >
              <i className='fas fa-trash-alt' />
            </button>
          </div>
        </div>
      </form>
    );
  }
}
