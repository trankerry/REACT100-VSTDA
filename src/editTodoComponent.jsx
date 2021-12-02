import React, { Component } from 'react';

export default class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    // this.handleSave = this.handleSave.bind(this);
  }

  // handleSave() {
  //   this.setState({});
  // }

  render() {
    return (
      <li className='list-group-item'>
        <form>
          <div className='form-group'>
            <label htmlFor='inputTodo' className='font-weight-bold'>
              Description
            </label>
            <textarea className='form-control' rows='4' />
          </div>
          <div className='form-group'>
            <label htmlFor='inputPriority' className='font-weight-bold'>
              Priority
            </label>
            <select
              name='priority'
              id='inputPriority'
              className='form-control col-sm-6'
            >
              <option value='1'>High Priority</option>
              <option value='2'>Mid Priority</option>
              <option value='3'>Low Priority</option>
            </select>
          </div>
          <div className='col-sm-12 text-right'>
            <button className='btn btn-success'>Save</button>
          </div>
        </form>
      </li>
    );
  }
}
