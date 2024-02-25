'use strict';
// import Pagination from './tui-pagination'; 
// import 'tui-pagination/dist/tui-pagination.css';
let ref = {
    placeForBookList: document.querySelector('.shl-books-list'),
    onEmptyLocalStorageField: document.querySelector('.no-books-in-local-storage'),
    paginationBlock: document.querySelector('.shl-pagination-block'),
    firstPaginationButton: document.querySelector('.shl-pagination-button-first'),
    previousPaginationButton: document.querySelector('.shl-pagination-button-previous'),
    onePaginationButton: document.querySelector('.shl-pagination-button-one'),
    twoPaginationButton: document.querySelector('.shl-pagination-button-two'),
    freePaginationButton: document.querySelector('.shl-pagination-button-free'),
    morePaginationButton: document.querySelector('.shl-pagination-button-more'),
    nextPaginationButton: document.querySelector('.shl-pagination-button-next'),
    lastPaginationButton: document.querySelector('.shl-pagination-button-last'),
  
}
let bookArray = [];
let bookList = [];
let bookMarkupList = [];
const STORAGE_KEY = 'shopping-list';
let pageNumber = 1;
let currentPage = 1;
let totalPageNumber = 0;
const paginationButtonArray = [ref.onePaginationButton, ref.twoPaginationButton, ref.freePaginationButton, ref.morePaginationButton];
const indexm = paginationButtonArray.findIndex(button=>button===ref.morePaginationButton);
console.log(indexm);
// const pagination2 = new Pagination(document.getElementById('shl-pagination'), {
//     totalItems: 15,
//     itemsPerPage: 3,
//     visiblePages: 3,
//     centerAlign: true
// });
// async function getBookArray() {
//     try {
//         const response = await fetch('../partials/test.json');
//      ;
//         return response.json();
//     } catch (error) {
        
//         throw error;
//     }
//     }
// async function loadDataToLocalSorage() {
//     try {
//         bookArray = await getBookArray();
//         console.log(bookArray);
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(bookArray));
//          ;
//     } catch (error) {
//         console.error('Помилка завантаження даних:', error);
//     }
// }
// loadDataToLocalSorage();
function removeBookListFromLocalStorage(STORAGE_KEY) {
    localStorage.removeItem(STORAGE_KEY);
}
// removeBookListFromLocalStorage(STORAGE_KEY);
function clearMarkupList() { 
    bookMarkupList = [];
}

function getBookListFromLocalStorage(STORAGE_KEY) {
    
    const bookData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
      if (bookData && bookData.length > 0) { bookList = bookData;
           return bookList;
         } 
}
function showStartPage() {
    if (bookList.length > 0) { 
        ref.onEmptyLocalStorageField.classList.add('hide'); 
        renderBookListByPage(pageNumber, bookList);
        showPaginationBlock();
         } else { ref.onEmptyLocalStorageField.classList.remove('hide'); }
}
getBookListFromLocalStorage(STORAGE_KEY);
showStartPage();


ref.placeForBookList.addEventListener('click', onCardDeleteButtonClick);
ref.paginationBlock.addEventListener('click', onPaginationButtonClick);
function onPaginationButtonClick(e) {
    const classList = e.target.classList[0];
    const textContent = parseInt(e.target.textContent,10);
    
    // switch (classList) {
    //     case 'shl-pagination-button-first': pageNumber = 1;
    //         renderBookListByPage(pageNumber, bookList);
    //         ref.firstPaginationButton.setAttribute("disabled", "true");
    //         ref.previousPaginationButton.setAttribute("disabled", "true");
    //         paginationButtonArray[0].classList.add('shl-active');
    //         paginationButtonArray[currentPage-1].classList.remove('shl-active');
    //         break;
    //     case 'shl-pagination-button-previous':
    //         paginationButtonArray[currentPage - 1].classList.remove('shl-active');
    //         currentPage = currentPage - 1;
    //         pageNumber = currentPage;
    //         renderBookListByPage(pageNumber, bookList);
    //         paginationButtonArray[currentPage - 1].classList.add('shl-active');
    //         if (pageNumber === 1) {
    //             ref.firstPaginationButton.setAttribute("disabled", "true");
    //             ref.previousPaginationButton.setAttribute("disabled", "true");
    //         };
    //         break;
    //     case 'shl-pagination-button-one':
    //         if (textContent === 1) {
    //             paginationButtonArray[currentPage - 1].classList.remove('shl-active');
    //             currentPage = 1;
    //             pageNumber = currentPage;
    //             paginationButtonArray[currentPage - 1].classList.add('shl-active');
    //             renderBookListByPage(pageNumber, bookList);
    //             ref.firstPaginationButton.setAttribute("disabled", "true");
    //             ref.previousPaginationButton.setAttribute("disabled", "true");
    //         } else {
    //             paginationButtonArray[currentPage - 1].classList.remove('shl-active');
    //             currentPage = textContent;
    //             pageNumber = currentPage;
    //             paginationButtonArray[currentPage - 1].classList.add('shl-active')
    //             renderBookListByPage(pageNumber, bookList);
    //         }; break;
    //     case 'shl-pagination-button-two':
    //         if (textContent === 2) {
    //             paginationButtonArray[currentPage - 1].classList.remove('shl-active');
    //             currentPage = 2;
    //             pageNumber = currentPage;
    //             paginationButtonArray[currentPage - 1].classList.add('shl-active');
    //             renderBookListByPage(pageNumber, bookList);
    //             ref.firstPaginationButton.removeAttribute("disabled");
    //             ref.previousPaginationButton.removeAttribute("disabled");
    //         } else {
    //             paginationButtonArray[currentPage - 1].classList.remove('shl-active');
    //             currentPage = textContent;
    //             pageNumber = currentPage;
    //             paginationButtonArray[currentPage - 1].classList.add('shl-active')
    //             renderBookListByPage(pageNumber, bookList);
    //         }; break;
    //     case 'shl-pagination-button-free':
    //         if (textContent === 3) {
    //             paginationButtonArray[currentPage - 1].classList.remove('shl-active');
    //             currentPage = 3;
    //             pageNumber = currentPage;
    //             paginationButtonArray[currentPage - 1].classList.add('shl-active');
    //             renderBookListByPage(pageNumber, bookList);
    //             ref.firstPaginationButton.removeAttribute("disabled");
    //             ref.previousPaginationButton.removeAttribute("disabled");
    //         } else {
    //             paginationButtonArray[currentPage - 1].classList.remove('shl-active');
    //             currentPage = textContent;
    //             pageNumber = currentPage;
    //             paginationButtonArray[currentPage - 1].classList.add('shl-active')
    //             renderBookListByPage(pageNumber, bookList);
    //         }; break;
    //      case 'shl-pagination-button-more':  
    // }
}
function onCardDeleteButtonClick(e) {
    let isCardDeleteButton = e.target.closest('.shl-card-delete-button');
      if (isCardDeleteButton) {
        const currentCardId = e.target.closest('.shl-book-card').dataset.id; 
        const cardToDelete = document.querySelector(`[data-id="${currentCardId}"]`);
          cardToDelete.remove();
          if (removeBookById(currentCardId, bookList)) {
               loadToLocalStorageNewBookList(bookList);
          };
          if (totalPageNumber > 1) {
              console.log(totalPageNumber);
              renderBookByIndex(2, bookList);
              console.log(bookList.length);
              showPaginationBlock();
              } else {if(bookList.length==0) {showStartPage()}}
          
    } else { return; }
}
function showPaginationBlock() {
    totalPageNumber = Math.ceil(bookList.length / 3);
    console.log(totalPageNumber);
    if (totalPageNumber > 1) {
        ref.paginationBlock.classList.remove('hide');
        ref.onePaginationButton.classList.add('shl-active');
        ref.firstPaginationButton.setAttribute("disabled", "true");
        ref.previousPaginationButton.setAttribute("disabled", "true");
        if (totalPageNumber === 2) {
            ref.freePaginationButton.classList.add('hide');
            ref.morePaginationButton.classList.add('hide');
        } else {
            if (totalPageNumber === 3) {
                ref.morePaginationButton.classList.add('hide');
            }
            else { if (totalPageNumber === 3) { ref.morePaginationButton.textContent('4'); } }
        }
    } else {
        if (ref.paginationBlock.classList.contains('hide')) { return; } else { ref.paginationBlock.classList.add('hide'); }
    }
}
function renderBookListByPage(pageNumber, books) {
    ref.placeForBookList.innerHTML = '';
    let j = pageNumber * 3 - 3;
    for (let i = 0; i <= 2; i += 1) { bookMarkupList.push(createBookMarkup(books[j])); j+=1}
    const markup = bookMarkupList.join('');
    ref.placeForBookList.insertAdjacentHTML('beforeend', markup);
    clearMarkupList();
   
}
function renderBookByIndex(index, books) {
    bookMarkupList.push(createBookMarkup(books[index])); 
    const markup = bookMarkupList.join('');
    ref.placeForBookList.insertAdjacentHTML('beforeend', markup);
    clearMarkupList();
}
function removeBookById(id, books) {
    const index = books.findIndex(book => book._id === id); 
    console.log(index);
    if (index !== -1) {
        books.splice(index, 1);
        bookList = books;
        console.log('ok');
        return true; 
    } else { console.log('fault'); return false;}
   
}
function loadToLocalStorageNewBookList(books) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(books));

}

 function createBookMarkup(book) {
     const {_id, book_image, description, author, list_name, title, amazon_product_url, buy_links } = book;
         const appleLink = buy_links[1] ? buy_links[1].url : '';
     return `<li class="shl-book-card" data-id="${_id}">
           <img class="shl-book-image" src="${book_image}"  alt=""> 
           <div class="shl-book-data">
            <ul class="shl-book-features">
              <li class="shl-book-card-features">
                <div class="shl-bookname-category">
                  <h4 class="shl-book-title">${title}</h4>
                  <p class="shl-book-category">${list_name}</p>
              </div>
              <button class="shl-card-delete-button" type="button">
                <img src="../img/Shopping_list/trash-03.svg" alt="SVG Image">
                    </button>
              </li>
              <li class="shl-book-card-features"><p class="shl-book-description">${description}</p>
              </li>
              <li class="shl-book-card-features">
                <p class="shl-book-author">${author}</p>
                <div class="shl-buy-links">
                  <a class="shl-amazon-link" href="${amazon_product_url}"></a>
                  <a class="shl-apple-link" href="${appleLink}"></a>
                </div>
              </li>
             </ul>
           </div>
          </li>`;
}


