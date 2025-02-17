import React, { useState } from "react";

function TaskForm({ dispatch }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (title && description) {
      const newTask = {
        id: Date.now(),
        text: title,
        description,
        completed: false,
      };
      dispatch({ type: "ADD_TASK", task: newTask });
      setTitle(""); 
      setDescription(""); 
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskForm;
