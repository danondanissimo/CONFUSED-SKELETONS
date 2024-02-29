import { onclickGalleryItem } from '../js/modal-window';
import { renderTopCategoryBooks } from './best-sellers';

const bestSellersContainer = document.querySelector('.top-books-container');

async function getBooks(category) {
  if (category.length !== 0) {
    try {
      let url = `https://books-backend.p.goit.global/books/category?category=${category}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  } else {
    console.log('Hello sir ');
  }
}

async function displayBooks(category) {
  const booksList = document.querySelector('.books-list');
  if (booksList) {
    booksList.innerHTML = ''; // Очистимо список книг перед відображенням нових
    const books = await getBooks(category);
    books.forEach(book => {
      const bookInfoHTML = `
                        <div class="book">
                            <img class="image_book" src="${book.book_image}"  data-id="${book._id}"alt="Book Image">
                            <h2 class="title_book"> ${book.title}</h2>
                            <p class="test_book"> ${book.contributor}</p>
                        </div>
                    `;
      booksList.innerHTML += bookInfoHTML;
    });
    const arrCategory = category.split(' ');
    const lastWord = arrCategory.at(-1);
    document.querySelector('.titlecategory').textContent = lastWord;
    arrCategory.pop();
    const newCategory = arrCategory.join(' ');
    document
      .getElementById('selectedCategory')
      .insertAdjacentHTML('afterbegin', newCategory);
  } else {
    console.error('Element with class "books-list" not found');
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const categoryList = document.getElementById('categoryList');
  if (categoryList) {
    categoryList.addEventListener('click', event => {
      bestSellersContainer.replaceChildren();
      bestSellersContainer.insertAdjacentHTML(
        'afterbegin',
        `<div class="box-in-box">
    <h1 class="title-category-page" id="selectedCategory">
      <span class="titlecategory"></span>
    </h1>
    <ul class="books-list"></ul>
  </div>`
      );

      const bookList = document.querySelector('.books-list');
      bookList.addEventListener('click', onclickGalleryItem);

      if (event.target && event.target.matches('li.category-item')) {
        let category = event.target.textContent;

        // Встановлюємо клас "active" для поточного елемента та видаляємо його для інших
        const categoryItems = categoryList.querySelectorAll('.category-item');
        categoryItems.forEach(item => {
          item.classList.remove('active');
        });
        event.target.classList.add('active');

        if (category == 'All categories') {
          renderTopCategoryBooks();
          return;
        }

        displayBooks(category);
      }
    });

    // Встановлюємо клас "active" для першого елемента ("All categories")
    const firstCategoryItem = categoryList.querySelector('.category-item');
    firstCategoryItem.classList.add('active');
  } else {
    console.error('Element with id "categoryList" not found');
  }
});

fetch('https://books-backend.p.goit.global/books/category-list')
  .then(response => response.json())
  .then(data => {
    data.sort((a, b) => a.list_name.localeCompare(b.list_name));

    const categoryList = document.getElementById('categoryList');

    data.forEach(item => {
      const category = item.list_name;
      const listItem = document.createElement('li');
      listItem.textContent = category;
      listItem.classList.add('category-item');
      categoryList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
