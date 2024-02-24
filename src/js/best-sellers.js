import axios from 'axios';
import onclickGalleryItem from './js/modal-window.js';

const BASE_URL = 'https://books-backend.p.goit.global/';
renderTopCategoryBooks();

async function getTopFiveBooks() {
  try {
    const response = await axios.get(BASE_URL + 'books/top-books');
    return response;
  } catch (error) {
    alert('Something went wrong, please try again.');
    return error;
  }
}

async function renderTopCategoryBooks() {
  const topBookList = document.querySelector('.top-books-list');
  const topBooks = await getTopFiveBooks();
  topBooks.data.map(book => {
    const categoryBox = createCategoryBox(book);
    topBookList.insertAdjacentHTML('beforeend', categoryBox);
  });
  const topCategoryList = document.querySelector('.top-category-list');
  topCategoryList.addEventListener('click', onclickGalleryItem);
}

function createCategoryBox(category) {
  const bookList = category.books.map(book => createBookCard(book)).join('');
  return `
  <li class="top-category" >
    <p class="top-category-name">${category.list_name}</p>
    <ul class="top-category-list">${bookList}</ul>
      <button value="${category.list_name}" class="js-btn-books see-more">See more</button></li>
        `;
}

function createBookCard({ book_image, _id, title, author }) {
  return `<li class="top-book-list" >
      <img src="${book_image}" 
      alt="${title}" class="top-book-img" id="${_id}"/>
      <h2 class="top-book-title">${title}</h2>
      <p class="top-book-author">${author}</p>
    </li>`;
}

// const array = [];
