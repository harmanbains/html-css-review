import React from 'react';

import './TodoItem.css';

function TodoItem(props) {
  return (
    <div className={props.item.completed ? "todo-item completed" : "todo-item"} >
      <input type="checkbox" name="todo" checked={props.item.completed} onChange={props.onChange}/>
      <p>{props.item.text}</p>
    </div>
  )
}

export default TodoItem;
