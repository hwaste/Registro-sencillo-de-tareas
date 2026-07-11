import { useState } from 'react';
function TaskForm({ onAddTask }) {
const [taskText, setTaskText] = useState('');
const [error, setError] = useState('');
const handleSubmit = (event) => {
event.preventDefault();
const cleanText = taskText.trim();
if (cleanText.length === 0) {
setError('La tarea no puede estar vacía.');
return;
}
if (cleanText.length < 3) {
setError('La tarea debe tener al menos 3 caracteres.');
return;
}
onAddTask(cleanText);
setTaskText('');
setError('');
};
return (
<section className="card">
<h2>Agregar nueva tarea</h2>
<form onSubmit={handleSubmit}>
<label htmlFor="task">Nombre de la tarea</label>
<input
id="task"
type="text"
placeholder="Ejemplo: estudiar React"
value={taskText}
onChange={(event) => setTaskText(event.target.value)}
/>
{error && <p className="error">{error}</p>}
<button type="submit">Agregar tarea</button>
</form>
</section>
);
}
export default TaskForm;