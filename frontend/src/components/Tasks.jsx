function Tasks({ tasks, onToggle, onDelete }) {
  return (
    <div className="space-y-4 mt-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white p-4 rounded-lg shadow flex justify-between items-center hover:bg-gray-100 transition"
        >
          <div>
            <h2
              className={`text-lg font-semibold ${
                task.IsCompleted ? 'line-through text-gray-400' : 'text-gray-800'
              }`}
            >
              {task.title}
            </h2>
            <p className="text-sm text-gray-600">{task.description}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onToggle(task.id)}
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {task.IsCompleted ? 'Desfazer' : 'Concluir'}
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
            >
              Deletar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
