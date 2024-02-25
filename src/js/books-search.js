// Функція для отримання книг і відображення їх на сторінці
function getBooks() {
  document.getElementById('output').innerHTML = '';
  fetch(
    'https://openlibrary.org/search.json?q=' +
      document.getElementById('input').value
  )
    .then(a => a.json())
    .then(response => {
      for (let i = 0; i < 3 && i < response.docs.length; i++) {
        if (response.docs[i].title) {
          document.getElementById('output').innerHTML +=
            '<h2>' +
            response.docs[i].title +
            '</h2>' +
            (response.docs[i].author_name
              ? response.docs[i].author_name[0]
              : 'Invisible author') +
            '<br><img src=https://covers.openlibrary.org/b/isbn/';
        } else {
          console.log('Heading not found for element with index ' + i);
        }
      }
    })
    .catch(error => {
      console.error('Amusement at the hour of picking up books:', error);
    });
}

// Функція для обробки події кліку на кнопку
function handleButtonClick() {
  // Викликаємо функцію getBooks() для завантаження книг
  getBooks();
}

// Додаємо прослуховувач подій на кнопку
document
  .getElementById('buttonId')
  .addEventListener('click', handleButtonClick);

// Викликаємо функцію getBooks() при завантаженні сторінки
getBooks();
