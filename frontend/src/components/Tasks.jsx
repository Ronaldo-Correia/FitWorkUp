function Tasks({ tasks, onToggle, onDelete }) {
  return (
    <div className="space-y-4 mt-4 font-montserrat">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center hover:bg-gray-100 transition"
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
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {task.IsCompleted ? 'Desfazer' : 'Concluir'}
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="px-3 py-1 text-sm bg-vermelhoFit text-white rounded-lg hover:brightness-90 transition"
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
