import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const TaskPopup = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  useEffect(() => {
    // Fetch tasks from JSON
    fetch("/assets/tasks.json")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  // Handle adding a new task
  const handleAddTask = () => {
    const newTaskItem = {
      id: tasks.length + 1,
      title: newTask.title,
      description: newTask.description,
      completed: false,
    };
    setTasks([...tasks, newTaskItem]);
    setNewTask({ title: "", description: "" }); // Reset form
  };

  return (
    <PopupContainer>
      <h2>Task List</h2>
      
      {/* Task Input Form */}
      <input
        type="text"
        placeholder="Task Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
      />
      <button onClick={handleAddTask}>Add Task</button>

      {/* Task List */}
      {tasks.map((task) => (
        <TaskItem key={task.id}>
          <div>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
          </div>
        </TaskItem>
      ))}
    </PopupContainer>
  );
};

export default TaskPopup;
