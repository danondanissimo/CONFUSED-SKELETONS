import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import resolveIcon from '../img/bi_check2-circle.svg';
import infoIcon from '../img/info.svg';
import amazonIcon from '../img/amazon.svg';
import appleIcon from '../img/apple.svg';
import anotherShopsIcon from '../img/another-shops.svg';
import bamIcon from '../img/Books-A-Million_logo.svg';
import bookShopIcon from '../img/bookshop.svg';
import indieIcon from '../img/indiebound.svg';

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
            <use href="./img/symbol-defs.svg#icon-Icon-close-modal"claa></use>
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
              <ul class="buy-links-container"></ul>
            </div>
        </div>
        <button type="submit" class="addBtn" id="addBtn">Add to shopping list</button>
    </div>
    `,
    {
      onShow: instance => {
        document.body.style.overflow = 'hidden';

        const closeButton = instance.element().querySelector('.closeModalBtn');
        closeButton.onclick = () => instance.close();
        addBtn = instance.element().querySelector('.addBtn');
      },
      onClose: instance => {
        document.body.style.overflow = 'visible';
      },
    }
  );

  const buyLinksContainer = instance
    .element()
    .querySelector('.buy-links-container');
  searchBooksInShops(
    { book_image, author, title, buy_links },
    buyLinksContainer
  );

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
    removeBookMessage();
  } else {
    e.target.textContent = 'Remove from the shopping list';
    e.target.classList.add('mobileWidth');
    addedBooks.push(data);
    addCongratulation();
    addBookMessage();
  }
  localStorage.setItem(localStorageKey, JSON.stringify(addedBooks));
};

function addBookMessage() {
  iziToast.success({
    messageColor: '#ffffff',
    messageSize: '20',
    backgroundColor: '#6dcc14',
    iconUrl: resolveIcon,
    position: 'bottomRight',
    message: '😃  Your book has been added to the shopping list!.',
  });
}

function removeBookMessage() {
  iziToast.info({
    messageColor: '#ffffff',
    messageSize: '20',
    iconColor: '#ffffff',
    iconUrl: infoIcon,
    backgroundColor: 'rgb(37, 119, 241)',
    position: 'bottomRight',
    message: '😔  The book has been removed from the shopping list',
  });
}

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

function searchBooksInShops(
  { book_image, author, title, buy_links },
  buyLinksContainer
) {
  buy_links.forEach(link => {
    const itemElement = document.createElement('li');
    buyLinksContainer.appendChild(itemElement);
    const linkElement = document.createElement('a');
    itemElement.appendChild(linkElement);
    const iconElement = document.createElement('img');
    linkElement.appendChild(iconElement);

    itemElement.className = 'shop-link';
    linkElement.target = '_blank';
    iconElement.className = 'booksIcon';
    iconElement.alt = link.name + ' Icon';

    const url = `${book_image}`;
    const fileName = url.split('/').pop();
    const fileNameWithoutExtension = fileName.split('.')[0];

    switch (link.name) {
      case 'Amazon':
        linkElement.href = link.url;
        iconElement.src = amazonIcon;
        break;
      case 'Apple Books':
        linkElement.href = link.url;
        iconElement.src = appleIcon;
        iconElement.className = 'booksIconApple';
        break;
      case 'Books-A-Million':
        linkElement.href = `https://www.booksamillion.com/p/${title}/${author}/${fileNameWithoutExtension}`;
        iconElement.src = bamIcon;
        break;
      case 'Bookshop':
        linkElement.href = `https://bookshop.org/search?keywords=${fileNameWithoutExtension}`;
        iconElement.src = bookShopIcon;
        break;
      case 'IndieBound':
        linkElement.href = `https://bookshop.org/p/books/atomic-habits-an-easy-proven-way-to-build-good-habits-break-bad-ones-james-clear/12117739?ean=${fileNameWithoutExtension}`;
        iconElement.src = indieIcon;
        break;
      default:
        linkElement.href = link.url;
        iconElement.src = anotherShopsIcon;
        break;
    }

    if (
      link.name !== 'Amazon' &&
      link.name !== 'Apple Books' &&
      link.name !== 'Barnes and Noble'
    ) {
      iconElement.width = '40';
      iconElement.height = '40';
    }
  });
}
