import React, { Component } from 'react';

import Input from './inputComponent';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      id: 0,
      todo: '',
      priority: '',
      updatedTodo: '',
      updatedPriority: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleDelete(todoToBeRemoved) {
    const updatedTodo = this.state.todoList.filter(
      othersItems => othersItems !== todoToBeRemoved
    );
    this.setState({ todoList: updatedTodo });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSave(item) {
    const updatedTodoList = [...this.state.todoList];
    updatedTodoList[item.id].todo = updatedTodo;
    updatedTodoList[item.id].priority = updatedPriority;
    this.setState({ 
      
      
    })
    // const updatedTodoList = this.state.todoList.slice();
    // const index = updatedTodoList.indexOf(item);

    // item.todo = `${this.state.updatedTodo}`;
    // item.priority = `${this.state.updatedPriority}`;

    // this.setState({ todoList: updatedTodoList });
  }

  handleClick() {
    this.setState({ id: this.state.id + 1 });
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          id: this.state.id,
          todo: this.state.todo,
          priority: this.state.priority,
          updatedTodo: this.state.updatedTodo,
          updatedPriority: this.state.updatedPriority
        },
      ],
    });
    const element = document.getElementById('defaultMessage');
    element.remove();
  }

  render() {
    return (
      <Input
        todo={ this.state.todo }
        priority={ this.state.priority }
        id={ this.state.id }
        updatedTodo={ this.state.updatedTodo }
        updatedPriority={ this.state.updatedPriority }
        todoList={ this.state.todoList }
        handleChange={ this.handleChange }
        handleClick={ this.handleClick }
        handleDelete={ this.handleDelete }
        handleSave={ this.handleSave }
      />
    );
  }
}
