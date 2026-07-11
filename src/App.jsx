import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import AdviceBox from './components/AdviceBox';

//esta seccion fue solucionada con ia copilot, ya que no sabia como hacer para que se guarden
// las tareas en el local storage y que se mantengan al recargar la pagina. Primero consulté
//a chatgpt con una imagen del error, donde me indicó que el error estaba en el archivo "App.jsx"
// me ubiqué en el "App.jsx" y le pedi a copilot que solucionara el error con el texto "solucionar error"


function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };
  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  const deleteTask = (taskId) => {
    const confirmDelete = window.confirm('¿Estas seguro de eliminar esta tarea?');
    if (!confirmDelete) {
      return;
    }
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };
  return (
    <main className="container">
      <h1>Gestor Básico de Tareas</h1>
      <p className="description">
        Aplicación creada con React, componentes, Local Storage y consumo
        de API.
      </p>
      <AdviceBox />
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </main>
  );
}
export default App;