const toggleButton = document.querySelector('.theme-toggle');
const head = document.querySelector('head');
const linkElement = document.createElement('link');




toggleButton.addEventListener('click', darkThemeOnButtonClick);


function darkThemeOnButtonClick() {
  if (toggleButton.checked) {
    head.insertAdjacentElement('beforeend', linkElement);
    console.log('true');
  }
}

