const toggleButton = document.querySelector('.theme-toggle');
const head = document.querySelector('head');

toggleButton.addEventListener('click', darkThemeOnButtonClick);

function darkThemeOnButtonClick() {
  if (toggleButton.checked) {
    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('href', '/css/dark-theme.css');
    head.insertAdjacentElement('beforeend', linkElement);
  } else {
    const addedElement = head.querySelector('link[href="/css/dark-theme.css"]');
    console.log(addedElement);
    if (addedElement) {
      addedElement.remove();
    }
  }
}
