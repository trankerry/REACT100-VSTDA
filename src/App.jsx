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
      updatedPriority: '',
      sortType: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  /* This is to handle the sort feature. The todoList in state is modified
  based on the sort type, alphabetical or priority level. To sort by level
  I needed to make an object to convert the current priority to numbers in
  order to do the sort. For the alpha sort the text needed to be lowered
  case then compared to each other.*/
  handleSort() {
    if (this.state.sortType === 'Level') {
      const sortBY = {
        'alert-danger': 0,
        'alert-warning': 1,
        'alert-success': 2,
      };
      const result = this.state.todoList.sort((a, b) => {
        const nameA = a.priority.toLowerCase();
        const nameB = b.priority.toLowerCase();
        return sortBY[nameA] - sortBY[nameB];
      });
      this.setState({ todoList: result });
    } else if (this.state.sortType === 'Alpha') {
      const sortA2Z = this.state.todoList.sort((a, b) => {
        const nameA = a.todo.toLowerCase();
        const nameB = b.todo.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      this.setState({ todoList: sortA2Z });
    }
  }

  /* This is to handle the delete feature. The todo item is passed in as an args
  then make a copy of the todoList that will filter out the todo item giving us
  an updated todoList. Set the state of the todoList with the updated one.*/
  handleDelete(todoToBeRemoved) {
    const updatedTodo = this.state.todoList.filter(
      othersItems => othersItems !== todoToBeRemoved
    );
    this.setState({ todoList: updatedTodo });
  }

  // Update the state for all state items
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  /* This is to handle the save feature. Upon save, it will act the same as delete
  and will create a new todo item, splice it into and updated todoList. Set the state
  of the todoList with the updated one.*/
  handleSave(todoEdit) {
    const updatedTodoList = this.state.todoList.filter(
      othersItems => othersItems !== todoEdit
    );
    const editedTodo = {
      id: todoEdit.id,
      priority: this.state.updatedPriority,
      todo: this.state.updatedTodo,
    };
    updatedTodoList.splice(todoEdit.id, 0, editedTodo);
    this.setState({ todoList: updatedTodoList });
  }

  /* Upon click it will create todo item and increase the id# then update the
  todo list, then remove the default message.*/
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
          updatedPriority: this.state.updatedPriority,
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
        sort={ this.state.sortType }
        todoList={ this.state.todoList }
        handleChange={ this.handleChange }
        handleClick={ this.handleClick }
        handleDelete={ this.handleDelete }
        handleSave={ this.handleSave }
        handleSort={ this.handleSort }
      />
    );
  }
}
