import { onclickGalleryItem } from '../js/modal-window';

async function getBooks(category) {
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
    document.getElementById('selectedCategory').textContent = category;
  } else {
    console.error('Element with class "books-list" not found');
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const categoryList = document.getElementById('categoryList');
  if (categoryList) {
    categoryList.addEventListener('click', event => {
      if (event.target && event.target.matches('li.category-item')) {
        let category = event.target.textContent;
        if (category === 'All Categories') {
          category = " "; // Якщо обрано "All Categories", передаємо порожній рядок
        }

        const categoryItems = categoryList.querySelectorAll('.category-item');
        categoryItems.forEach(item => {
          item.classList.remove('active');
        });
        event.target.classList.add('active');
        displayBooks(category);
      }
    });
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

const bookList = document.querySelector('.books-list');
bookList.addEventListener('click', onclickGalleryItem);