import {
  navListItems,
  openModalButton,
  mobileLogOutButton,
  mobileSignUp,
} from './header';

export const closeModalButton = document.querySelector('.modal-close');
export const modalBackdrop = document.querySelector('.modal-backdrop');

const signUpForm = document.querySelector('.sign-up-form');
const logOutButton = document.querySelector('.log-out-button');
const STORAGE_KEY = 'sign-up-form-state';

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
        `<img src=""> ${userData.name}`
      );
      mobileSignUp.replaceChildren();
      mobileSignUp.insertAdjacentHTML(
        'beforeend',
        `<img src=""> ${userData.name}`
      );
      signUpForm.classList.add('hidden');
      mobileLogOutButton.classList.remove('hidden');
      mobileLogOutButton.addEventListener('click', logOut);
      logOutButton.classList.remove('hidden');
      logOutButton.addEventListener('click', logOut);
    }
    modalBackdrop.classList.add('visually-hidden');
  }
});

function logOut() {
  navListItems.forEach(navListItem => {
    navListItem.classList.add('hidden');
  });
  signUpForm.classList.remove('hidden');
  logOutButton.classList.add('hidden');
  mobileLogOutButton.classList.add('hidden');
  openModalButton.replaceChildren();
  openModalButton.insertAdjacentHTML('beforeend', `Sign-up`);
  localStorage.removeItem(STORAGE_KEY);
}
