import { modalBackdrop, closeModalButton } from './modal';

export const navListItems = document.querySelectorAll('.navigation-list-item');
export const openModalButton = document.querySelector('.modal-open');

openModalButton.addEventListener('click', () => {
  modalBackdrop.classList.remove('visually-hidden');
  closeModalButton.addEventListener('click', () => {
    modalBackdrop.classList.add('visually-hidden');
  });
  closeModalButton.removeEventListener('click', () => {});
});
