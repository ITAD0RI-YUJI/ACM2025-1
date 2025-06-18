const TASKS_KEY = 'todoAppTasks';
const CATEGORY_KEY = 'currentCategory';

export function saveTasksByCategory(category, tasks) {
  const data = loadAllTasks();
  data[category] = tasks;
  localStorage.setItem(TASKS_KEY, JSON.stringify(data));
}

export function loadTasksByCategory(category) {
  const data = loadAllTasks();
  return data[category] || [];
}

function loadAllTasks() {
  const raw = localStorage.getItem(TASKS_KEY);
  return raw ? JSON.parse(raw) : {};
}

export function saveCurrentCategory(category) {
  localStorage.setItem(CATEGORY_KEY, category);
}

export function loadCurrentCategory() {
  return localStorage.getItem(CATEGORY_KEY) || 'Trabajo';
}