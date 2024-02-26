const mobileMenuBtn = document.querySelector('.js-toggle-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenuBtn.addEventListener('click', onMobileMenuBtnClick);
function onMobileMenuBtnClick() {
  mobileMenu.classList.toggle('hidden');
}
