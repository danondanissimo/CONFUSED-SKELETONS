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
                            <img class="image_book" src="${book.book_image}" alt="Book Image">
                            <h2 class="title_book"> ${book.title}</h2>
                            <p class="test_book"> ${book.contributor}</p>
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
    allListItem.classList.add('category-item'); // Додаємо клас для взаємодії з CSS
    allListItem.addEventListener('click', () => {
      const categoryItems = document.querySelectorAll('.category-item');
      categoryItems.forEach(item => {
        item.classList.remove('active');
      });
      allListItem.classList.add('active');
      displayAllBooks();
    });
    categoryList.appendChild(allListItem);

    // Додамо інші категорії

    data.forEach(item => {
      const category = item.list_name;
      if (category !== 'ALL CATEGORIES') {
        const listItem = document.createElement('li');
        listItem.textContent = category;
        listItem.classList.add('category-item'); // Додаємо клас для взаємодії з CSS
        listItem.addEventListener('click', () => {
          // Забираємо клас 'active' з усіх пунктів списку
          const categoryItems = categoryList.querySelectorAll('.category-item');
          categoryItems.forEach(item => {
            item.classList.remove('active');
          });
          // Додаємо клас 'active' до натиснутого пункту
          listItem.classList.add('active');
          displayBooks(category);
        });
        categoryList.appendChild(listItem);
      }
    });
  })
  .catch(error => console.error('Помилка отримання даних:', error));
