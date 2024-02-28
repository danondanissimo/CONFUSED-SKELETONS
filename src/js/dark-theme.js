const toggleButton = document.querySelector('.theme-toggle');
const head = document.querySelector('head');
const root  = document.documentElement;
const footer= document.querySelector('.footer');
const searchBox = document.querySelector('.search-box');
const headerNavigation = document.querySelector('.header-navigation');
const modalWindow = document.querySelector('.modal-window');
const loginField = document.querySelector('.login-field');
// const jsBtnBooks = document.querySelector('.js-btn-books');
// const topBooksBtn = document.querySelector('.top-books-btn');
const loginFieldLabel = document.querySelector('.login-field-label');
const loginSubmit = document.querySelector('.login-submit');
const title = document.querySelector('.title');
const topBookTitle = document.querySelector('.top-book-title');
const jsBtnBooks = document.querySelector('.js-btn-books');
const bookTitle = document.querySelector('.book-title');
// const bookDescription = document.querySelector('.book-description');
const addBtn = document.querySelector('#addBtn');
const footerLogo = document.querySelector('.footer-logo');
const footerParagraf = document.querySelector('.footer-paragraf');
const footerAdressText = document.querySelector('.footer-address-text');
const footerFormButton = document.querySelector('.footer-form-btn');
const topBooksBtn = document.querySelector('.top-books-btn');
const booksListH2 = document.querySelector('.books-list h2');
const titleCategoryPage = document.querySelector('.title-category-page');
const shoppingListTitle = document.querySelector('.shopping-list-title,')
const shlBooknameCategoryH4 = document.querySelector('.shl-bookname-category h4');
const shlBookDescription = document.querySelector('.shl-book-description');
const bookDescription = document.querySelector('.item-modal .book-description')
const footerContact = document.querySelector('.footer-contact');
const bestSellersTitle = document.querySelector('.best-sellers-title');
const topCategoryName = document.querySelector('.top-category-name');
const topBookAuthor = document.querySelector('.top-book-author');
const bookAuthor = document.querySelector('.book-author');
const footerAdressLink = document.querySelector('.footer-adress-link')




// .footer-input::placeholder,
// .search-output,
// .books-list p



if (localStorage.getItem('theme') === 'true') {
  toggleButton.checked = 'true';
  toggleTheme();
}

toggleButton.addEventListener('click', darkThemeOnButtonClick);

function darkThemeOnButtonClick() {
  toggleTheme();
}

function toggleTheme() {
  let temp = toggleButton.checked;
  localStorage.setItem('theme', JSON.stringify(temp));
  if (temp) {
    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('href', '/css/dark-theme.css');
    head.insertAdjacentElement('beforeend', linkElement);
  } else {
    const addedElement = head.querySelector('link[href="/css/dark-theme.css"]');
    if (addedElement) {
      addedElement.remove();
    }
  }
}
