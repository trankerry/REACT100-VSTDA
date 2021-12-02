import React, { Component } from 'react';
import TodoItem from './todoItemComponent';
import EditTodo from './editTodoComponent';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      id: 0,
      todo: '',
      priority: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.priorityLevel = this.priorityLevel.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  handleClick() {
    this.priorityLevel();
    const element = document.getElementById('defaultMessage');
    element.remove();
    this.setState({ id: this.state.id + 1 });
    this.setState({ todoList: { id: this.state.id,
      todo: this.state.todo,
      priority: this.state.priority }
    });
  }

  // priorityLevel() {
  //   const priority = this.state.priority;
  //   const todoPriority = document.getElementById('alert');
  //   if (priority === '1') {
  //     todoPriority.classList.add('alert-danger');
  //     todoPriority.classList.remove('alert-warning');
  //     todoPriority.classList.remove('alert-success');
  //   } else if (priority === '2') {
  //     todoPriority.classList.add('alert-warning');
  //     todoPriority.classList.remove('alert-danger');
  //     todoPriority.classList.remove('alert-success');
  //   } else if (priority === '3') {
  //     todoPriority.classList.add('alert-success');
  //     todoPriority.classList.remove('alert-warning');
  //     todoPriority.classList.remove('alert-danger');
  //   }
  // }

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
                        value={ this.state.todo }
                        onChange={ this.handleChange }
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
                        value={ this.state.priority }
                        onChange={ this.handleChange }
                      >
                        <option value='' disabled>
                          Select a Priority
                        </option>
                        <option value='1'>High Priority</option>
                        <option value='2'>Mid Priority</option>
                        <option value='3'>Low Priority</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className='card-footer'>
                  <button
                    type='button'
                    className='btn btn-success form-control'
                    onClick={ this.handleClick }
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* to do list side */}
            <div className='col-sm-8'>
              <div className='card' id='card'>
                <div className='card-header'>View Todos</div>

                <div
                  className='defaultMessage py-4 m-0 alert alert-info'
                  id='defaultMessage'
                >
                  <h6>Welcome to Very Simple Todo App!</h6>
                  <p className='m-0'>
                    Get started now by adding a new todo on the left.
                  </p>
                </div>

                <TodoItem
                  todo={ this.state.todo }
                  priority={ this.state.priority }
                />

                <EditTodo />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
