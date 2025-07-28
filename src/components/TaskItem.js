import React from 'react';
import axios from 'axios';

const TaskItem = ({ task, onDelete, onToggle }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/tasks/${task._id}`);
      onDelete(task._id);
    } catch (error) {
      console.error('Error deleting task:', error.message);
    }
  };

  const handleToggle = async () => {
    try {
      const updatedTask = { ...task, completed: !task.completed };
      const response = await axios.put(`/api/tasks/${task._id}`, updatedTask);
      onToggle(response.data); // pass updated task
    } catch (error) {
      console.error('Error toggling task:', error.message);
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={handleToggle}>{task.title}</span>
      <button onClick={handleDelete}>❌</button>
    </div>
  );
};

export default TaskItem;
