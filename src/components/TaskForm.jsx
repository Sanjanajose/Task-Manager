import { useState, useEffect } from "react";

const TaskForm = ({ addTask, updateTask, editingTask, setEditingTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  // Set initial values if editingTask is provided
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setCompleted(editingTask.completed);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = { id: editingTask ? editingTask.id : Date.now(), title, description, completed };

    if (editingTask) {
      updateTask(taskData);
    } else {
      addTask(taskData);
    }

    // Reset form
    setTitle("");
    setDescription("");
    setCompleted(false);
    setEditingTask(null);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>

      {/* Checkbox for Completion Status */}
      <label className="checkbox-container">
        <input type="checkbox" checked={completed} onChange={() => setCompleted(!completed)} />
        Mark as Completed
      </label>

      <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
