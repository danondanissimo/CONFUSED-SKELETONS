async function getBooks(category) {
  try {
    let url = 'https://books-backend.p.goit.global/books/all';
    if (category !== 'ALL CATEGORIES') {
      url = `https://books-backend.p.goit.global/books/category?category=${category}`;
    }
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
                            <img src="${book.book_image}" alt="Book Image">
                            <h2> ${book.title}</h2>
                            <p> ${book.contributor}</p>
                        </div>
                    `;
      booksList.innerHTML += bookInfoHTML;
    });
  } else {
    console.error('Element with class "books-list" not found');
  }
}

async function displayAllBooks() {
  const categoryList = document.getElementById('categoryList');
  if (categoryList) {
    const categoryItems = categoryList.querySelectorAll('li');
    categoryItems.forEach(async item => {
      const category = item.textContent;
      await displayBooks(category);
    });
  } else {
    console.error('Element with id "categoryList" not found');
  }
}

fetch('https://books-backend.p.goit.global/books/category-list')
  .then(response => response.json())
  .then(data => {
    // Сортуємо категорії за їх назвами
    data.sort((a, b) => a.list_name.localeCompare(b.list_name));

    const categoryList = document.getElementById('categoryList');

    // Додамо категорію "ALL CATEGORIES"
    const allListItem = document.createElement('li');
    allListItem.textContent = 'ALL CATEGORIES';
    allListItem.addEventListener('click', () => {
      displayAllBooks();
    });
    categoryList.appendChild(allListItem);

    // Додамо інші категорії
    data.forEach(item => {
      const category = item.list_name;
      if (category !== 'ALL CATEGORIES') {
        const listItem = document.createElement('li');
        listItem.textContent = category;
        listItem.addEventListener('click', () => {
          displayBooks(category);
        });
        categoryList.appendChild(listItem);
      }
    });
  })
  .catch(error => console.error('Помилка отримання даних:', error));
