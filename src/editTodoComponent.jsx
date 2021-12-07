/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class EditTodo extends Component {
  constructor(props) {
    super(props);
    // this.handleUpdate =  this.handleUpdate.bind(this);
  }

  // handleUpdate(event) {
  //   this.setState({ [event.target.name]: event.target.value });
  // }

  render() {
    return (
      <form className={ `${this.props.priority} alert mb-0 py-3` }>
        <div className='form-group'>
          <label htmlFor='newInputTodo' className='font-weight-bold'>
            Description
          </label>
          <textarea
            className='form-control'
            id='newInputTodo'
            name='newTodo'
            rows='4'
            value={ this.props.updatedTodo }
          >
            {this.props.todo}
          </textarea>
        </div>
        <div className='form-group'>
          <label htmlFor='newInputPriority' className='font-weight-bold'>
            Priority
          </label>
          <select
            name='newPriority'
            id='newInputPriority'
            className='form-control col-sm-6'
            value={ this.props.updatedPriority }
            onChange={ this.props.handleChange }
          >
            <option value='' disabled>Update the priority</option>
            <option value='alert-danger'>High Priority</option>
            <option value='alert-warning'>Mid Priority</option>
            <option value='alert-success'>Low Priority</option>
          </select>
        </div>
        <div className='col-sm-12 text-right'>
          <button
            type='button'
            className='btn btn-success'
            value={ this.props.id }
            onClick={ this.props.handleSave }
          >Save</button>
        </div>
      </form>
    );
  }
}
