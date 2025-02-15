import { useState, useEffect, useReducer } from "react";
import TaskList from "./components/TaskList"; 
import illustration from "./assets/sample.png"; // Background Image
import "./styles.css";

// Define action types
const ACTIONS = {
  ADD_TASK: "ADD_TASK",
  UPDATE_TASK: "UPDATE_TASK",
  DELETE_TASK: "DELETE_TASK",
  TOGGLE_COMPLETE: "TOGGLE_COMPLETE",
  LOAD_TASKS: "LOAD_TASKS",
};

// Reducer function for managing tasks
const taskReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_TASKS:
      return action.payload;
    case ACTIONS.ADD_TASK:
      return [...state, action.payload];
    case ACTIONS.UPDATE_TASK:
      return state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    case ACTIONS.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);
    case ACTIONS.TOGGLE_COMPLETE:
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

const App = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [filter, setFilter] = useState("all");
  const [selectedTask, setSelectedTask] = useState(null);  // State to track the selected task

  // Load tasks from mock API
  useEffect(() => {
    fetch("/data/tasks.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch tasks");
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.LOAD_TASKS, payload: data });
      })
      .catch((error) => console.error("Error loading tasks:", error));
  }, []);

  // Task actions
  const addTask = (task) => dispatch({ type: ACTIONS.ADD_TASK, payload: task });
  const updateTask = (task) => dispatch({ type: ACTIONS.UPDATE_TASK, payload: task });
  const deleteTask = (id) => dispatch({ type: ACTIONS.DELETE_TASK, payload: id });
  const toggleComplete = (id) => dispatch({ type: ACTIONS.TOGGLE_COMPLETE, payload: id });

  // Handle task selection
  const handleTaskClick = (task) => {
    setSelectedTask(task);  // Set the clicked task as the selected task
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Task Manager</h1>
        <p>Organize your tasks efficiently and stay productive!</p>
      </header>

      <section className="main-content">
        {/* Task List and Image are aligned */}
        <div className="task-list-container">
          <div className="task-list">
            <h2>Task List</h2>
            <ul>
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="task-item"
                  onClick={() => handleTaskClick(task)}  // Handle task click
                >
                  {task.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="image-container">
            <img src={illustration} alt="Task Management" className="main-image" />
          </div>
        </div>
      </section>

      {/* Task Description Display */}
      {selectedTask && (
        <section className="task-description">
          <h3>{selectedTask.title}</h3>
          <p>{selectedTask.description}</p>
        </section>
      )}

      {/* Task List Popup */}
      <TaskList
        tasks={tasks}
        filter={filter}
        setFilter={setFilter}
        addTask={addTask}
        updateTask={updateTask}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />

      <footer className="footer">
        <p>&copy; 2025 Task Manager - All Rights Reserved</p>
        <nav>
          <a href="#about">About</a> | 
          <a href="#services">Services</a> | 
          <a href="#contact">Contact</a>
        </nav>
      </footer>
    </div>
  );
};

export default App;
