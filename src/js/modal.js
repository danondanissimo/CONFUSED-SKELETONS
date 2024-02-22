export const closeModalButton = document.querySelector('.modal-close');
export const modalBackdrop = document.querySelector('.modal-backdrop');
export const modalWindow = document.querySelector('.modal-window');
export const signUpForm = document.querySelector('.sign-up-form');
export const logOutButton = document.querySelector('.log-out-button');
export const STORAGE_KEY = 'sign-up-form-state';
export let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || '';
