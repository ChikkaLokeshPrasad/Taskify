import React, { useEffect, useState } from 'react';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks
  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error('Error fetching tasks:', err));
  }, []);

  // Add task
  const handleAdd = async (newTask) => {
    const res = await fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  // Delete task
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: 'DELETE',
    });
    setTasks(tasks.filter(t => t._id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Taskify - To Do List</h1>
      <AddTaskForm onAdd={handleAdd} />

      <ul className="list-group">
        {tasks.map((task) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={task._id}>
            {task.title}
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
