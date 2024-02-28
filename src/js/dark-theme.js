const toggleButton = document.querySelector('.theme-toggle');
const head = document.querySelector('head');

import darkTheme from '../css/dark-theme.css';

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
    linkElement.setAttribute('href', `${darkTheme}`);
    head.insertAdjacentElement('beforeend', linkElement);
  } else {
    const addedElement = head.querySelector(`link[href="${darkTheme}"]`);
    if (addedElement) {
      addedElement.remove();
    }
  }
}

// 'link[href="/css/dark-theme.css"]'
// '/css/dark-theme.css';
