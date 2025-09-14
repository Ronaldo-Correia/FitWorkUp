import { useState } from 'react';
import AddTask from '../components/AddTask';
import Tasks from '../components/Tasks';

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  const handleAdd = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      description: 'Sem descrição',
      IsCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggle = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, IsCompleted: !task.IsCompleted } : task
    ));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 font-montserrat">
      <h1 className="text-2xl font-bold mb-4 text-slate-800">Minhas Tarefas</h1>
      <AddTask onAdd={handleAdd} />
      <Tasks tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

export default TasksPage;
