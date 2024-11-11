// TaskList.js
import React from 'react';
import Task from './Task';

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={`${task.text}-${task.category}`}
          text={task.text}
          category={task.category}
          onDelete={() => onDeleteTask(task.text)}
          className="task"  // Apply class directly to Task component
        />
      ))}
    </div>
  );
}

export default TaskList;
