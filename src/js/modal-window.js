import axios from 'axios';
import * as basicLightbox from 'basiclightbox';

export const onclickGalleryItem = async event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const id = event.target.dataset.id;
  const data = await getBookById(id);
  createModalWindow(data);
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
  buy_links,
}) {
  if (description === '') {
    description = 'Book description has not been added yet...';
  }

  const instance = basicLightbox.create(
    `
    <div class="item-modal">
        <button type="button" class="closeModalBtn">
          <svg class="menu-btn-icon" width="18" height="18">
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
      if (link.name === 'Amazon') {
        iconElement.src = './img/amazon.svg';
      } else {
        iconElement.src = './img/image-book.svg';
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

// const array = [];
