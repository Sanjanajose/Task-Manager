import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ActionButton } from "../styles/TaskListStyles"; 

const Task = ({ task, toggleCompletion, deleteTask, setSelectedTask }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
      <FaCheckCircle 
        className={`icon ${task.completed ? "completed" : ""}`} 
        onClick={() => toggleCompletion(task.id)}
        style={{ color: task.completed ? "green" : "red", cursor: "pointer" }}
      />
      <span>{task.text}</span>

      <div>
        <ActionButton onClick={() => toggleCompletion(task.id)}>
          {task.completed ? "Mark as Incomplete" : "Mark as Completed"}
        </ActionButton>
        <ActionButton onClick={() => deleteTask(task.id)}>Delete</ActionButton>
        <ActionButton onClick={() => setSelectedTask(task)}>Edit</ActionButton>
      </div>
    </div>
  );
};

export default Task;
