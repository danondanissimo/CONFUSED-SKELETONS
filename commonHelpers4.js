import"./assets/support-ukraine-e2e1fb39.js";import"./assets/vendor-b619ac7a.js";let t={placeForBookList:document.querySelector(".shl-books-list"),onEmptyLocalStorageField:document.querySelector(".no-books-in-local-storage"),paginationBlock:document.querySelector(".shl-pagination-block"),firstPaginationButton:document.querySelector(".shl-pagination-button-first"),previousPaginationButton:document.querySelector(".shl-pagination-button-previous"),onePaginationButton:document.querySelector(".shl-pagination-button-one"),twoPaginationButton:document.querySelector(".shl-pagination-button-two"),freePaginationButton:document.querySelector(".shl-pagination-button-free"),morePaginationButton:document.querySelector(".shl-pagination-button-more"),nextPaginationButton:document.querySelector(".shl-pagination-button-next"),lastPaginationButton:document.querySelector(".shl-pagination-button-last")},l=[],C=[];const E="shopping-list";let a=1,i=1,r=0,v=0,m=0,B=0,q=!1;const u=window.innerWidth>768?3:4,w=window.innerWidth<768,e=[t.onePaginationButton,t.twoPaginationButton,t.freePaginationButton,t.morePaginationButton],n=[t.onePaginationButton,t.freePaginationButton,t.morePaginationButton],s=e.findIndex(c=>c===t.morePaginationButton);let o=0;function h(c){return c.findIndex(g=>g.classList.contains("shl-active"))}function O(){C=[]}function T(c){const b=JSON.parse(localStorage.getItem(c));if(b&&b.length>0)return l=b,l}function N(){l.length>0?(t.onEmptyLocalStorageField.classList.add("hide"),d(a,u,l),_()):t.onEmptyLocalStorageField.classList.remove("hide")}T(E);N();t.placeForBookList.addEventListener("click",j);t.paginationBlock.addEventListener("click",$);function $(c){q=!0;const b=c.target.classList[0],g=parseInt(c.target.textContent,10);if(w)switch(b){case"shl-pagination-button-first":n[h(n)].classList.remove("shl-active"),i=1,a=1,d(a,u,l),t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true"),n[0].classList.add("shl-active"),t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled"),n[0].textContent=i,n[1].textContent=i+1,n[2].textContent="...";break;case"shl-pagination-button-previous":o=h(n),n[0].textContent=="..."&&(v=parseInt(n[1].textContent,10)-1,v>=2?(i=i-1,a=i,d(a,u,l),o>1?(n[1].textContent=i,n[o].classList.remove("shl-active"),n[1].classList.add("shl-active"),n[2].textContent="...",t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled")):n[1].textContent=i):(i=1,a=i,n[0].textContent=i,n[o].classList.remove("shl-active"),n[0].classList.add("shl-active"),d(a,u,l),t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true"),t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled")));break;case"shl-pagination-button-one":o=h(n),!n.length===r&&(n[2].textContent="..."),g===1?(i=1,a=i,n[o].classList.remove("shl-active"),n[0].classList.add("shl-active"),d(a,u,l),t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true")):(B=parseInt(n[1].textContent,10),v=B-1,v>=2?(n[1].textContent=B-1,i=parseInt(n[1].textContent,10),n[o].classList.remove("shl-active"),n[1].classList.add("shl-active"),a=i,d(a,u,l),t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled")):(i=1,a=i,n[0].textContent=1,n[o].classList.remove("shl-active"),n[0].classList.add("shl-active"),d(a,u,l),t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true"),t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled")));break;case"shl-pagination-button-free":n[h(n)].classList.remove("shl-active"),i=g,a=i,n[1].classList.add("shl-active"),d(a,u,l);break;case"shl-pagination-button-more":o=h(n),!n.length===r&&(n[0].textContent="..."),n[2].textContent=="..."?(m=parseInt(n[1].textContent,10),v=r-m,v>=2?(n[1].textContent=m+1,i=parseInt(n[1].textContent,10),a=i,d(a,u,l),n[0].textContent="...",t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled"),!o===1&&(n[o].classList.remove("shl-active"),n[1].classList.add("shl-active"))):(i=r,a=i,n[2].textContent=r,n[o].classList.remove("shl-active"),n[2].classList.add("shl-active"),d(a,u,l),t.nextPaginationButton.setAttribute("disabled","true"),t.lastPaginationButton.setAttribute("disabled","true"),!n.length===r&&(t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled")))):(n[o].classList.remove("shl-active"),i=r,a=i,d(a,u,l),t.nextPaginationButton.setAttribute("disabled","true"),t.lastPaginationButton.setAttribute("disabled","true"),n[2].classList.add("shl-active"),!e.length===r&&(t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled")));break;case"shl-pagination-button-next":o=h(n),n[2].textContent=="..."&&(m=parseInt(n[1].textContent,10),v=r-i,v>=2?(i=i+1,a=i,d(a,u,l),o<1?(n[o].classList.remove("shl-active"),n[1].classList.add("shl-active"),n[o].textContent=i,n[0].textContent="..."):(n[o].textContent=i,t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled"))):(i=r,a=i,d(a,u,l),t.nextPaginationButton.setAttribute("disabled","true"),t.lastPaginationButton.setAttribute("disabled","true"),n[o].classList.remove("shl-active"),n[2].textContent=i,n[2].classList.add("shl-active")));break;case"shl-pagination-button-last":n[h(n)].classList.remove("shl-active"),i=r,a=i,t.nextPaginationButton.setAttribute("disabled","true"),t.lastPaginationButton.setAttribute("disabled","true"),n[2].textContent=i,n[2].classList.add("shl-active"),d(a,u,l),n[1].textContent=i-1,n[0].textContent="...",t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled");break}else switch(b){case"shl-pagination-button-first":e[h(e)].classList.remove("shl-active"),i=1,a=1,d(a,u,l),t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true"),e[0].classList.add("shl-active"),t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled"),e[s-3].textContent=i,e[s-1].textContent=i+2,e[s-2].textContent=i+1,e[s].textContent="...";break;case"shl-pagination-button-previous":o=h(e),e[s-3].textContent=="..."&&(v=parseInt(e[s-2].textContent,10)-1,v>=2?(i=i-1,a=i,d(a,u,l),o>1?(e[o].classList.remove("shl-active"),e[o-1].classList.add("shl-active")):(e[o].textContent=i,e[o+1].textContent=i+1,e[o+2].textContent="...",t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled"))):(i=1,a=i,e[s-3].textContent=i,e[o].classList.remove("shl-active"),e[s-3].classList.add("shl-active"),d(a,u,l),t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true"),t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled")));break;case"shl-pagination-button-one":o=h(e),!e.length===r&&(e[s].textContent="..."),g===1?(i=1,a=i,e[o].classList.remove("shl-active"),e[i-1].classList.add("shl-active"),d(a,u,l),t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true")):(B=parseInt(e[s-2].textContent,10),v=B-1,v>2?(e[s-2].textContent=B-2,e[s-1].textContent=B-1,i=parseInt(e[s-1].textContent,10),e[o].classList.remove("shl-active"),e[s-1].classList.add("shl-active"),a=i,d(a,u,l),t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled")):v===2?(e[s].textContent="...",e[s-2].textContent=B-1,e[s-1].textContent=B,i=parseInt(e[s-1].textContent,10),e[o].classList.remove("shl-active"),e[s-1].classList.add("shl-active"),a=i,d(a,u,l),e[s-3].textContent=1,t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true"),t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled")):(i=1,a=i,e[s-3].textContent=1,e[o].classList.remove("shl-active"),e[i-1].classList.add("shl-active"),d(a,u,l),t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true"),t.nextPaginationButton.removeAttribute("disabled"),t.lastPaginationButton.removeAttribute("disabled")));break;case"shl-pagination-button-two":e[h(e)].classList.remove("shl-active"),i=g,a=i,e[s-2].classList.add("shl-active"),d(a,u,l);break;case"shl-pagination-button-free":e[h(e)].classList.remove("shl-active"),i=g,a=i,e[s-1].classList.add("shl-active"),d(a,u,l);break;case"shl-pagination-button-more":o=h(e),!e.length===r&&(e[s-3].textContent="..."),e[s].textContent=="..."?(m=parseInt(e[s-1].textContent,10),v=r-m,console.log(m),console.log(v),v>2?(e[s-1].textContent=m+2,e[s-2].textContent=m+1,i=parseInt(e[s-2].textContent,10),e[o].classList.remove("shl-active"),e[s-2].classList.add("shl-active"),a=i,d(a,u,l),t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled")):v===2?(e[s-3].textContent="...",e[s-1].textContent=m+1,e[s-2].textContent=m,i=parseInt(e[s-2].textContent,10),e[o].classList.remove("shl-active"),e[s-2].classList.add("shl-active"),a=i,d(a,u,l),e[s].textContent=r,t.nextPaginationButton.setAttribute("disabled","true"),t.lastPaginationButton.setAttribute("disabled","true"),t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled")):(i=r,a=i,e[s].textContent=r,e[o].classList.remove("shl-active"),e[s].classList.add("shl-active"),d(a,u,l),t.nextPaginationButton.setAttribute("disabled","true"),t.lastPaginationButton.setAttribute("disabled","true"),!e.length===r&&(t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled")))):(e[o].classList.remove("shl-active"),i=r,a=i,d(a,u,l),t.nextPaginationButton.setAttribute("disabled","true"),t.lastPaginationButton.setAttribute("disabled","true"),e[s].classList.add("shl-active"),!e.length===r&&(t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled")));break;case"shl-pagination-button-next":o=h(e),e[s].textContent=="..."&&(m=parseInt(e[s-1].textContent,10),v=r-i,v>=2?(i=i+1,a=i,d(a,u,l),o<2?(e[o].classList.remove("shl-active"),e[o+1].classList.add("shl-active")):(e[o].textContent=i,e[o-1].textContent=i-1,t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled"),e[s-3].textContent="...")):(i=r,a=i,d(a,u,l),t.nextPaginationButton.setAttribute("disabled","true"),t.lastPaginationButton.setAttribute("disabled","true"),e[o].classList.remove("shl-active"),e[s].textContent=i,e[s].classList.add("shl-active")));break;case"shl-pagination-button-last":e[h(e)].classList.remove("shl-active"),i=r,a=i,t.nextPaginationButton.setAttribute("disabled","true"),t.lastPaginationButton.setAttribute("disabled","true"),e[s].textContent=i,e[s].classList.add("shl-active"),d(a,u,l),e[s-1].textContent=i-1,e[s-2].textContent=i-2,e[s-3].textContent="...",t.firstPaginationButton.removeAttribute("disabled"),t.previousPaginationButton.removeAttribute("disabled");break}}function j(c){if(q=!0,c.target.closest(".shl-card-delete-button")){const g=c.target.closest(".shl-book-card").dataset.id;document.querySelector(`[data-id="${g}"]`).remove(),H(g,l)&&z(l),r>1?(J(2,l),_()):l.length==0&&N()}else return}function _(){if(t.firstPaginationButton.textContent="<<",t.previousPaginationButton.textContent="<",t.lastPaginationButton.textContent=">>",t.nextPaginationButton.textContent=">",r=Math.ceil(l.length/u),r>1)t.paginationBlock.classList.remove("hide"),q||(t.onePaginationButton.classList.add("shl-active"),t.firstPaginationButton.setAttribute("disabled","true"),t.previousPaginationButton.setAttribute("disabled","true"),w&&(t.twoPaginationButton.classList.add("hide"),t.freePaginationButton.textContent=2));else{if(t.paginationBlock.classList.contains("hide"))return;t.paginationBlock.classList.add("hide")}w?(r<=n.length&&(t.lastPaginationButton.setAttribute("disabled","true"),t.nextPaginationButton.setAttribute("disabled","true")),r===3&&(n[2].textContent=3,n[1].textContent=2,n[0].textContent=1),r===2&&(n[2].setAttribute("disabled","true"),n[1].textContent=2,n[0].textContent=1,o=h(n),o===2&&(n[2].classList.remove("shl-active"),n[1].classList.add("shl-active")))):(r<=e.length&&(t.lastPaginationButton.setAttribute("disabled","true"),t.nextPaginationButton.setAttribute("disabled","true")),r===4&&(e[3].textContent=4,e[2].textContent=3,e[1].textContent=2,e[0].textContent=1),r===3&&(e[3].setAttribute("disabled","true"),e[2].textContent=3,e[1].textContent=2,e[0].textContent=1,o=h(e),o===3&&(e[3].classList.remove("shl-active"),e[2].classList.add("shl-active"))),r===2&&(e[3].setAttribute("disabled","true"),e[2].setAttribute("disabled","true"),e[1].textContent=2,e[0].textContent=1,o=h(e),o===2&&(e[2].classList.remove("shl-active"),e[1].classList.add("shl-active"))))}function d(c,b,g){const f=g.length;let p=0;const A=f-(c-1)*b;A>=b?p=b-1:p=A-1,t.placeForBookList.innerHTML="";let k=c*b-b;for(let P=0;P<=p;P+=1)C.push(D(g[k])),k+=1;const I=C.join("");t.placeForBookList.insertAdjacentHTML("beforeend",I),O()}function J(c,b){C.push(D(b[c]));const g=C.join("");t.placeForBookList.insertAdjacentHTML("beforeend",g),O()}function H(c,b){const g=b.findIndex(f=>f._id===c);return console.log(g),g!==-1?(b.splice(g,1),l=b,console.log("ok"),!0):(console.log("fault"),!1)}function z(c){localStorage.setItem(E,JSON.stringify(c))}function D(c){const{_id:b,book_image:g,description:f,author:p,list_name:A,title:k,amazon_product_url:I,buy_links:P}=c,M=P[1]?P[1].url:"";return`<li class="shl-book-card" data-id="${b}">
           <img class="shl-book-image" src="${g}"  alt=""> 
           <div class="shl-book-data">
            <ul class="shl-book-features">
              <li class="shl-book-card-features">
                <div class="shl-bookname-category">
                  <h4 class="shl-book-title">${k}</h4>
                  <p class="shl-book-category">${A}</p>
              </div>
              <button class="shl-card-delete-button" type="button">
                <img src="./img/Shopping_list/trash-03.svg" alt="SVG Image">
                    </button>
              </li>
              <li class="shl-book-card-features"><p class="shl-book-description">${f}</p>
              </li>
              <li class="shl-book-card-features">
                <p class="shl-book-author">${p}</p>
                <div class="shl-buy-links">
                  <a class="shl-amazon-link" href="${I}"></a>
                  <a class="shl-apple-link" href="${M}"></a>
                </div>
              </li>
             </ul>
           </div>
          </li>`}const S=document.querySelector(".feedback-form"),F=S.querySelector('input[name="email"]'),L={email:""},y="feedback-form-state";let x="";try{x=JSON.parse(localStorage.getItem(y))||{},x&&typeof x=="object"&&(L.email=x.email||"",F.value=L.email)}catch(c){console.error("Error parsing JSON:",c)}const G=c=>{const b=c.target;b===F&&(L.email=b.value.trim()),x=JSON.stringify(L),localStorage.setItem(y,x)};S.addEventListener("input",G);S.addEventListener("submit",c=>{c.preventDefault(),console.log(JSON.parse(localStorage.getItem(y))),localStorage.removeItem(y),L.email="",S.reset()});
//# sourceMappingURL=commonHelpers4.js.map
