import React, { Component } from 'react';
import EditTodo from './editTodoComponent';
import TodoItem from './todoItemComponent';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {  };
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
                        className='form-control create-todo-text'
                        rows='4'
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
                      >
                        <option value='' disabled selected>
                          Select a Priority
                        </option>
                        <option value='High Priority'>High Priority</option>
                        <option value='Mid Priority'>Mid Priority</option>
                        <option value='Low Priority'>Low Priority</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className='card-footer'>
                  <button className='btn btn-success form-control'>Add</button>
                </div>
              </div>
            </div>
            {/* to do list side */}
            <div className='col-sm-8'>
              <div className='card'>
                <div className='card-header'>View Todos</div>
                <ul className='card-body list-group-flush'>
                  {/* <li className='list-group-item py-0' id='defaultListItem'>
                    <h6>Welcome to Very Simple Todo App!</h6>
                    <p className='m-0'>Get started now by adding a new todo on the left.</p>
                  </li> */}
                  <TodoItem />
                  <EditTodo />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
