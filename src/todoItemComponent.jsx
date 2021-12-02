import React, { Component } from 'react';
// import EditTodo from './editTodoComponent';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleDelete = this.handleDelete.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
  }

  // handleDelete() {

  // }

  // handleEdit() {

  // }

  render() {
    return (
      <form className='alert mb-0 py-1' id='alert'>
        <div className='form-row'>
          <div className='col-sm-9 ml-3 mr-5'>
            <input type='checkbox' className='form-check-input' id='todo1' />
            <label
              className='form-check-label strike-through font-weight-bold mx-2'
              htmlFor='todo1'
            >
              { this.props.todo }
            </label>
          </div>
          <div className='col-auto text-right'>
            <button className='btn text-info py-0 edit-todo'>
              <i className='fas fa-edit' />
            </button>
            <button className='btn text-danger py-0 delete-todo'>
              <i className='fas fa-trash-alt' />
            </button>
          </div>
        </div>
      </form>
    );
  }
}
