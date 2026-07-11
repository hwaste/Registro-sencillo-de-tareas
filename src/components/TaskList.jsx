import TaskItem from './TaskItem';
function TaskList({ tasks, onToggleTask, onDeleteTask }) {
if (tasks.length === 0) {
return (
<section className="card">
<h2>Listado de tareas</h2>
<p>No hay tareas registradas.</p>
</section>
);
}
return (
<section className="card">
<h2>Listado de tareas</h2>
<ul className="task-list">
{tasks.map((task) => (
<TaskItem
key={task.id}
task={task}
onToggleTask={onToggleTask}
onDeleteTask={onDeleteTask}
/>
))}
</ul>
</section>
);
}
export default TaskList;