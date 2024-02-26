const mobileMenuBtn = document.querySelector('.js-toggle-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenuBtn.addEventListener('click', onMobileMenuBtnClick);
export function onMobileMenuBtnClick() {
  mobileMenu.classList.toggle('visually-hidden');
}
