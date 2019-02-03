import React from 'react';

import './TodoItem.css';

function TodoItem() {
  return (
    <div className="todo-item" >
      <input type="checkbox" name="todo" />
      <p>Placeholder text</p>
    </div>
  )
}

export default TodoItem;