export function initThemeToggle() {
  const themeSwitch = document.getElementById('themeSwitch');
  const body = document.body;

  // Cargar estado desde localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    themeSwitch.checked = true;
  }

  themeSwitch.addEventListener('change', () => {
    body.classList.toggle('dark');
    const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  });
}
