import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import laptopImage from "../assets/techbot.png";
import { 
  Container, Header, PopupButton, Content, TextSection, 
  Title, Subtitle, Button, ImageSection, Laptop, TaskListTitle,
  Popup, CloseButton, FilterSection, FilterButton, PopupTitle,
  AddTaskForm, TaskInput, AddButton, TaskItem, TaskActions, ActionButton, TaskListContainer, EditTaskForm
} from "../styles/TaskListStyles";

// Mock API URL for tasks (using local json file)
const API_URL = "/data/tasks.json"; // Ensure this path is correct if stored in public folder

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [selectedTask, setSelectedTask] = useState(null);
  const [newTaskText, setNewTaskText] = useState("");

  // Fetch tasks from mock API
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  // Toggle task completion
  const toggleCompletion = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    // Simulate API update
    updateTaskInAPI(id);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    // Simulate API delete
    deleteTaskFromAPI(id);
  };

  // Edit task
  const editTask = (id, newText) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, text: newText } : task
    ));
    setSelectedTask(null);
    // Simulate API update
    updateTaskInAPI(id, newText);
  };

  // Filter tasks based on status
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true; // "all" filter shows all tasks
  });

  // Add new task
  const addTask = (e) => {
    e.preventDefault();
    if (newTaskText.trim()) {
      const newTask = { id: tasks.length + 1, text: newTaskText, completed: false };
      setTasks([...tasks, newTask]);
      setNewTaskText("");
      // Simulate API add
      addTaskToAPI(newTask);
    }
  };

  // Toggle the popup visibility
  const togglePopup = () => setPopupOpen(!isPopupOpen);

  // Simulate adding task to the mock API
  const addTaskToAPI = (task) => {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).catch((error) => console.error("Error adding task:", error));
  };

  // Simulate updating task in the mock API
  const updateTaskInAPI = (id, newText) => {
    const updatedTask = { id, text: newText };
    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    }).catch((error) => console.error("Error updating task:", error));
  };

  // Simulate deleting task from the mock API
  const deleteTaskFromAPI = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    }).catch((error) => console.error("Error deleting task:", error));
  };

  return (
    <Container>
      <Header>
        <TaskListTitle>Task list</TaskListTitle>
        <PopupButton onClick={togglePopup}>Tasklist Pop Up</PopupButton>
      </Header>

      <Content>
        <TextSection>
          <Title>Lorem ipsum dolor sit amet consectetur. Eros libero.</Title>
          <Subtitle>Lorem ipsum dolor sit amet consectetur. Odio.</Subtitle>

          {/* Display all tasks */}
          {tasks.map((task) => (
            <TaskItem key={task.id}>
              <FaCheckCircle 
                className={`icon ${task.completed ? "completed" : ""}`} 
                onClick={() => toggleCompletion(task.id)} 
                style={{ color: task.completed ? "green" : "red", cursor: "pointer" }}
              />
              <span>{task.text}</span>
            </TaskItem>
          ))}

          <Button>Check Tasklist</Button>
        </TextSection>

        <ImageSection>
          <Laptop src={laptopImage} alt="Laptop" />
        </ImageSection>
      </Content>

      {/* Popup for task management */}
      {isPopupOpen && (
        <Popup>
          <CloseButton onClick={togglePopup}>×</CloseButton>
          <PopupTitle>Task Management</PopupTitle>
          
          {/* Filter section only inside the popup */}
          <FilterSection>
            <FilterButton onClick={() => setFilter("all")}>All Tasks</FilterButton>
            <FilterButton onClick={() => setFilter("completed")}>Completed</FilterButton>
            <FilterButton onClick={() => setFilter("active")}>Active</FilterButton>
          </FilterSection>

          <h2>All Tasks</h2>

          {/* Add task form inside the popup */}
          <AddTaskForm onSubmit={addTask}>
            <TaskInput 
              type="text"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              placeholder="Enter new task"
            />
            <AddButton type="submit">Add Task</AddButton>
          </AddTaskForm>

          {/* Render tasks inside the popup */}
          <TaskListContainer>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id}>
                <span>{task.text}</span>
                <TaskActions>
                  <ActionButton 
                    onClick={() => toggleCompletion(task.id)} 
                    completed={task.completed}
                  >
                    {task.completed ? "Mark as Incomplete" : "Mark as Completed"}
                  </ActionButton>
                  <ActionButton onClick={() => deleteTask(task.id)}>Delete</ActionButton>
                  <ActionButton onClick={() => setSelectedTask(task)}>Edit</ActionButton>
                </TaskActions>
              </TaskItem>
            ))}
          </TaskListContainer>

          {/* Edit Task Section */}
          {selectedTask && (
            <EditTaskForm onSubmit={(e) => {
                e.preventDefault();
                const updatedText = e.target.text.value;
                editTask(selectedTask.id, updatedText);
            }}>
              <h3>Edit Task</h3>
              <input 
                type="text" 
                name="text" 
                defaultValue={selectedTask.text} 
                placeholder="Edit task text"
              />
              <div>
                <button type="submit">Save Changes</button>
                <button type="button" onClick={() => setSelectedTask(null)}>Cancel</button>
              </div>
            </EditTaskForm>
          )}
        </Popup>
      )}
    </Container>
  );
};

export default TaskList;
