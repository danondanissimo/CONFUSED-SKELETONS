import {
  navListItems,
  openModalButton,
  mobileLogOutButton,
  mobileSignUp,
  openLoginModal,
} from './header';

import { onMobileMenuBtnClick } from './modal-open-buttom';

export const closeModalButton = document.querySelector('.modal-close');
export const modalBackdrop = document.querySelector('.modal-backdrop');

const signUpForm = document.querySelector('.sign-up-form');
const logOutButton = document.querySelector('.log-out-button');

const STORAGE_KEY = 'sign-up-form-state';
let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || '';

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
      logIn(userData);
    }
    modalBackdrop.classList.add('visually-hidden');
  }
});

function logOut() {
  navListItems.forEach(navListItem => {
    navListItem.classList.add('visually-hidden');
  });
  signUpForm.classList.remove('visually-hidden');
  logOutButton.classList.add('visually-hidden');
  mobileLogOutButton.classList.add('visually-hidden');
  mobileSignUp.replaceChildren();
  mobileSignUp.insertAdjacentHTML(
    'beforeend',
    'Sign-up<svg class="sign-up-icon"><use href="./img/head-and-mobile-menu.svg#icon-arrow-narrow-right"></svg>'
  );
  mobileSignUp.classList.remove('user-profile');
  openModalButton.replaceChildren();
  openModalButton.insertAdjacentHTML(
    'beforeend',
    `Sign-up<svg class="sign-up-icon"><use href="./img/head-and-mobile-menu.svg#icon-arrow-narrow-right"></svg>`
  );
  openModalButton.classList.remove('header-user');
  openModalButton.removeEventListener('click', onMobileMenuBtnClick);
  openModalButton.addEventListener('click', openLoginModal);
  localStorage.removeItem(STORAGE_KEY);
  mobileSignUp.disabled = false;
  onMobileMenuBtnClick();
}

function logIn(userData) {
  navListItems.forEach(navListItem => {
    navListItem.classList.remove('visually-hidden');
  });

  openModalButton.replaceChildren();
  openModalButton.insertAdjacentHTML(
    'beforeend',
    `<span class="user-icon-eclipse"><svg class="user-icon"><use href="./img/head-and-mobile-menu.svg#icon-user"></svg></span> ${userData.name}<svg class="carret-down-icon"><use href="./img/head-and-mobile-menu.svg#icon-carret-down"></use></svg>`
  );
  openModalButton.classList.add('header-user');
  openModalButton.removeEventListener('click', openLoginModal);
  openModalButton.addEventListener('click', onMobileMenuBtnClick);
  mobileSignUp.replaceChildren();
  mobileSignUp.insertAdjacentHTML(
    'beforeend',
    `<span class="user-icon-eclipse"><svg class="user-icon"><use href="./img/head-and-mobile-menu.svg#icon-user"></svg></span> ${userData.name}`
  );
  mobileSignUp.classList.add('user-profile');
  signUpForm.classList.add('visually-hidden');
  mobileLogOutButton.classList.remove('visually-hidden');
  mobileLogOutButton.addEventListener('click', logOut);
  logOutButton.classList.remove('visually-hidden');
  logOutButton.addEventListener('click', logOut);
  mobileSignUp.disabled = true;
}

function isLoggedIn() {
  const userData = loadFromLS(STORAGE_KEY) || {};
  const { name, email, password } = userData;
  if (name && name.length > 0) {
    logIn(userData);
  }
}

function loadFromLS() {
  try {
    const result = data;
    return result;
  } catch (error) {
    console.error(error);
  }
}

isLoggedIn();

console.log('Hello');
