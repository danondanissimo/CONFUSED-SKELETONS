import{m as _,n as I,o as c,a as C,b as l,c as k}from"./assets/support-ukraine-9ecd3408.js";import{a as y,b as q}from"./assets/vendor-27708577.js";const x=document.querySelector(".js-toggle-mobile-menu"),N=document.querySelector(".mobile-menu");x.addEventListener("click",h);function h(){N.classList.toggle("visually-hidden")}const p=document.querySelector(".sign-up-form"),v=document.querySelector(".log-out-button"),b="sign-up-form-state";let O=JSON.parse(localStorage.getItem(b))||"";p.addEventListener("submit",e=>{localStorage.removeItem(b),e.preventDefault();const t=e.currentTarget.elements.name.value.trim(),o=e.currentTarget.elements.email.value.trim(),s=e.currentTarget.elements.password.value.trim();if(t.length===0||o.length===0||s.length===0)alert("All form fields must be filled in");else{const n={name:t,email:o,password:s};p.reset(),localStorage.setItem(b,JSON.stringify(n)),JSON.stringify(n)!==0&&M(n),_.classList.add("visually-hidden")}});function B(){I.forEach(e=>{e.classList.add("visually-hidden")}),p.classList.remove("visually-hidden"),v.classList.add("visually-hidden"),k.classList.add("visually-hidden"),l.replaceChildren(),l.insertAdjacentHTML("beforeend",'Sign-up<svg class="sign-up-icon"><use href="./img/head-and-mobile-menu.svg#icon-arrow-narrow-right"></svg>'),l.classList.remove("user-profile"),c.replaceChildren(),c.insertAdjacentHTML("beforeend",'Sign-up<svg class="sign-up-icon"><use href="./img/head-and-mobile-menu.svg#icon-arrow-narrow-right"></svg>'),c.classList.remove("header-user"),c.removeEventListener("click",h),c.addEventListener("click",C),localStorage.removeItem(b),l.disabled=!1,h()}function M(e){I.forEach(t=>{t.classList.remove("visually-hidden")}),c.replaceChildren(),c.insertAdjacentHTML("beforeend",`<span class="user-icon-eclipse"><svg class="user-icon"><use href="./img/head-and-mobile-menu.svg#icon-user"></svg></span> ${e.name}<svg class="carret-down-icon"><use href="./img/head-and-mobile-menu.svg#icon-carret-down"></use></svg>`),c.classList.add("header-user"),c.removeEventListener("click",C),c.addEventListener("click",h),l.replaceChildren(),l.insertAdjacentHTML("beforeend",`<span class="user-icon-eclipse"><svg class="user-icon"><use href="./img/head-and-mobile-menu.svg#icon-user"></svg></span> ${e.name}`),l.classList.add("user-profile"),p.classList.add("visually-hidden"),k.classList.remove("visually-hidden"),k.addEventListener("click",B),v.classList.remove("visually-hidden"),v.addEventListener("click",B),l.disabled=!0}function j(){const e=H()||{},{name:t,email:o,password:s}=e;t&&t.length>0&&M(e)}function H(){try{return O}catch(e){console.error(e)}}j();const $="shopping-list";let u;const g=F($)||[],A=async e=>{if(e.preventDefault(),e.target.nodeName!=="IMG")return;const t=e.target.dataset.id,o=await D(t);R(o),u=document.querySelector(".addBtn"),u.addEventListener("click",J(o)),g.length>0&&(g.some(n=>t===n._id)?(u.textContent="Remove from the shopping list",u.classList.add("mobileWidth")):u.textContent="Add to shopping list")};async function D(e){return(await y.get(`https://books-backend.p.goit.global/books/${e}`)).data}function R({book_image:e,author:t,title:o,description:s,_id:n,buy_links:r}){s===""&&(s="Book description has not been added yet...");const d=q.create(`
    <div class="item-modal">
        <button type="button" class="closeModalBtn">
          <svg class="menu-btn-icon">
            <use href="./img/symbol-defs.svg#icon-Icon-close-modal"></use>
          </svg>
        </button>
        <div class="item-card">
            <div class="image-container">
              <img class="item-image" src="${e}" />
            </div>
            <div class="item-information">
              <h3 class="book-title">${o}</h3>
              <p class="book-author">${t}</p>
              <p class="book-description">${s}</p>
              <ul class="buy-links-container"></ul>
            </div>
        </div>
        <button type="submit" class="addBtn" id="addBtn">Add to shopping list</button>
    </div>
    `,{onShow:m=>{document.body.style.overflow="hidden";const E=m.element().querySelector(".closeModalBtn");E.onclick=()=>m.close(),u=m.element().querySelector(".addBtn")},onClose:m=>{document.body.style.overflow="visible"}}),i=d.element().querySelector(".buy-links-container");z({book_image:e,author:t,title:o,buy_links:r},i),d.show();const a=m=>{m.key==="Escape"&&(d.close(),document.removeEventListener("keydown",a))};document.addEventListener("keydown",a)}const J=e=>t=>{if(t.preventDefault(),t.target.textContent==="Remove from the shopping list"){t.target.textContent="Add to shopping list",t.target.classList.remove("mobileWidth");const o=g.findIndex(s=>s._id===e._id);g.splice(o,1),G()}else t.target.textContent="Remove from the shopping list",t.target.classList.add("mobileWidth"),g.push(e),W();localStorage.setItem($,JSON.stringify(g))};function F(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}function W(){const e=document.querySelector(".item-modal"),t=document.createElement("p");t.className="congratulation",t.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",e.appendChild(t)}function G(){const e=document.querySelector(".congratulation");e&&e.remove()}function z({book_image:e,author:t,title:o,buy_links:s},n){s.forEach(r=>{const d=document.createElement("li");n.appendChild(d);const i=document.createElement("a");d.appendChild(i);const a=document.createElement("img");i.appendChild(a),d.className="shop-link",i.target="_blank",a.className="booksIcon",a.alt=r.name+" Icon";const f=`${e}`.split("/").pop().split(".")[0];switch(r.name){case"Amazon":i.href=r.url,a.src="./img/amazon.svg";break;case"Apple Books":i.href=r.url,a.src="./img/apple.svg",a.className="booksIconApple";break;case"Books-A-Million":i.href=`https://www.booksamillion.com/p/${o}/${t}/${f}`,a.src="./img/Books-A-Million_logo.svg";break;case"Bookshop":i.href=`https://bookshop.org/search?keywords=${f}`,a.src="./img/bookshop.svg";break;case"IndieBound":i.href=`https://bookshop.org/p/books/atomic-habits-an-easy-proven-way-to-build-good-habits-break-bad-ones-james-clear/12117739?ean=${f}`,a.src="./img/indiebound.svg";break;default:i.href=r.url,a.src="./img/another-shops.svg";break}r.name!=="Amazon"&&r.name!=="Apple Books"&&r.name!=="Barnes and Noble"&&(a.width="40",a.height="40")})}const K="https://books-backend.p.goit.global/";P();async function U(){try{return await y.get(K+"books/top-books")}catch(e){return alert("Something went wrong, please try again."),e}}async function P(){const e=document.querySelector(".top-books-list");(await U()).data.map(o=>{const s=Y(o);e.insertAdjacentHTML("beforeend",s)}),V()}function S(e,t){return t.length>e?t.slice(0,e)+"...":t}function Y(e){const t=e.books.map(o=>Q(o)).join("");return`
  <li class="top-category" >
    <p class="top-category-name">${e.list_name}</p>
    <ul class="top-category-list">${t}</ul>
      <button value="${e.list_name}" class="top-books-btn">See more</button></li>
        `}function Q({book_image:e,_id:t,title:o,author:s}){return`<li class="top-book-list" >
      <img src="${e}" 
      alt="${o}" class="top-book-img" data-id="${t}"/>
      <h2 class="top-book-title">${S(16,o)}</h2>
      <p class="top-book-author">${S(16,s)}</p>
    </li>`}function V(){document.querySelectorAll(".top-book-img").forEach(t=>{t.addEventListener("click",A)})}const L=document.querySelector(".theme-toggle"),w=document.querySelector("head");localStorage.getItem("theme")==="true"&&(L.checked="true",T());L.addEventListener("click",X);function X(){T()}function T(){let e=L.checked;if(localStorage.setItem("theme",JSON.stringify(e)),e){const t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href","/css/dark-theme.css"),w.insertAdjacentElement("beforeend",t)}else{const t=w.querySelector('link[href="/css/dark-theme.css"]');t&&t.remove()}}function Z(){const e=document.getElementById("output");e.innerHTML="",e.innerHTML='<div class="loader">Loading...</div>',y.get("https://openlibrary.org/search.json?q="+document.getElementById("input").value).then(t=>{e.innerHTML="";for(let o=0;o<10&&o<t.data.docs.length;o++)t.data.docs[o].title?e.innerHTML+='<h2 class="book-search-title">'+t.data.docs[o].title+"</h2>"+(t.data.docs[o].author_name?t.data.docs[o].author_name[0]:"Invisible author")+'<br><img class="books-search-cover" src="https://covers.openlibrary.org/b/isbn/'+t.data.docs[o].isbn[0]+'-M.jpg"><br>':console.log("Heading not found for element with index "+o)}).catch(t=>{console.error("Error occurred while fetching books:",t),e.innerHTML=""})}function ee(){Z()}document.getElementById("buttonId").addEventListener("click",ee);document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("output");e.innerHTML=""});async function te(e){try{let t=`https://books-backend.p.goit.global/books/category?category=${e}`;const o=await fetch(t);if(!o.ok)throw new Error("Failed to fetch books");return await o.json()}catch(t){return console.error(t),[]}}async function oe(e){const t=document.querySelector(".books-list");t?(t.innerHTML="",(await te(e)).forEach(s=>{const n=`
                        <div class="book">
                            <img class="image_book" src="${s.book_image}"  data-id="${s._id}"alt="Book Image">
                            <h2 class="title_book"> ${s.title}</h2>
                            <p class="test_book"> ${s.contributor}</p>
                        </div>
                    `;t.innerHTML+=n}),document.getElementById("selectedCategory").textContent=e):console.error('Element with class "books-list" not found')}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("categoryList");e?e.addEventListener("click",t=>{if(t.target&&t.target.matches("li.category-item")){let o=t.target.textContent;o==="All Categories"&&(o=" "),e.querySelectorAll(".category-item").forEach(n=>{n.classList.remove("active")}),t.target.classList.add("active"),oe(o)}}):console.error('Element with id "categoryList" not found')});fetch("https://books-backend.p.goit.global/books/category-list").then(e=>e.json()).then(e=>{e.sort((o,s)=>o.list_name.localeCompare(s.list_name));const t=document.getElementById("categoryList");e.forEach(o=>{const s=o.list_name,n=document.createElement("li");n.textContent=s,n.classList.add("category-item"),t.appendChild(n)})}).catch(e=>console.error("Error fetching data:",e));const se=document.querySelector(".books-list");se.addEventListener("click",A);
//# sourceMappingURL=commonHelpers.js.map
