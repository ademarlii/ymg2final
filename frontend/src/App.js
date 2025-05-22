import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskFrom';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await axios.get('http://localhost:1212/api/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async (task) => {
    await axios.post('http://localhost:1212/api/tasks', task);
    loadTasks();
  };

  const updateTask = async (task) => {
    await axios.put(`http://localhost:1212/api/tasks/${task.id}`, task);
    loadTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:1212/api/tasks/${id}`);
    loadTasks();
  };

  return (
      <div className="container">
        <h1>📝 Görevlerim</h1>
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
      </div>
  );
};

export default App;
