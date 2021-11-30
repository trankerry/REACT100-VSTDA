import React, { Component } from 'react';
// import EditTodo from './editTodoComponent';

export default class TodoItem extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {  };
  // }
  render() {
    return (
      <li className='list-group-item py-0'>
        <form>
          <div className='form-row'>
            <div className='col-sm-9'>
              <input type='checkbox' className='form-check-input' id='todo1' />
              <label
                className='form-check-label strike-through font-weight-bold'
                htmlFor='todo1'
              >
                Lorem ipsum dolor
              </label>
            </div>
            <div className='col-auto text-right'>
              <button className='btn btn-outline-info border-white py-0 edit-todo'>
                <i className='fas fa-edit' />
              </button>
              <button className='btn btn-outline-danger border-white py-0 delete-todo'>
                <i className='fas fa-trash-alt' />
              </button>
            </div>
          </div>
        </form>
      </li>
    );
  }
}
