import"./assets/footer-5e17d3ce.js";import"./assets/vendor-b619ac7a.js";let t={placeForBookList:document.querySelector(".shl-books-list"),onEmptyLocalStorageField:document.querySelector(".no-books-in-local-storage"),paginationBlock:document.querySelector(".shl-pagination-block"),firstPaginationButton:document.querySelector(".shl-pagination-button-first"),previousPaginationButton:document.querySelector(".shl-pagination-button-previous"),onePaginationButton:document.querySelector(".shl-pagination-button-one"),twoPaginationButton:document.querySelector(".shl-pagination-button-two"),freePaginationButton:document.querySelector(".shl-pagination-button-free"),morePaginationButton:document.querySelector(".shl-pagination-button-more"),nextPaginationButton:document.querySelector(".shl-pagination-button-next"),lastPaginationButton:document.querySelector(".shl-pagination-button-last")},l=[],p=[];const S="shopping-list";let a=1,i=1,u=0,v=0,B=0,x=0,I=!1;const r=window.innerWidth>768?3:4,k=window.innerWidth<768,e=[t.onePaginationButton,t.twoPaginationButton,t.freePaginationButton,t.morePaginationButton],n=[t.onePaginationButton,t.freePaginationButton,t.morePaginationButton],o=e.findIndex(c=>c===t.morePaginationButton);let s=0;function h(c){return c.findIndex(g=>g.classList.contains("shl-active"))}function w(){p=[]}function F(c){const b=JSON.parse(localStorage.getItem(c));if(b&&b.length>0)return l=b,l}function q(){l.length>0?(t.onEmptyLocalStorageField.classList.add("hide"),d(a,r,l),y()):t.onEmptyLocalStorageField.classList.remove("hide")}F(S);q();t.placeForBookList.addEventListener("click",T);t.paginationBlock.addEventListener("click",M);function M(c){I=!0;const b=c.target.classList[0],g=parseInt(c.target.textContent,10);if(k)switch(b){case"shl-pagination-button-first":n[h(n)].classList.remove("shl-active"),i=1,a=1,d(a,r,l),t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true"),n[0].classList.add("shl-active"),t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled"),n[0].textContent=i,n[1].textContent=i+1,n[2].textContent="...";break;case"shl-pagination-button-previous":s=h(n),n[0].textContent=="..."?(v=parseInt(n[1].textContent,10)-1,v>=2?(i=i-1,a=i,d(a,r,l),s>1?(n[1].textContent=i,n[s].classList.remove("shl-active"),n[1].classList.add("shl-active"),n[2].textContent="...",t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled")):n[1].textContent=i):(i=1,a=i,n[0].textContent=i,n[s].classList.remove("shl-active"),n[0].classList.add("shl-active"),d(a,r,l),t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true"),t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled"))):(i=i-1,a=i,d(a,r,l),n[s].classList.remove("shl-active"),n[s-1].classList.add("shl-active"),s-1===0&&(t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true")));break;case"shl-pagination-button-one":s=h(n),!n.length===u&&(n[2].textContent="..."),g===1?(i=1,a=i,n[s].classList.remove("shl-active"),n[0].classList.add("shl-active"),d(a,r,l),t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true")):(x=parseInt(n[1].textContent,10),v=x-1,v>=2?(n[1].textContent=x-1,i=parseInt(n[1].textContent,10),n[s].classList.remove("shl-active"),n[1].classList.add("shl-active"),a=i,d(a,r,l),t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled")):(i=1,a=i,n[0].textContent=1,n[s].classList.remove("shl-active"),n[0].classList.add("shl-active"),d(a,r,l),t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true"),t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled")));break;case"shl-pagination-button-free":n[h(n)].classList.remove("shl-active"),i=g,a=i,n[1].classList.add("shl-active"),d(a,r,l);break;case"shl-pagination-button-more":s=h(n),!n.length===u&&(n[0].textContent="..."),n[2].textContent=="..."?(B=parseInt(n[1].textContent,10),v=u-B,v>=2?(n[1].textContent=B+1,i=parseInt(n[1].textContent,10),a=i,d(a,r,l),n[0].textContent="...",t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled"),!s===1&&(n[s].classList.remove("shl-active"),n[1].classList.add("shl-active"))):(i=u,a=i,n[2].textContent=u,n[s].classList.remove("shl-active"),n[2].classList.add("shl-active"),d(a,r,l),t.nextPaginationButton.setAttribute("disabled","true"),t.lastPaginationButton.setAttribute("disabled","true"),!n.length===u&&(t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled")))):(n[s].classList.remove("shl-active"),i=u,a=i,d(a,r,l),t.nextPaginationButton.setAttribute("disabled","true"),t.lastPaginationButton.setAttribute("disabled","true"),n[2].classList.add("shl-active"),!e.length===u&&(t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled")));break;case"shl-pagination-button-next":s=h(n),n[2].textContent=="..."&&(B=parseInt(n[1].textContent,10),v=u-i,v>=2?(i=i+1,a=i,d(a,r,l),s<1?(n[s].classList.remove("shl-active"),n[1].classList.add("shl-active"),n[s].textContent=i,n[0].textContent="..."):(n[s].textContent=i,t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled"))):(i=u,a=i,d(a,r,l),t.nextPaginationButton.setAttribute("disabled","true"),t.lastPaginationButton.setAttribute("disabled","true"),n[s].classList.remove("shl-active"),n[2].textContent=i,n[2].classList.add("shl-active")));break;case"shl-pagination-button-last":n[h(n)].classList.remove("shl-active"),i=u,a=i,t.nextPaginationButton.setAttribute("disabled","true"),t.lastPaginationButton.setAttribute("disabled","true"),n[2].textContent=i,n[2].classList.add("shl-active"),d(a,r,l),n[1].textContent=i-1,n[0].textContent="...",t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled");break}else switch(b){case"shl-pagination-button-first":e[h(e)].classList.remove("shl-active"),i=1,a=1,d(a,r,l),t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true"),e[0].classList.add("shl-active"),t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled"),e[o-3].textContent=i,e[o-1].textContent=i+2,e[o-2].textContent=i+1,e[o].textContent="...";break;case"shl-pagination-button-previous":s=h(e),e[o-3].textContent=="..."?(v=parseInt(e[o-2].textContent,10)-1,v>=2?(i=i-1,a=i,d(a,r,l),s>1?(e[s].classList.remove("shl-active"),e[s-1].classList.add("shl-active")):(e[s].textContent=i,e[s+1].textContent=i+1,e[s+2].textContent="...",t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled"))):(i=1,a=i,e[o-3].textContent=i,e[s].classList.remove("shl-active"),e[o-3].classList.add("shl-active"),d(a,r,l),t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true"),t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled"))):(i=i-1,a=i,d(a,r,l),e[s].classList.remove("shl-active"),e[s-1].classList.add("shl-active"),s-1===0&&(t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true")));break;case"shl-pagination-button-one":s=h(e),!e.length===u&&(e[o].textContent="..."),g===1?(i=1,a=i,e[s].classList.remove("shl-active"),e[i-1].classList.add("shl-active"),d(a,r,l),t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true")):(x=parseInt(e[o-2].textContent,10),v=x-1,v>2?(e[o-2].textContent=x-2,e[o-1].textContent=x-1,i=parseInt(e[o-1].textContent,10),e[s].classList.remove("shl-active"),e[o-1].classList.add("shl-active"),a=i,d(a,r,l),t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled")):v===2?(e[o].textContent="...",e[o-2].textContent=x-1,e[o-1].textContent=x,i=parseInt(e[o-1].textContent,10),e[s].classList.remove("shl-active"),e[o-1].classList.add("shl-active"),a=i,d(a,r,l),e[o-3].textContent=1,t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true"),t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled")):(i=1,a=i,e[o-3].textContent=1,e[s].classList.remove("shl-active"),e[i-1].classList.add("shl-active"),d(a,r,l),t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true"),t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled")));break;case"shl-pagination-button-two":e[h(e)].classList.remove("shl-active"),i=g,a=i,e[o-2].classList.add("shl-active"),d(a,r,l);break;case"shl-pagination-button-free":e[h(e)].classList.remove("shl-active"),i=g,a=i,e[o-1].classList.add("shl-active"),d(a,r,l);break;case"shl-pagination-button-more":s=h(e),!e.length===u&&(e[o-3].textContent="..."),e[o].textContent=="..."?(B=parseInt(e[o-1].textContent,10),v=u-B,v>2?(e[o-1].textContent=B+2,e[o-2].textContent=B+1,i=parseInt(e[o-2].textContent,10),e[s].classList.remove("shl-active"),e[o-2].classList.add("shl-active"),a=i,d(a,r,l),t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled")):v===2?(e[o-3].textContent="...",e[o-1].textContent=B+1,e[o-2].textContent=B,i=parseInt(e[o-2].textContent,10),e[s].classList.remove("shl-active"),e[o-2].classList.add("shl-active"),a=i,d(a,r,l),e[o].textContent=u,t.nextPaginationButton.setAttribute("disabled","true"),t.lastPaginationButton.setAttribute("disabled","true"),t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled")):(i=u,a=i,e[o].textContent=u,e[s].classList.remove("shl-active"),e[o].classList.add("shl-active"),d(a,r,l),t.nextPaginationButton.setAttribute("disabled","true"),t.lastPaginationButton.setAttribute("disabled","true"),!e.length===u&&(t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled")))):(e[s].classList.remove("shl-active"),i=u,a=i,d(a,r,l),t.nextPaginationButton.setAttribute("disabled","true"),t.lastPaginationButton.setAttribute("disabled","true"),e[o].classList.add("shl-active"),!e.length===u&&(t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled")));break;case"shl-pagination-button-next":s=h(e),e[o].textContent=="..."&&(B=parseInt(e[o-1].textContent,10),v=u-i,v>=2?(i=i+1,a=i,d(a,r,l),s<2?(e[s].classList.remove("shl-active"),e[s+1].classList.add("shl-active")):(e[s].textContent=i,e[s-1].textContent=i-1,t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled"),e[o-3].textContent="...")):(i=u,a=i,d(a,r,l),t.nextPaginationButton.setAttribute("disabled","true"),t.lastPaginationButton.setAttribute("disabled","true"),e[s].classList.remove("shl-active"),e[o].textContent=i,e[o].classList.add("shl-active")));break;case"shl-pagination-button-last":e[h(e)].classList.remove("shl-active"),i=u,a=i,t.nextPaginationButton.setAttribute("disabled","true"),t.lastPaginationButton.setAttribute("disabled","true"),e[o].textContent=i,e[o].classList.add("shl-active"),d(a,r,l),e[o-1].textContent=i-1,e[o-2].textContent=i-2,e[o-3].textContent="...",t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled");break}}function T(c){if(I=!0,c.target.closest(".shl-card-delete-button")){const g=c.target.closest(".shl-book-card").dataset.id;document.querySelector(`[data-id="${g}"]`).remove(),O(g,l)&&D(l),u>1?i===u?(document.getElementsByClassName("shl-book-card").length===0&&(i=i-1,d(i,r,l)),y()):($(r-1,l),y()):l.length==0&&q()}else return}function y(){if(t.firstPaginationButton.textContent="<<",t.previousPaginationButton.textContent="<",t.lastPaginationButton.textContent=">>",t.nextPaginationButton.textContent=">",u=Math.ceil(l.length/r),u>1)t.paginationBlock.classList.remove("hide"),I||(t.onePaginationButton.classList.add("shl-active"),t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true"),k&&(t.twoPaginationButton.classList.add("hide"),t.freePaginationButton.textContent=2));else{if(t.paginationBlock.classList.contains("hide"))return;t.paginationBlock.classList.add("hide")}k?(u<=n.length&&(t.lastPaginationButton.setAttribute("disabled","true"),t.nextPaginationButton.setAttribute("disabled","true")),u===3&&(n[2].textContent=3,n[1].textContent=2,n[0].textContent=1),u===2&&(n[2].setAttribute("disabled","true"),n[1].textContent=2,n[0].textContent=1,s=h(n),s===2&&(n[2].classList.remove("shl-active"),n[1].classList.add("shl-active")))):(u<=e.length&&(t.lastPaginationButton.setAttribute("disabled","true"),t.nextPaginationButton.setAttribute("disabled","true")),u===4&&(e[3].textContent=4,e[2].textContent=3,e[1].textContent=2,e[0].textContent=1),u===3&&(e[3].setAttribute("disabled","true"),e[2].textContent=3,e[1].textContent=2,e[0].textContent=1,s=h(e),s===3&&(e[3].classList.remove("shl-active"),e[2].classList.add("shl-active"))),u===2&&(e[3].setAttribute("disabled","true"),e[2].setAttribute("disabled","true"),e[1].textContent=2,e[0].textContent=1,s=h(e),s===2&&(e[2].classList.remove("shl-active"),e[1].classList.add("shl-active"))))}function d(c,b,g){const f=g.length;let m=0;const C=f-(c-1)*b;C>=b?m=b-1:m=C-1,t.placeForBookList.innerHTML="";let L=c*b-b;for(let P=0;P<=m;P+=1)p.push(_(g[L])),L+=1;const A=p.join("");t.placeForBookList.insertAdjacentHTML("beforeend",A),w()}function $(c,b){p.push(_(b[c]));const g=p.join("");t.placeForBookList.insertAdjacentHTML("beforeend",g),w()}function O(c,b){const g=b.findIndex(f=>f._id===c);return g!==-1?(b.splice(g,1),l=b,console.log("ok"),!0):(console.log("fault"),!1)}function D(c){localStorage.setItem(S,JSON.stringify(c))}function _(c){const{_id:b,book_image:g,description:f,author:m,list_name:C,title:L,amazon_product_url:A,buy_links:P}=c,E=P[1]?P[1].url:"";return`<li class="shl-book-card" data-id="${b}">
           <img class="shl-book-image" src="${g}"  alt=""> 
           <div class="shl-book-data">
            <ul class="shl-book-features">
              <li class="shl-book-card-features">
                <div class="shl-bookname-category">
                  <h4 class="shl-book-title">${L}</h4>
                  <p class="shl-book-category">${C}</p>
              </div>
              <button class="shl-card-delete-button" type="button">
                <svg class="shl-delete-icon" >
                        <use href="./img/Shopping_list/icon_delete_sprite.svg#icon-trash-03"></use>
                      </svg>
                    </button>
              </li>
              <li class="shl-book-card-features"><p class="shl-book-description">${f}</p>
              </li>
              <li class="shl-book-card-features">
                <p class="shl-book-author">${m}</p>
                <div class="shl-buy-links">
                  <a class="shl-amazon-link" href="${A}"></a>
                  <a class="shl-apple-link" href="${E}"></a>
                </div>
              </li>
             </ul>
           </div>
          </li>`}
//# sourceMappingURL=commonHelpers4.js.map
