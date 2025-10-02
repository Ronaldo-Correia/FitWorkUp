import { useState } from "react";
import AddTask from "../components/AddTask"; // supondo que você já tenha esse componente
import "@styles/tasks.css";

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks((prev) => [...prev, { id: Date.now(), text: task, done: false }]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="tasks-page">
      <div className="tasks-card">
        <h2 className="tasks-title">Minhas Tarefas</h2>

        <AddTask onAdd={handleAddTask} />

        <ul className="tasks-list">
          {tasks.length === 0 && (
            <p className="tasks-empty">Nenhuma tarefa adicionada ainda.</p>
          )}
          {tasks.map((task) => (
            <li key={task.id} className={`task-item ${task.done ? "done" : ""}`}>
              <span onClick={() => toggleTask(task.id)}>{task.text}</span>
              <button onClick={() => removeTask(task.id)} className="task-remove">
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TasksPage;
