function TaskItem({ task, onToggleTask, onDeleteTask }) {
return (
<li className="task-item">
<span className={task.completed ? 'completed' : ''}>
{task.text}
</span>
<div className="task-actions">
<button onClick={() => onToggleTask(task.id)}>
{task.completed ? 'Pendiente' : 'Completar'}
</button>
<button className="delete" onClick={() => onDeleteTask(task.id)}>
Eliminar
</button>
</div>
</li>
);
}
export default TaskItem;