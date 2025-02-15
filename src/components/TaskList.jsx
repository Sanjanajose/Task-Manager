import Task from "./Task";
import TaskForm from "./TaskForm";
import Filter from "./Filter";
import { useState } from "react";

const TaskList = ({ tasks, filter, setFilter, addTask, updateTask, deleteTask, toggleComplete }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  return (
    <div>
      <button className="task-list-btn" onClick={() => setShowPopup(true)}>View Task List</button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={() => setShowPopup(false)}>X</button>

            {/* Popup Header */}
            <h2 className="popup-title">Task List</h2>

            {/* Filters + Add Task Button */}
            <div className="popup-header">
              <Filter setFilter={setFilter} />
              <button className="add-task-btn" onClick={() => {
                setEditingTask(null); 
                setShowTaskForm(!showTaskForm);
              }}>
                {showTaskForm ? "Cancel" : "Add Task"}
              </button>
            </div>

            {/* Task Form */}
            {showTaskForm && <TaskForm addTask={addTask} updateTask={updateTask} editingTask={editingTask} setEditingTask={setEditingTask} />}

            {/* Task List */}
            {filteredTasks.length > 0 ? (
              <div className="task-container">
                {filteredTasks.map((task) => (
                  <Task 
                    key={task.id} 
                    task={task} 
                    updateTask={updateTask} 
                    deleteTask={deleteTask} 
                    toggleComplete={toggleComplete} 
                    setEditingTask={setEditingTask}
                    setShowTaskForm={setShowTaskForm}
                  />
                ))}
              </div>
            ) : (
              <p className="no-tasks">No tasks available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
