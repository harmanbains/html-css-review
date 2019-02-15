import React, {Component} from 'react';

import './App.css';
import TodoItem from './TodoItem';
import todosData from './../todosData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      let newState = {todos: []}
      newState.todos = prevState.todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })

      return newState;
    })
  }

  render() {
    const todoComps = this.state.todos.map(item => <TodoItem key={item.id} item={item} onChange={() => this.handleChange(item.id)}/>)

    return (
      <div className="todo-list">
        {todoComps}
      </div>
    )
  }
}

export default App;
