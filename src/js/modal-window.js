import * as basicLightbox from 'basiclightbox';
import arr from './home.js';

const onclickGalleryItem = arr => event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const { picture, title, author, id, description, links } =
    event.target.dataset;
  const buyLinks = JSON.parse(links);
  const instance = basicLightbox.create(
    `
    <div class="item-modal">
        <button>close</button>
        <div class="item-card">
            <img class="item-image" src="${picture}" /> 
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
  buyLinks.forEach(link => {
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
};
