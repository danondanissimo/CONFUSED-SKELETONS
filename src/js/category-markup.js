import axios from 'axios';
import { onclickGalleryItem } from './modal-window';

const API_URL =
  'https://books-backend.p.goit.global/books/category?category=Hardcover%20Fiction';

renderCategoryBooks();

// async function getBooksByCategory() {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     alert('Something went wrong, please try again.');
//     console.error(error);
//     return null;
//   }
// }

async function renderCategoryBooks() {
  const bookListContainer = document.querySelector('.books-list');

  const books = await getBooksByCategory();
  if (!books) return; // Exit early if there's an error

  const categoryBox = createCategoryBox(books);
  bookListContainer.insertAdjacentHTML('beforeend', categoryBox);

//   const categoryList = document.querySelector('.category-list');
//   categoryList.addEventListener('click', onclickGalleryItem);
}

function createCategoryBox(books) {
  const bookList = books.map(book => createBookCard(book)).join('');
  return `
    <li class="category">
       <ul class="category-list">${bookList}</ul>
    </li>
  `;
}

// function createBookCard({ _id, title, author, book_image }) {
//   return `
//     <li class="book-list">
//       <img src="${book_image}" alt="${title}" class="book-img" id="${_id}" />
//       <h2 class="book-title">${title}</h2>
//       <p class="book-author">${author}</p>
//     </li>
//   `;
// }
