// Render a list of tasks with checkboxes using an array of objects and handle checkbox state changes.

import React, { useState } from "react";

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

const Medium02 = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, description: "Task 1", completed: false },
    { id: 2, description: "Task 2", completed: false },
    { id: 3, description: "Task 3", completed: false },
  ]);

  const handleTaskToggle = (taskId: number) => {
    setTasks((prevTask) =>
      prevTask.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskToggle(task.id)}
            />
            {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Medium02;
