import axios from 'axios';

import { onclickGalleryItem } from '../js/modal-window';

const topBooksContainer = document.querySelector('.top-books-container');

const BASE_URL = 'https://books-backend.p.goit.global/';
renderTopCategoryBooks();
addListenerToCards();
async function getTopFiveBooks() {
  try {
    const response = await axios.get(BASE_URL + 'books/top-books');
    return response;
  } catch (error) {
    alert('Something went wrong, please try again.');
    return error;
  }
}

export async function renderTopCategoryBooks() {
  topBooksContainer.replaceChildren();
  topBooksContainer.insertAdjacentHTML(
    'afterbegin',
    `  <h1 class="best-sellers-title">
    Best sellers <span class="best-sellers-title-accent">Books</span>
  </h1>
  <ul class="top-books-list"></ul>`
  );
  const topBookList = document.querySelector('.top-books-list');
  const topBooks = await getTopFiveBooks();
  topBooks.data.map(book => {
    const categoryBox = createCategoryBox(book);
    topBookList.insertAdjacentHTML('beforeend', categoryBox);
  });
  addListenerToCards();
}

function slicePhrase(length, phrase) {
  if (phrase.length > length) {
    return phrase.slice(0, length) + '...';
  } else {
    return phrase;
  }
}

function createCategoryBox(category) {
  const bookList = category.books.map(book => createBookCard(book)).join('');
  return `
  <li class="top-category" >
    <p class="top-category-name">${category.list_name}</p>
    <ul class="top-category-list">${bookList}</ul>
      <button value="${category.list_name}" class="top-books-btn">See more</button></li>
        `;
}

function createBookCard({ book_image, _id, title, author }) {
  return `<li class="top-book-list" >
      <img src="${book_image}" 
      alt="${title}" class="top-book-img" data-id="${_id}"/>
      <h2 class="top-book-title">${slicePhrase(16, title)}</h2>
      <p class="top-book-author">${slicePhrase(16, author)}</p>
    </li>`;
}
function addListenerToCards() {
  const galleryImg = document.querySelectorAll('.top-book-img');
  galleryImg.forEach(img => {
    img.addEventListener('click', onclickGalleryItem);
  });
}
