const toggleButton = document.querySelector('.theme-toggle');
const head = document.querySelector('head');

const root = document.documentElement;

console.log(root);

if (localStorage.getItem('theme') === 'true') {
  toggleButton.checked = 'true';
  toggleTheme();
}

toggleButton.addEventListener('click', darkThemeOnButtonClick);

function darkThemeOnButtonClick() {
  toggleTheme();
}

function toggleTheme() {
  let temp = toggleButton.checked;
  localStorage.setItem('theme', JSON.stringify(temp));
  if (temp) {
    document.querySelector('body').classList.add('dark');
    root.classList.add('root-dark');
  } else {
    document.querySelector('body').classList.remove('dark');
    root.classList.remove('root-dark');
  }
}
