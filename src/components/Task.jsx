const Task = ({ task, updateTask, deleteTask, toggleComplete, setEditingTask, setShowTaskForm }) => {
  return (
    <div className="task">
      <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => {
          setEditingTask(task); // ✅ Set task for editing
          setShowTaskForm(true); // ✅ Show form when editing
        }}>
          Edit
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
