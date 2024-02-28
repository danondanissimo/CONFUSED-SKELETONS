'use strict';
import sprite from '../img/Shopping_list/icon_delete_sprite.svg';

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
let pageToShow = 0;
let pageBeforeMoreButton = 0;
let btcValue = 0;
let checkEvent = false;
const bookPerPage = window.innerWidth > 768 ? 3 : 4;
const viewPortLess768 = window.innerWidth < 768 ? true : false;
const paginationButtonArray = [ref.onePaginationButton, ref.twoPaginationButton, ref.freePaginationButton, ref.morePaginationButton];
const paginationButtonArray2 = [ref.onePaginationButton, ref.freePaginationButton, ref.morePaginationButton];
const indexOfPaginationMoreButton = paginationButtonArray.findIndex(button => button === ref.morePaginationButton);
let  currentIndex = 0;



function getIndexOfActivePaginationButton(array) {
  const  indexb= array.findIndex(button => button.classList.contains('shl-active'));
    return indexb;
};



function clearMarkupList() { 
    bookMarkupList = [];
};

function getBookListFromLocalStorage(STORAGE_KEY) {
    
    const bookData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
    if (bookData && bookData.length > 0) {
        bookList = bookData;
           return bookList;
         } 
};
function showStartPage() {
    if (bookList.length > 0) { 
        ref.onEmptyLocalStorageField.classList.add('hide'); 
        renderBookListByPage(pageNumber,bookPerPage, bookList);
        showPaginationBlock();
         } else { ref.onEmptyLocalStorageField.classList.remove('hide'); }
};
getBookListFromLocalStorage(STORAGE_KEY);
showStartPage();


ref.placeForBookList.addEventListener('click', onCardDeleteButtonClick);
ref.paginationBlock.addEventListener('click', onPaginationButtonClick);
function onPaginationButtonClick(e) {
    checkEvent = true;
    const classList = e.target.classList[0];
    
    const textContent = parseInt(e.target.textContent, 10);
    if (!viewPortLess768) {
      
        switch (classList) {
            case 'shl-pagination-button-first':
            
                paginationButtonArray[getIndexOfActivePaginationButton(paginationButtonArray)].classList.remove('shl-active');
                currentPage = 1;
                pageNumber = 1;
                renderBookListByPage(pageNumber, bookPerPage, bookList);
                ref.firstPaginationButton.setAttribute("disabled", "true");
                ref.previousPaginationButton.setAttribute("disabled", "true");
                paginationButtonArray[0].classList.add('shl-active');
                ref.nextPaginationButton.removeAttribute("disabled");
                ref.lastPaginationButton.removeAttribute("disabled");
                paginationButtonArray[indexOfPaginationMoreButton - 3].textContent = currentPage;
                paginationButtonArray[indexOfPaginationMoreButton - 1].textContent = currentPage + 2;
               
                paginationButtonArray[indexOfPaginationMoreButton - 2].textContent = currentPage + 1;
                paginationButtonArray[indexOfPaginationMoreButton].textContent = '...';
           
                break;
            case 'shl-pagination-button-previous':
                currentIndex = getIndexOfActivePaginationButton(paginationButtonArray);
                if (paginationButtonArray[indexOfPaginationMoreButton - 3].textContent == '...') {
                    
                    pageToShow = parseInt(paginationButtonArray[indexOfPaginationMoreButton - 2].textContent, 10) - 1;
                   
                    if (pageToShow >= 2) {
                        currentPage = currentPage - 1;
                        pageNumber = currentPage;
                        renderBookListByPage(pageNumber, bookPerPage, bookList);
                        if (currentIndex > 1) {
                            paginationButtonArray[currentIndex].classList.remove('shl-active');
                            paginationButtonArray[currentIndex - 1].classList.add('shl-active');
                        
                        }
                        else {
                            paginationButtonArray[currentIndex].textContent = currentPage;
                            paginationButtonArray[currentIndex + 1].textContent = currentPage + 1;
                            paginationButtonArray[currentIndex + 2].textContent = '...';
                            ref.nextPaginationButton.removeAttribute("disabled");
                            ref.lastPaginationButton.removeAttribute("disabled");
                        }
                    }
                    else {
                        currentPage = 1;
                        pageNumber = currentPage;
                        paginationButtonArray[indexOfPaginationMoreButton - 3].textContent = currentPage;
                        paginationButtonArray[currentIndex].classList.remove('shl-active');
                        paginationButtonArray[indexOfPaginationMoreButton - 3].classList.add('shl-active');
                        renderBookListByPage(pageNumber, bookPerPage, bookList);
                        ref.firstPaginationButton.setAttribute("disabled", "true");
                        ref.previousPaginationButton.setAttribute("disabled", "true");
                        ref.nextPaginationButton.removeAttribute("disabled");
                        ref.lastPaginationButton.removeAttribute("disabled");
                    }
                        
                } else {
                    currentPage = currentPage - 1;
                    pageNumber = currentPage;
                    renderBookListByPage(pageNumber, bookPerPage, bookList);
                    paginationButtonArray[currentIndex].classList.remove('shl-active');
                    paginationButtonArray[currentIndex - 1].classList.add('shl-active');
                    if (currentIndex - 1 === 0) {
                        ref.firstPaginationButton.setAttribute("disabled", "true");
                        ref.previousPaginationButton.setAttribute("disabled", "true");
                       
                    }
                }
                
                ;
                break;
            case 'shl-pagination-button-one':
                currentIndex = getIndexOfActivePaginationButton(paginationButtonArray);
                if (!paginationButtonArray.length === totalPageNumber) {
                    paginationButtonArray[indexOfPaginationMoreButton].textContent = '...';
                }
                if (textContent === 1) {
                    currentPage = 1;
                    pageNumber = currentPage;
                    paginationButtonArray[currentIndex].classList.remove('shl-active');
                    paginationButtonArray[currentPage - 1].classList.add('shl-active');
                    renderBookListByPage(pageNumber, bookPerPage, bookList);
                    ref.firstPaginationButton.setAttribute("disabled", "true");
                    ref.previousPaginationButton.setAttribute("disabled", "true");
                }
                else {
                    btcValue = parseInt(paginationButtonArray[indexOfPaginationMoreButton - 2].textContent, 10);
                    pageToShow = btcValue - 1;
                    if (pageToShow > 2) {
                        paginationButtonArray[indexOfPaginationMoreButton - 2].textContent = btcValue - 2;
                        paginationButtonArray[indexOfPaginationMoreButton - 1].textContent = btcValue - 1;
                        currentPage = parseInt(paginationButtonArray[indexOfPaginationMoreButton - 1].textContent, 10);
                        paginationButtonArray[currentIndex].classList.remove('shl-active');
                        paginationButtonArray[indexOfPaginationMoreButton - 1].classList.add('shl-active');
                        pageNumber = currentPage;
                        renderBookListByPage(pageNumber, bookPerPage, bookList);
                        ref.nextPaginationButton.removeAttribute("disabled");
                        ref.lastPaginationButton.removeAttribute("disabled");
                    }
                    else {
                        if (pageToShow === 2) {
                            paginationButtonArray[indexOfPaginationMoreButton].textContent = '...';
                            paginationButtonArray[indexOfPaginationMoreButton - 2].textContent = btcValue - 1;
                            paginationButtonArray[indexOfPaginationMoreButton - 1].textContent = btcValue;
                            currentPage = parseInt(paginationButtonArray[indexOfPaginationMoreButton - 1].textContent, 10);
                            paginationButtonArray[currentIndex].classList.remove('shl-active');
                            paginationButtonArray[indexOfPaginationMoreButton - 1].classList.add('shl-active');
                            pageNumber = currentPage;
                            renderBookListByPage(pageNumber, bookPerPage, bookList);
                            paginationButtonArray[indexOfPaginationMoreButton - 3].textContent = 1;
                            ref.firstPaginationButton.setAttribute("disabled", "true");
                            ref.previousPaginationButton.setAttribute("disabled", "true");
                            ref.nextPaginationButton.removeAttribute("disabled");
                            ref.lastPaginationButton.removeAttribute("disabled");
                        } else {
                            currentPage = 1;
                            pageNumber = currentPage;
                            paginationButtonArray[indexOfPaginationMoreButton - 3].textContent = 1;
                            paginationButtonArray[currentIndex].classList.remove('shl-active');
                            paginationButtonArray[currentPage - 1].classList.add('shl-active');
                            renderBookListByPage(pageNumber, bookPerPage, bookList);
                            ref.firstPaginationButton.setAttribute("disabled", "true");
                            ref.previousPaginationButton.setAttribute("disabled", "true");
                            ref.nextPaginationButton.removeAttribute("disabled");
                            ref.lastPaginationButton.removeAttribute("disabled");
                        }
                    };
                }
                break;
            case 'shl-pagination-button-two':
                paginationButtonArray[getIndexOfActivePaginationButton(paginationButtonArray)].classList.remove('shl-active');
                currentPage = textContent;
                pageNumber = currentPage;
                paginationButtonArray[indexOfPaginationMoreButton - 2].classList.add('shl-active');
                renderBookListByPage(pageNumber, bookPerPage, bookList);
                break;
            case 'shl-pagination-button-free':
                paginationButtonArray[getIndexOfActivePaginationButton(paginationButtonArray)].classList.remove('shl-active');
                currentPage = textContent;
                pageNumber = currentPage;
                paginationButtonArray[indexOfPaginationMoreButton - 1].classList.add('shl-active');
                renderBookListByPage(pageNumber, bookPerPage, bookList);
                break;
            case 'shl-pagination-button-more':
                currentIndex = getIndexOfActivePaginationButton(paginationButtonArray);
              

                if (!paginationButtonArray.length === totalPageNumber) {
                    paginationButtonArray[indexOfPaginationMoreButton - 3].textContent = '...';
                }
                if (paginationButtonArray[indexOfPaginationMoreButton].textContent == '...') {
                    pageBeforeMoreButton = parseInt(paginationButtonArray[indexOfPaginationMoreButton - 1].textContent, 10);
                    pageToShow = totalPageNumber - pageBeforeMoreButton;
                   
                    if (pageToShow > 2) {
                        paginationButtonArray[indexOfPaginationMoreButton - 1].textContent = pageBeforeMoreButton + 2;
                        paginationButtonArray[indexOfPaginationMoreButton - 2].textContent = pageBeforeMoreButton + 1;
                        currentPage = parseInt(paginationButtonArray[indexOfPaginationMoreButton - 2].textContent, 10);
                        paginationButtonArray[currentIndex].classList.remove('shl-active');
                        paginationButtonArray[indexOfPaginationMoreButton - 2].classList.add('shl-active');
                        pageNumber = currentPage;
                        renderBookListByPage(pageNumber, bookPerPage, bookList);
                        ref.firstPaginationButton.removeAttribute("disabled");
                        ref.previousPaginationButton.removeAttribute("disabled");
                   
                    } else {
                        if (pageToShow === 2) {
                            paginationButtonArray[indexOfPaginationMoreButton - 3].textContent = '...';
                            paginationButtonArray[indexOfPaginationMoreButton - 1].textContent = pageBeforeMoreButton + 1;
                            paginationButtonArray[indexOfPaginationMoreButton - 2].textContent = pageBeforeMoreButton;
                            currentPage = parseInt(paginationButtonArray[indexOfPaginationMoreButton - 2].textContent, 10);
                            paginationButtonArray[currentIndex].classList.remove('shl-active');
                            paginationButtonArray[indexOfPaginationMoreButton - 2].classList.add('shl-active');
                            pageNumber = currentPage;
                            renderBookListByPage(pageNumber, bookPerPage, bookList);
                            paginationButtonArray[indexOfPaginationMoreButton].textContent = totalPageNumber;
                            ref.nextPaginationButton.setAttribute("disabled", "true");
                            ref.lastPaginationButton.setAttribute("disabled", "true");
                            ref.firstPaginationButton.removeAttribute("disabled");
                            ref.previousPaginationButton.removeAttribute("disabled");
                        } else {
                            currentPage = totalPageNumber;
                            pageNumber = currentPage;
                            paginationButtonArray[indexOfPaginationMoreButton].textContent = totalPageNumber;
                            paginationButtonArray[currentIndex].classList.remove('shl-active');
                            paginationButtonArray[indexOfPaginationMoreButton].classList.add('shl-active');
                            renderBookListByPage(pageNumber, bookPerPage, bookList);
                            ref.nextPaginationButton.setAttribute("disabled", "true");
                            ref.lastPaginationButton.setAttribute("disabled", "true");
                            if (!paginationButtonArray.length === totalPageNumber) {
                                ref.firstPaginationButton.removeAttribute("disabled");
                                ref.previousPaginationButton.removeAttribute("disabled");
                            }
                        }
                    };
                } else {
                    paginationButtonArray[currentIndex].classList.remove('shl-active');
                    currentPage = totalPageNumber;
                    pageNumber = currentPage;
                    renderBookListByPage(pageNumber, bookPerPage, bookList);
                    ref.nextPaginationButton.setAttribute("disabled", "true");
                    ref.lastPaginationButton.setAttribute("disabled", "true");
                    paginationButtonArray[indexOfPaginationMoreButton].classList.add('shl-active');
                    if (!paginationButtonArray.length === totalPageNumber) {
                        ref.firstPaginationButton.removeAttribute("disabled");
                        ref.previousPaginationButton.removeAttribute("disabled");
                    }
                    
                }
            
                break;
            case 'shl-pagination-button-next':
                currentIndex = getIndexOfActivePaginationButton(paginationButtonArray);
                if (paginationButtonArray[indexOfPaginationMoreButton].textContent == '...') {
                    pageBeforeMoreButton = parseInt(paginationButtonArray[indexOfPaginationMoreButton - 1].textContent, 10);
                    pageToShow = totalPageNumber - currentPage;
                    if (pageToShow >= 2) {
                        currentPage = currentPage + 1;
                        pageNumber = currentPage;
                        renderBookListByPage(pageNumber, bookPerPage, bookList);
                        if (currentIndex < 2) {
                            paginationButtonArray[currentIndex].classList.remove('shl-active');
                            paginationButtonArray[currentIndex + 1].classList.add('shl-active');
                        } else {
                            paginationButtonArray[currentIndex].textContent = currentPage;
                            paginationButtonArray[currentIndex - 1].textContent = currentPage - 1;

                            ref.firstPaginationButton.removeAttribute("disabled");
                            ref.previousPaginationButton.removeAttribute("disabled");
                            paginationButtonArray[indexOfPaginationMoreButton - 3].textContent = '...';
                        }
                    }
                    else {
                        currentPage = totalPageNumber;
                        pageNumber = currentPage;
                        renderBookListByPage(pageNumber, bookPerPage, bookList);
                        ref.nextPaginationButton.setAttribute("disabled", "true");
                        ref.lastPaginationButton.setAttribute("disabled", "true");
                        paginationButtonArray[currentIndex].classList.remove('shl-active');
                        paginationButtonArray[indexOfPaginationMoreButton].textContent = currentPage;
                        paginationButtonArray[indexOfPaginationMoreButton].classList.add('shl-active');
                    
                    }
                }
                break;
            case 'shl-pagination-button-last':
                paginationButtonArray[getIndexOfActivePaginationButton(paginationButtonArray)].classList.remove('shl-active');
                currentPage = totalPageNumber;
                pageNumber = currentPage;
                ref.nextPaginationButton.setAttribute("disabled", "true");
                ref.lastPaginationButton.setAttribute("disabled", "true");
                paginationButtonArray[indexOfPaginationMoreButton].textContent = currentPage;
                paginationButtonArray[indexOfPaginationMoreButton].classList.add('shl-active');
                renderBookListByPage(pageNumber, bookPerPage, bookList);
                paginationButtonArray[indexOfPaginationMoreButton - 1].textContent = currentPage - 1;
                paginationButtonArray[indexOfPaginationMoreButton - 2].textContent = currentPage - 2;
                paginationButtonArray[indexOfPaginationMoreButton - 3].textContent = '...';
                ref.firstPaginationButton.removeAttribute("disabled");
                ref.previousPaginationButton.removeAttribute("disabled");
                break;
        
        }
    } 
    else {
        
        switch (classList) {
            case 'shl-pagination-button-first':
            
                paginationButtonArray2[getIndexOfActivePaginationButton(paginationButtonArray2)].classList.remove('shl-active');
                currentPage = 1;
                pageNumber = 1;
                renderBookListByPage(pageNumber, bookPerPage, bookList);
                ref.firstPaginationButton.setAttribute("disabled", "true");
                ref.previousPaginationButton.setAttribute("disabled", "true");
                paginationButtonArray2[0].classList.add('shl-active');
                ref.nextPaginationButton.removeAttribute("disabled");
                ref.lastPaginationButton.removeAttribute("disabled");
                paginationButtonArray2[0].textContent = currentPage;
                paginationButtonArray2[1].textContent = currentPage + 1;
                paginationButtonArray2[2].textContent = '...';
           
                break;
            case 'shl-pagination-button-previous':
                currentIndex = getIndexOfActivePaginationButton(paginationButtonArray2);
                if (paginationButtonArray2[0].textContent == '...') {
                    
                    pageToShow = parseInt(paginationButtonArray2[1].textContent, 10) - 1;
                   
                    if (pageToShow >= 2) {
                        currentPage = currentPage - 1;
                        pageNumber = currentPage;
                        renderBookListByPage(pageNumber, bookPerPage, bookList);
                        if (currentIndex > 1) {
                            paginationButtonArray2[1].textContent = currentPage;
                            paginationButtonArray2[currentIndex].classList.remove('shl-active');
                            paginationButtonArray2[1].classList.add('shl-active');
                            paginationButtonArray2[2].textContent = '...';
                            ref.nextPaginationButton.removeAttribute("disabled");
                            ref.lastPaginationButton.removeAttribute("disabled");
                        }
                        else {
                            paginationButtonArray2[1].textContent = currentPage;
                            
                        }
                    }
                    else {
                        currentPage = 1;
                        pageNumber = currentPage;
                        paginationButtonArray2[0].textContent = currentPage;
                        paginationButtonArray2[currentIndex].classList.remove('shl-active');
                        paginationButtonArray2[0].classList.add('shl-active');
                        renderBookListByPage(pageNumber, bookPerPage, bookList);
                        ref.firstPaginationButton.setAttribute("disabled", "true");
                        ref.previousPaginationButton.setAttribute("disabled", "true");
                        ref.nextPaginationButton.removeAttribute("disabled");
                        ref.lastPaginationButton.removeAttribute("disabled");
                    }
                        
                } else {
                    currentPage = currentPage - 1;
                    pageNumber = currentPage;
                    renderBookListByPage(pageNumber, bookPerPage, bookList);
                     paginationButtonArray2[currentIndex].classList.remove('shl-active');
                    paginationButtonArray2[currentIndex-1].classList.add('shl-active'); 
                    if (currentIndex-1 === 0) { ref.firstPaginationButton.setAttribute("disabled", "true");
                        ref.previousPaginationButton.setAttribute("disabled", "true");
                       
                    } 
                }
                ;
                break;
            case 'shl-pagination-button-one':
                currentIndex = getIndexOfActivePaginationButton(paginationButtonArray2);
                if (!paginationButtonArray2.length === totalPageNumber) {
                    paginationButtonArray2[2].textContent = '...';
                }
                if (textContent === 1) {
                    currentPage = 1;
                    pageNumber = currentPage;
                    paginationButtonArray2[currentIndex].classList.remove('shl-active');
                    paginationButtonArray2[0].classList.add('shl-active');
                    renderBookListByPage(pageNumber, bookPerPage, bookList);
                    ref.firstPaginationButton.setAttribute("disabled", "true");
                    ref.previousPaginationButton.setAttribute("disabled", "true");
                }
                else {
                    btcValue = parseInt(paginationButtonArray2[1].textContent, 10);
                    pageToShow = btcValue - 1;
                    if (pageToShow >= 2) {
                        paginationButtonArray2[1].textContent = btcValue - 1;
                        currentPage = parseInt(paginationButtonArray2[1].textContent, 10);
                        paginationButtonArray2[currentIndex].classList.remove('shl-active');
                        paginationButtonArray2[1].classList.add('shl-active');
                        pageNumber = currentPage;
                        renderBookListByPage(pageNumber, bookPerPage, bookList);
                        ref.nextPaginationButton.removeAttribute("disabled");
                        ref.lastPaginationButton.removeAttribute("disabled");
                    }
                    else {
                            currentPage = 1;
                            pageNumber = currentPage;
                            paginationButtonArray2[0].textContent = 1;
                            paginationButtonArray2[currentIndex].classList.remove('shl-active');
                            paginationButtonArray2[0].classList.add('shl-active');
                            renderBookListByPage(pageNumber, bookPerPage, bookList);
                            ref.firstPaginationButton.setAttribute("disabled", "true");
                            ref.previousPaginationButton.setAttribute("disabled", "true");
                            ref.nextPaginationButton.removeAttribute("disabled");
                            ref.lastPaginationButton.removeAttribute("disabled");
                        }
                    
                }
                break;
            case 'shl-pagination-button-free':
                paginationButtonArray2[getIndexOfActivePaginationButton(paginationButtonArray2)].classList.remove('shl-active');
                currentPage = textContent;
                pageNumber = currentPage;
                paginationButtonArray2[1].classList.add('shl-active');
                renderBookListByPage(pageNumber, bookPerPage, bookList);
                break;
            case 'shl-pagination-button-more':
                currentIndex = getIndexOfActivePaginationButton(paginationButtonArray2);
                 if (!paginationButtonArray2.length === totalPageNumber) {
                    paginationButtonArray2[0].textContent = '...';
                }
                if (paginationButtonArray2[2].textContent == '...') {
                    pageBeforeMoreButton = parseInt(paginationButtonArray2[1].textContent, 10);
                    pageToShow = totalPageNumber - pageBeforeMoreButton;
                      if (pageToShow >= 2) {
                        paginationButtonArray2[1].textContent = pageBeforeMoreButton + 1;
                        currentPage = parseInt(paginationButtonArray2[1].textContent, 10);
                        pageNumber = currentPage;
                        renderBookListByPage(pageNumber, bookPerPage, bookList);
                        paginationButtonArray2[0].textContent = '...';
                        ref.firstPaginationButton.removeAttribute("disabled");
                        ref.previousPaginationButton.removeAttribute("disabled");
                        if (!currentIndex === 1) {
                            paginationButtonArray2[currentIndex].classList.remove('shl-active');
                            paginationButtonArray2[1].classList.add('shl-active');
                        }
                                          
                    }
                     else {
                            currentPage = totalPageNumber;
                            pageNumber = currentPage;
                            paginationButtonArray2[2].textContent = totalPageNumber;
                            paginationButtonArray2[currentIndex].classList.remove('shl-active');
                            paginationButtonArray2[2].classList.add('shl-active');
                            renderBookListByPage(pageNumber, bookPerPage, bookList);
                            ref.nextPaginationButton.setAttribute("disabled", "true");
                            ref.lastPaginationButton.setAttribute("disabled", "true");
                            if (!paginationButtonArray2.length === totalPageNumber) {
                                ref.firstPaginationButton.removeAttribute("disabled");
                                ref.previousPaginationButton.removeAttribute("disabled");
                            }
                        }
                   
                } else {
                    paginationButtonArray2[currentIndex].classList.remove('shl-active');
                    currentPage = totalPageNumber;
                    pageNumber = currentPage;
                    renderBookListByPage(pageNumber, bookPerPage, bookList);
                    ref.nextPaginationButton.setAttribute("disabled", "true");
                    ref.lastPaginationButton.setAttribute("disabled", "true");
                    paginationButtonArray2[2].classList.add('shl-active');
                    if (!paginationButtonArray.length === totalPageNumber) {
                        ref.firstPaginationButton.removeAttribute("disabled");
                        ref.previousPaginationButton.removeAttribute("disabled");
                    }
                    
                }
            
                break;
            case 'shl-pagination-button-next':
                currentIndex = getIndexOfActivePaginationButton(paginationButtonArray2);
                if (paginationButtonArray2[2].textContent == '...') {
                    pageBeforeMoreButton = parseInt(paginationButtonArray2[1].textContent, 10);
                    pageToShow = totalPageNumber - currentPage;
                    if (pageToShow >= 2) {
                        currentPage = currentPage + 1;
                        pageNumber = currentPage;
                        renderBookListByPage(pageNumber, bookPerPage, bookList);
                        if (currentIndex < 1) {
                            paginationButtonArray2[currentIndex].classList.remove('shl-active');
                            paginationButtonArray2[1].classList.add('shl-active');
                            paginationButtonArray2[currentIndex].textContent = currentPage;
                            paginationButtonArray2[0].textContent = '...';
                        } else {
                            paginationButtonArray2[currentIndex].textContent = currentPage;
                            ref.firstPaginationButton.removeAttribute("disabled");
                            ref.previousPaginationButton.removeAttribute("disabled");
                             }
                    }
                    else {
                        currentPage = totalPageNumber;
                        pageNumber = currentPage;
                        renderBookListByPage(pageNumber, bookPerPage, bookList);
                        ref.nextPaginationButton.setAttribute("disabled", "true");
                        ref.lastPaginationButton.setAttribute("disabled", "true");
                        paginationButtonArray2[currentIndex].classList.remove('shl-active');
                        paginationButtonArray2[2].textContent = currentPage;
                        paginationButtonArray2[2].classList.add('shl-active');
                    
                    }
                }
                break;
            case 'shl-pagination-button-last':
                paginationButtonArray2[getIndexOfActivePaginationButton(paginationButtonArray2)].classList.remove('shl-active');
                currentPage = totalPageNumber;
                pageNumber = currentPage;
                ref.nextPaginationButton.setAttribute("disabled", "true");
                ref.lastPaginationButton.setAttribute("disabled", "true");
                paginationButtonArray2[2].textContent = currentPage;
                paginationButtonArray2[2].classList.add('shl-active');
                renderBookListByPage(pageNumber, bookPerPage, bookList);
                paginationButtonArray2[1].textContent = currentPage - 1;
                paginationButtonArray2[0].textContent = '...';
                ref.firstPaginationButton.removeAttribute("disabled");
                ref.previousPaginationButton.removeAttribute("disabled");
                break;
        
        }
    }
   
};

function onCardDeleteButtonClick(e) {
    checkEvent = true;
    let isCardDeleteButton = e.target.closest('.shl-card-delete-button');
      if (isCardDeleteButton) {
        const currentCardId = e.target.closest('.shl-book-card').dataset.id; 
        const cardToDelete = document.querySelector(`[data-id="${currentCardId}"]`);
          cardToDelete.remove();
          if (removeBookById(currentCardId, bookList)) {
               loadToLocalStorageNewBookList(bookList);
          };

          if (totalPageNumber > 1) {
              if (currentPage === totalPageNumber)
              {
                  const renderedBookcardsOnPage = document.getElementsByClassName('shl-book-card').length;
                  if (renderedBookcardsOnPage === 0) {
                      currentPage = currentPage - 1;
                      renderBookListByPage(currentPage, bookPerPage, bookList)
                  }      
                  
                  showPaginationBlock(); 
                  
              }
              else {
                  renderBookByIndex(bookPerPage - 1, bookList);
                  showPaginationBlock();
                  
              }
              } else {if(bookList.length==0) {showStartPage()}}
          
    } else { return; }
}
function showPaginationBlock() {
    ref.firstPaginationButton.textContent = '<<';
    ref.previousPaginationButton.textContent = '<';
    ref.lastPaginationButton.textContent = '>>';
    ref.nextPaginationButton.textContent = '>';
    totalPageNumber = Math.ceil(bookList.length / bookPerPage);
     if (totalPageNumber > 1) {
         ref.paginationBlock.classList.remove('hide');
         if (!checkEvent) {
             ref.onePaginationButton.classList.add('shl-active');
             ref.firstPaginationButton.setAttribute("disabled", "true");
             ref.previousPaginationButton.setAttribute("disabled", "true");
             if (viewPortLess768) {
                 ref.twoPaginationButton.classList.add('hide');
                 ref.freePaginationButton.textContent = 2;}
         }
     }
     else {
         if (ref.paginationBlock.classList.contains('hide')) { return; }
         else { ref.paginationBlock.classList.add('hide'); }
    }
    if (viewPortLess768) {
        if (totalPageNumber <= paginationButtonArray2.length) {
            ref.lastPaginationButton.setAttribute("disabled", "true");
            ref.nextPaginationButton.setAttribute("disabled", "true");
        }
        if (totalPageNumber === 3) {
            paginationButtonArray2[2].textContent = 3;
            paginationButtonArray2[1].textContent = 2;
            paginationButtonArray2[0].textContent = 1;
                    
        }
       if (totalPageNumber === 2) {
            paginationButtonArray2[2].setAttribute("disabled", "true");
            paginationButtonArray2[1].textContent = 2;
            paginationButtonArray2[0].textContent = 1;
           currentIndex = getIndexOfActivePaginationButton(paginationButtonArray2);
           if (currentIndex === 2) {
               paginationButtonArray2[2].classList.remove('shl-active');
               paginationButtonArray2[1].classList.add('shl-active');
           }
        }
     
    }
    else {
        if (totalPageNumber <= paginationButtonArray.length) {
            ref.lastPaginationButton.setAttribute("disabled", "true");
            ref.nextPaginationButton.setAttribute("disabled", "true");
        }
    if (totalPageNumber === 4) {
            paginationButtonArray[3].textContent = 4;
            paginationButtonArray[2].textContent = 3;
            paginationButtonArray[1].textContent = 2;
            paginationButtonArray[0].textContent = 1;        
        }
       if (totalPageNumber === 3) {
           paginationButtonArray[3].setAttribute("disabled", "true");
           paginationButtonArray[2].textContent = 3;
            paginationButtonArray[1].textContent = 2;
            paginationButtonArray[0].textContent = 1;
           currentIndex = getIndexOfActivePaginationButton(paginationButtonArray);
           if (currentIndex === 3) {
               paginationButtonArray[3].classList.remove('shl-active');
               paginationButtonArray[2].classList.add('shl-active');
           }
        }
     if (totalPageNumber === 2) {
           paginationButtonArray[3].setAttribute("disabled", "true");
           paginationButtonArray[2].setAttribute("disabled", "true");
            paginationButtonArray[1].textContent = 2;
            paginationButtonArray[0].textContent = 1;
           currentIndex = getIndexOfActivePaginationButton(paginationButtonArray);
           if (currentIndex === 2) {
               paginationButtonArray[2].classList.remove('shl-active');
               paginationButtonArray[1].classList.add('shl-active');
           }
        }
    
    
    
    
    }
    

}
function renderBookListByPage(pageNumber, bookPerPage, books) {
    const totalNumberOfBoks = books.length;
    let y = 0;
    const booksToRender = totalNumberOfBoks - (pageNumber - 1) * bookPerPage;
    if (booksToRender >= bookPerPage) {  y= bookPerPage - 1; } else { y = booksToRender - 1; }
    ref.placeForBookList.innerHTML = '';
    let j = pageNumber * bookPerPage - bookPerPage;
    for (let i = 0; i <= y; i += 1) { bookMarkupList.push(createBookMarkup(books[j])); j+=1}
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
           <img class="shl-book-image" src="${book_image}"  alt="Book cover picture for ${title}"> 
           <div class="shl-book-data">
            <ul class="shl-book-features">
              <li class="shl-book-card-features">
                <div class="shl-bookname-category">
                  <h4 class="shl-book-title">${title}</h4>
                  <p class="shl-book-category">${list_name}</p>
              </div>
              <button class="shl-card-delete-button" type="button">
                <svg class="shl-delete-icon" >
                        <use href="${sprite}#icon-trash-03"></use>
                      </svg>
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


