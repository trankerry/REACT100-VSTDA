/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    if (this.state.edit) {
      this.setState({ edit: false });
    } else {
      this.setState({ edit: true });
    }
  }

  render() {
    return (
      <div>
        {/* check to see if edit is true, if so then display the editItem display
        else show the regular todoItem display */}
        {this.state.edit ? (
          <form className={ `${this.props.priority} alert mb-0 py-3` }>
            <div className='form-group'>
              <label htmlFor='updatedTodo' className='font-weight-bold'>
                Description
              </label>
              <textarea
                className='form-control update-todo-text'
                id='updatedTodo'
                name='updatedTodo'
                rows='4'
                value={ this.props.updatedTodo }
                onChange={ this.props.handleChange }
              >
                {this.props.todo}
              </textarea>
            </div>
            <div className='form-group'>
              <label htmlFor='updatedPriority' className='font-weight-bold'>
                Priority
              </label>
              <select
                id='updatedPriority'
                name='updatedPriority'
                className='form-control col-sm-6 update-todo-priority'
                value={ this.props.updatedPriority }
                onChange={ this.props.handleChange }
              >
                <option value='' disabled selected>
                  Update the priority
                </option>
                <option value='alert-danger'>High Priority</option>
                <option value='alert-warning'>Medium Priority</option>
                <option value='alert-success'>Low Priority</option>
              </select>
            </div>
            <div className='col-sm-12 text-right'>
              <button
                type='button'
                className='btn btn-success update-todo'
                value={ this.props.id }
                // clicking will save the item to state/update the list and change edit to false making
                // it appear as a todoItem
                onClick={ () => {
                  this.props.handleSave();
                  this.handleEdit();
                } }
              >
                Save
              </button>
            </div>
          </form>
        ) : (
          // the form will load with the priority value which is the same
          // as the bootstrap name for alert bg colors
          <form className={ `${this.props.priority} alert mb-0 py-1` }>
            <div className='form-row d-flex justify-content-between'>
              <div className='ml-3'>
                <input type='checkbox' className='form-check-input' id='todo' />
                <label
                  className='form-check-label strike-through font-weight-bold mx-2'
                  htmlFor='todo'
                >
                  {this.props.todo}
                </label>
              </div>
              <div>
                <button
                  type='button'
                  value={ this.props.id }
                  className='btn text-info py-0 edit-todo create-todo'
                  onClick={ () => this.handleEdit() }
                >
                  <i className='fas fa-edit' />
                </button>
                <button
                  type='button'
                  value={ this.props.id }
                  className='btn text-danger py-0 delete-todo create-todo'
                  onClick={ this.props.handleDelete }
                >
                  <i className='fas fa-trash-alt' />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    );
  }
}
