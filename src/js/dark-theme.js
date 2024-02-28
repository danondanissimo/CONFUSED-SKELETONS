const toggleButton = document.querySelector('.theme-toggle');
const head = document.querySelector('head');

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
    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('href', './css/dark-theme.css');
    head.insertAdjacentElement('beforeend', linkElement);
  } else {
    const addedElement = head.querySelector('link[href="/css/dark-theme.css"]');
    if (addedElement) {
      addedElement.remove();
    }
  }
}
