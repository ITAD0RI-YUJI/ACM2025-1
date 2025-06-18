import { initThemeToggle } from './theme.js';
import { initTaskManager } from './taskManager.js';
import { saveCurrentCategory, loadCurrentCategory } from './tasksStorage.js';

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();

  const categoryList = document.querySelectorAll('.sidebar ul li');
  const title = document.querySelector('header h1');

  let currentCategory = loadCurrentCategory();
  activateCategory(currentCategory);

  categoryList.forEach(li => {
    li.addEventListener('click', () => {
      const category = li.textContent.trim().replace(/^.*?\s/, ''); // remueve el emoji
      saveCurrentCategory(category);
      activateCategory(category);
    });
  });

  function activateCategory(category) {
    categoryList.forEach(li => li.classList.remove('active'));
    [...categoryList].find(li => li.textContent.includes(category)).classList.add('active');
    title.textContent = `📁 ${category}`;
    initTaskManager(category);
  }
});