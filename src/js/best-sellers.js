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
async function getBooksByCategory(selectedCategory) {
  try {
    const data = await axios.get(
      BASE_URL + `books/category?category=${selectedCategory}`
    );

    return data;
  } catch (error) {
    alertError('Something went wrong, please try again.');
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
  const topBooksBtn = document.querySelectorAll('.top-books-btn');
  topBooksBtn.forEach(btn => btn.addEventListener('click', handleSeeMore))
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
function createBookCard(book_obj) {
  return `<li class="top-book-list" value="${book_obj.list_item}">
      <img src="${book_obj.book_image}" 
      alt="${book_obj.title}" class="top-book-img" data-id="${book_obj._id}"/>
      <h2 class="top-book-title">${slicePhrase(16, book_obj.title)}</h2>
      <p class="top-book-author">${slicePhrase(16, book_obj.author)}</p>

    </li>`;
}
function handleSeeMore(e) {
  e.preventDefault();
  getBooksByCategory(e.target.value).then(data => {
    const targetTitle = colorizeLastWord(e.target.value)
    console.log(data.data)
    topBooksContainer.innerHTML = `<div class="box-in-box">
    <h1 class="best-sellers-title" id="selectedCategory">${targetTitle}
      <span class="titlecategory"></span>
    </h1>
    <ul class="books-list">${createBooks(data)}</ul>
  </div>`;
    addListenerToCards();
  })
   
}
function addListenerToCards() {
  const galleryImg = document.querySelectorAll('.top-book-img');
  galleryImg.forEach(img => {
    img.addEventListener('click', onclickGalleryItem);
  });
}

function createBooks(arr) {
  return arr.data.map(item => createBookCard(item)).join('');
}
function colorizeLastWord(sentence) {
  const words = sentence.split(' ');
  const lastWord = words.pop();
  const restOfSentence = words.map(word => `<span>${word}</span>`).join(' ');

  return `${restOfSentence} <span class="best-sellers-title-accent">${lastWord}</span>`;
}