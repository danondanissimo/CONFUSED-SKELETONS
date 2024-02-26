import axios from 'axios';
import * as basicLightbox from 'basiclightbox';

const localStorageKey = 'shopping-list';
export default localStorageKey;

let addBtn;
const addedBooks = loadFromLS(localStorageKey) || [];

export const onclickGalleryItem = async event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const id = event.target.dataset.id;
  const data = await getBookById(id);

  createModalWindow(data);
  addBtn = document.querySelector('.addBtn');
  addBtn.addEventListener('click', refreshLocalStorage(data));

  if (addedBooks.length > 0) {
    const isBookAdded = addedBooks.some(book => id === book._id);
    if (isBookAdded) {
      addBtn.textContent = 'Remove from the shopping list';
      addBtn.classList.add('mobileWidth');
    } else {
      addBtn.textContent = 'Add to shopping list';
    }
  }
};

async function getBookById(id) {
  const response = await axios.get(
    `https://books-backend.p.goit.global/books/${id}`
  );
  return response.data;
}

function createModalWindow({
  book_image,
  author,
  title,
  description,
  _id,
  buy_links,
}) {
  if (description === '') {
    description = 'Book description has not been added yet...';
  }

  const instance = basicLightbox.create(
    `
    <div class="item-modal">
        <button type="button" class="closeModalBtn">
          <svg class="menu-btn-icon">
            <use href="./img/symbol-defs.svg#icon-Icon-close-modal"></use>
          </svg>
        </button>
        <div class="item-card">
            <div class="image-container">
              <img class="item-image" src="${book_image}" />
            </div>
            <div class="item-information">
              <h3 class="book-title">${title}</h3>
              <p class="book-author">${author}</p>
              <p class="book-description">${description}</p>
              <div class="buy-links-container"></div>
            </div>
        </div>
        <button type="submit" class="addBtn" id="addBtn">Add to shopping list</button>
    </div>
    `,
    {
      onShow: instance => {
        instance.element().querySelector('button').onclick = instance.close;
        addBtn = instance.element().querySelector('.addBtn');
      },
    }
  );

  const buyLinksContainer = instance
    .element()
    .querySelector('.buy-links-container');
  buy_links.forEach(link => {
    if (link.name === 'Amazon' || link.name === 'Apple Books') {
      const linkElement = document.createElement('a');
      linkElement.href = link.url;
      linkElement.target = '_blank';
      buyLinksContainer.appendChild(linkElement);

      const iconElement = document.createElement('img');
      iconElement.className = 'booksIcon';
      if (link.name === 'Amazon') {
        iconElement.src = './img/amazon.png';
      } else {
        iconElement.src = './img/apple.svg';
      }
      iconElement.alt = link.name + ' Icon';

      linkElement.appendChild(iconElement);
    }
  });

  instance.show();

  const pressEscapeKey = e => {
    if (e.key === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', pressEscapeKey);
    }
  };

  document.addEventListener('keydown', pressEscapeKey);
}

const refreshLocalStorage = data => e => {
  e.preventDefault();

  if (e.target.textContent === 'Remove from the shopping list') {
    e.target.textContent = 'Add to shopping list';
    e.target.classList.remove('mobileWidth');

    const indexToRemove = addedBooks.findIndex(book => book._id === data._id);
    addedBooks.splice(indexToRemove, 1);
    removeCongratulation();
  } else {
    e.target.textContent = 'Remove from the shopping list';
    e.target.classList.add('mobileWidth');
    addedBooks.push(data);
    addCongratulation();
  }
  localStorage.setItem(localStorageKey, JSON.stringify(addedBooks));
};

function loadFromLS(key) {
  const loadedStr = localStorage.getItem(key);

  try {
    const savedObject = JSON.parse(loadedStr);
    return savedObject;
  } catch {
    return loadedStr;
  }
}

function addCongratulation() {
  const bookCard = document.querySelector('.item-modal');
  const congratulationMessage = document.createElement('p');
  congratulationMessage.className = 'congratulation';
  congratulationMessage.textContent =
    'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
  bookCard.appendChild(congratulationMessage);
}

function removeCongratulation() {
  const congratulation = document.querySelector('.congratulation');
  if (congratulation) congratulation.remove();
}
