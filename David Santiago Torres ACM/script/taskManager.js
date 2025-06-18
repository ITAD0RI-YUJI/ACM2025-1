import { updateProgress } from './progress.js';
import {
  saveTasksByCategory,
  loadTasksByCategory
} from './tasksStorage.js';

let tasks = [];
let currentCategory = 'Trabajo';

export function initTaskManager(category) {
  currentCategory = category;
  const addBtn = document.querySelector('.add-task-bar button');
  const input = document.querySelector('.add-task-bar input');
  const taskContainer = document.querySelector('.tasks');

  // Cargar tareas
  tasks = loadTasksByCategory(category);
  renderTasks(taskContainer);

  // Crear nueva tarea
  addBtn.onclick = () => {
    const text = input.value.trim();
    if (text !== '') {
      const task = {
        id: 'task-' + Date.now(),
        text,
        icon: '📝',
        completed: false,
      };
      tasks.push(task);
      saveTasksByCategory(currentCategory, tasks);
      addTaskToDOM(task, taskContainer);
      input.value = '';
      updateProgress(tasks);
    }
  };
}

function renderTasks(container) {
  container.innerHTML = '';
  tasks.forEach(task => addTaskToDOM(task, container));
  updateProgress(tasks);
}

function addTaskToDOM(task, container) {
  const taskDiv = document.createElement('div');
  taskDiv.className = 'task-item';
  taskDiv.setAttribute('data-id', task.id);

  const checkedAttr = task.completed ? 'checked' : '';

  taskDiv.innerHTML = `
    <input type="checkbox" ${checkedAttr} class="task-check">
    <span class="icon">${task.icon}</span>
    <span class="task-text">${task.text}</span>
    <div class="task-actions">
      <button class="edit-btn" title="Editar">✏️</button>
      <button class="delete-btn" title="Eliminar">🗑️</button>
    </div>
  `;

  const checkbox = taskDiv.querySelector('.task-check');
  const textSpan = taskDiv.querySelector('.task-text');
  const editBtn = taskDiv.querySelector('.edit-btn');
  const deleteBtn = taskDiv.querySelector('.delete-btn');

  // Evento: checkbox
  checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked;
    saveTasksByCategory(currentCategory, tasks);
    updateTaskStyle(taskDiv, task.completed);
    updateProgress(tasks);
  });

  // Evento: editar tarea
  editBtn.addEventListener('click', () => {
    const newText = prompt('Editar tarea:', task.text);
    if (newText !== null && newText.trim() !== '') {
      task.text = newText.trim();
      textSpan.textContent = task.text;
      saveTasksByCategory(currentCategory, tasks);
    }
  });

  // Evento: eliminar tarea
  deleteBtn.addEventListener('click', () => {
    if (confirm('¿Eliminar esta tarea?')) {
      tasks = tasks.filter(t => t.id !== task.id);
      saveTasksByCategory(currentCategory, tasks);
      container.removeChild(taskDiv);
      updateProgress(tasks);
    }
  });

  container.appendChild(taskDiv);
  updateTaskStyle(taskDiv, task.completed);
}

function updateTaskStyle(taskDiv, completed) {
  const textSpan = taskDiv.querySelector('.task-text');
  textSpan.style.textDecoration = completed ? 'line-through' : 'none';
  textSpan.style.opacity = completed ? '0.6' : '1';
}