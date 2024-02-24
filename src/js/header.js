import { modalBackdrop, closeModalButton } from './login-modal';

export const navListItems = document.querySelectorAll('.navigation-list-item');
export const openModalButton = document.querySelector('.modal-open');

const toggleMobileMenuButton = document.querySelector('.js-toggle-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');
export const mobileLogOutButton = document.querySelector(
  '.mobile-log-out-button'
);

export const mobileSignUp = document.querySelector('.mobile-sign-up');

function openLoginModal() {
  modalBackdrop.classList.remove('visually-hidden');
  closeModalButton.addEventListener('click', () => {
    modalBackdrop.classList.add('visually-hidden');
  });
  closeModalButton.removeEventListener('click', () => {});
}

openModalButton.addEventListener('click', openLoginModal);

toggleMobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-open');
});

mobileSignUp.addEventListener('click', openLoginModal);
