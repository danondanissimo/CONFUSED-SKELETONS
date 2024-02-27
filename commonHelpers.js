import{o as i}from"./assets/support-ukraine-e2e1fb39.js";import{a as l}from"./assets/vendor-b619ac7a.js";const a=document.querySelector(".top-books-container"),m="https://books-backend.p.goit.global/";d();g();async function b(){try{return await l.get(m+"books/top-books")}catch(t){return alert("Something went wrong, please try again."),t}}async function d(){a.replaceChildren(),a.insertAdjacentHTML("afterbegin",`  <h1 class="best-sellers-title">
    Best sellers <span class="best-sellers-title-accent">Books</span>
  </h1>
  <ul class="top-books-list"></ul>`);const t=document.querySelector(".top-books-list");(await b()).data.map(e=>{const s=k(e);t.insertAdjacentHTML("beforeend",s)}),g()}function c(t,o){return o.length>t?o.slice(0,t)+"...":o}function k(t){const o=t.books.map(e=>p(e)).join("");return`
  <li class="top-category" >
    <p class="top-category-name">${t.list_name}</p>
    <ul class="top-category-list">${o}</ul>
      <button value="${t.list_name}" class="top-books-btn">See more</button></li>
        `}function p({book_image:t,_id:o,title:e,author:s}){return`<li class="top-book-list" >
      <img src="${t}" 
      alt="${e}" class="top-book-img" data-id="${o}"/>
      <h2 class="top-book-title">${c(16,e)}</h2>
      <p class="top-book-author">${c(16,s)}</p>
    </li>`}function g(){document.querySelectorAll(".top-book-img").forEach(o=>{o.addEventListener("click",i)})}function h(){const t=document.getElementById("output");t.innerHTML="",t.innerHTML='<div class="loader">Loading...</div>',l.get("https://openlibrary.org/search.json?q="+document.getElementById("input").value).then(o=>{t.innerHTML="";for(let e=0;e<10&&e<o.data.docs.length;e++)o.data.docs[e].title?t.innerHTML+='<h2 class="book-search-title">'+o.data.docs[e].title+"</h2>"+(o.data.docs[e].author_name?o.data.docs[e].author_name[0]:"Invisible author")+'<br><img class="books-search-cover" src="https://covers.openlibrary.org/b/isbn/'+o.data.docs[e].isbn[0]+'-M.jpg"><br>':console.log("Heading not found for element with index "+e)}).catch(o=>{console.error("Error occurred while fetching books:",o),t.innerHTML=""})}function y(){h()}document.getElementById("buttonId").addEventListener("click",y);document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("output");t.innerHTML=""});const r=document.querySelector(".top-books-container");async function f(t){if(t.length!==0)try{let o=`https://books-backend.p.goit.global/books/category?category=${t}`;const e=await fetch(o);if(!e.ok)throw new Error("Failed to fetch books");return await e.json()}catch(o){return console.error(o),[]}else console.log("Hello sir ")}async function L(t){const o=document.querySelector(".books-list");o?(o.innerHTML="",(await f(t)).forEach(s=>{const n=`
                        <div class="book">
                            <img class="image_book" src="${s.book_image}"  data-id="${s._id}"alt="Book Image">
                            <h2 class="title_book"> ${s.title}</h2>
                            <p class="test_book"> ${s.contributor}</p>
                        </div>
                    `;o.innerHTML+=n}),document.getElementById("selectedCategory").textContent=t):console.error('Element with class "books-list" not found')}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("categoryList");t?t.addEventListener("click",o=>{if(r.replaceChildren(),r.insertAdjacentHTML("afterbegin",`  <div class="box-in-box">
    <h1 class="title-category-page">
      <span class="titlecategory" id="selectedCategory"></span>
    </h1>
    <ul class="books-list"></ul>
  </div>`),document.querySelector(".books-list").addEventListener("click",i),o.target&&o.target.matches("li.category-item")){let s=o.target.textContent;if(s=="All categories"){d();return}t.querySelectorAll(".category-item").forEach(u=>{u.classList.remove("active")}),o.target.classList.add("active"),L(s)}}):console.error('Element with id "categoryList" not found')});fetch("https://books-backend.p.goit.global/books/category-list").then(t=>t.json()).then(t=>{t.sort((e,s)=>e.list_name.localeCompare(s.list_name));const o=document.getElementById("categoryList");t.forEach(e=>{const s=e.list_name,n=document.createElement("li");n.textContent=s,n.classList.add("category-item"),o.appendChild(n)})}).catch(t=>console.error("Error fetching data:",t));
//# sourceMappingURL=commonHelpers.js.map
