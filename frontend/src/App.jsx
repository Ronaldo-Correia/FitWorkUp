import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar React',
      description: 'Ler a documentação oficial e fazer exercícios práticos',
      IsCompleted: false,
    },
    {
      id: 2,
      title: 'Fazer compras',
      description: 'Comprar frutas, verduras e leite',
      IsCompleted: true,
    },
    {
      id: 3,
      title: 'Exercitar-se',
      description: 'Correr 5km no parque',
      IsCompleted: false,
    },
  ]);

  const handleAddTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      description: 'Sem descrição',
      IsCompleted: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, IsCompleted: !task.IsCompleted } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center items-start p-6">
      <div className="w-full max-w-md bg-slate-700 p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl text-white font-bold text-center mb-6">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAdd={handleAddTask} />
        <Tasks tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
