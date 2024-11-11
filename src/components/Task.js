// Task.js
import React from 'react';

function Task({ text, category, onDelete, className }) {
  return (
    <div className={className}>
      <div className="task-details">
        <span>{text}</span>
        <span className="category">{category}</span>
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Task;
