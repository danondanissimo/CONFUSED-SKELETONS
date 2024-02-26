export const navListItems = document.querySelectorAll('.navigation-list-item');
export const openModalButton = document.querySelector('.modal-open');

const toggleMobileMenuButton = document.querySelector('.js-toggle-mobile-menu');
const iconBurger = document.querySelector('.menu-button-icon_burger');
const iconClose = document.querySelector('.menu-button-icon_close');
const mobileMenu = document.querySelector('.mobile-menu');

const closeModalButton = document.querySelector('.modal-close');
export const modalBackdrop = document.querySelector('.modal-backdrop');

// export const mobileLogOutButton = document.querySelector(
//   '.mobile-log-out-button'
// );

export const mobileSignUp = document.querySelector('.mobile-sign-up');
export const mobileLogOutButton = document.querySelector(
  '.mobile-log-out-button'
);
const currentPage = window.location.href;
const navLinks = document.querySelectorAll('.navigation-list-item');

export function openLoginModal() {
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

function isActive() {
  navLinks.forEach(navLink => {
    if (navLink.href == currentPage) {
      console.log();
      navLink.classList.add('currentPage');
    }
  });
}

isActive();

toggleMobileMenuButton.addEventListener('click', () => {
  iconBurger.classList.toggle('visually-hidden');
  iconClose.classList.toggle('visually-hidden');
});
