export function updateProgress(taskList) {
  const completed = taskList.filter(t => t.completed).length;
  const total = taskList.length;
  const percent = total === 0 ? 0 : (completed / total) * 100;

  const progress = document.querySelector('.progress');
  progress.style.width = `${percent}%`;
}