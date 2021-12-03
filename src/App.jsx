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
    };
    // this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // handleSave() {
  //   this.setState({});
  // }

  handleDelete(todoToBeRemoved) {
    const updatedTodo = this.state.todoList.filter(othersItems => othersItems !== todoToBeRemoved);
    this.setState({ todoList: updatedTodo });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
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
        todoList={ this.state.todoList }
        handleChange={ this.handleChange }
        handleClick={ this.handleClick }
        handleDelete={ this.handleDelete }
        handleEdit={ this.handleEdit }
      />
    );
  }
}
