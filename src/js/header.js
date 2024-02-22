import {
  closeModalButton,
  modalBackdrop,
  signUpForm,
  logOutButton,
  STORAGE_KEY,
  data,
} from './modal.js';

const navListItems = document.querySelectorAll('.navigation-list-item');
const openModalButton = document.querySelector('.modal-open');

openModalButton.addEventListener('click', () => {
  modalBackdrop.classList.remove('visually-hidden');
  closeModalButton.addEventListener('click', () => {
    modalBackdrop.classList.add('visually-hidden');
  });
  closeModalButton.removeEventListener('click', () => {});
});

signUpForm.addEventListener('submit', event => {
  localStorage.removeItem(STORAGE_KEY);
  event.preventDefault();
  const userName = event.currentTarget.elements.name.value.trim();
  const userEmail = event.currentTarget.elements.email.value.trim();
  const userPassword = event.currentTarget.elements.password.value.trim();

  if (
    userName.length === 0 ||
    userEmail.length === 0 ||
    userPassword.length === 0
  ) {
    alert('All form fields must be filled in');
  } else {
    const userData = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };
    signUpForm.reset();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    if (JSON.stringify(userData) !== 0) {
      navListItems.forEach(navListItem => {
        navListItem.classList.remove('hidden');
      });

      openModalButton.replaceChildren();
      openModalButton.insertAdjacentHTML(
        'beforeend',
        `<img src="./images/user.png"> ${userData.name}`
      );
      signUpForm.classList.add('hidden');
      logOutButton.classList.remove('hidden');
      logOutButton.addEventListener('click', () => {
        navListItems.forEach(navListItem => {
          navListItem.classList.add('hidden');
        });
        signUpForm.classList.remove('hidden');
        logOutButton.classList.add('hidden');
        openModalButton.replaceChildren();
        openModalButton.insertAdjacentHTML('beforeend', `Sign-up`);
      });
    }
    modalBackdrop.classList.add('visually-hidden');
  }
});
