import{o as d}from"./assets/footer-a3d13a08.js";import{a as g}from"./assets/vendor-b619ac7a.js";const r=document.querySelector(".top-books-container"),k="https://books-backend.p.goit.global/";u();m();async function p(){try{return await g.get(k+"books/top-books")}catch(t){return alert("Something went wrong, please try again."),t}}async function u(){r.replaceChildren(),r.insertAdjacentHTML("afterbegin",`  <h1 class="best-sellers-title">
    Best sellers <span class="best-sellers-title-accent">Books</span>
  </h1>
  <ul class="top-books-list"></ul>`);const t=document.querySelector(".top-books-list");(await p()).data.map(e=>{const s=y(e);t.insertAdjacentHTML("beforeend",s)}),m()}function i(t,o){return o.length>t?o.slice(0,t)+"...":o}function y(t){const o=t.books.map(e=>h(e)).join("");return`
  <li class="top-category" >
    <p class="top-category-name">${t.list_name}</p>
    <ul class="top-category-list">${o}</ul>
      <button value="${t.list_name}" class="top-books-btn">See more</button></li>
        `}function h({book_image:t,_id:o,title:e,author:s}){return`<li class="top-book-list" >
      <img src="${t}" 
      alt="${e}" class="top-book-img" data-id="${o}"/>
      <h2 class="top-book-title">${i(16,e)}</h2>
      <p class="top-book-author">${i(16,s)}</p>
    </li>`}function m(){document.querySelectorAll(".top-book-img").forEach(o=>{o.addEventListener("click",d)})}function f(){const t=document.getElementById("output");t.innerHTML="",t.innerHTML='<div class="loader">Loading...</div>',g.get("https://openlibrary.org/search.json?q="+document.getElementById("input").value).then(o=>{t.innerHTML="";for(let e=0;e<10&&e<o.data.docs.length;e++)o.data.docs[e].title?t.innerHTML+='<h2 class="book-search-title">'+o.data.docs[e].title+"</h2>"+(o.data.docs[e].author_name?o.data.docs[e].author_name[0]:"Invisible author")+'<br><img class="books-search-cover" src="https://covers.openlibrary.org/b/isbn/'+o.data.docs[e].isbn[0]+'-M.jpg"><br>':console.log("Heading not found for element with index "+e)}).catch(o=>{console.error("Error occurred while fetching books:",o),t.innerHTML=""})}function L(){f()}document.getElementById("buttonId").addEventListener("click",L);document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("output");t.innerHTML=""});const l=document.querySelector(".top-books-container");async function B(t){if(t.length!==0)try{let o=`https://books-backend.p.goit.global/books/category?category=${t}`;const e=await fetch(o);if(!e.ok)throw new Error("Failed to fetch books");return await e.json()}catch(o){return console.error(o),[]}else console.log("Hello sir ")}async function E(t){const o=document.querySelector(".books-list");if(o){o.innerHTML="",(await B(t)).forEach(a=>{const b=`
                        <div class="book">
                            <img class="image_book" src="${a.book_image}"  data-id="${a._id}"alt="Book Image">
                            <h2 class="title_book"> ${a.title}</h2>
                            <p class="test_book"> ${a.contributor}</p>
                        </div>
                    `;o.innerHTML+=b});const s=t.split(" "),n=s.at(-1);document.querySelector(".titlecategory").textContent=n,s.pop();const c=s.join(" ");document.getElementById("selectedCategory").insertAdjacentHTML("afterbegin",c)}else console.error('Element with class "books-list" not found')}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("categoryList");t?t.addEventListener("click",o=>{if(l.replaceChildren(),l.insertAdjacentHTML("afterbegin",`<div class="box-in-box">
    <h1 class="title-category-page" id="selectedCategory">
      <span class="titlecategory"></span>
    </h1>
    <ul class="books-list"></ul>
  </div>`),document.querySelector(".books-list").addEventListener("click",d),o.target&&o.target.matches("li.category-item")){let s=o.target.textContent;if(s=="All categories"){u();return}t.querySelectorAll(".category-item").forEach(c=>{c.classList.remove("active")}),o.target.classList.add("active"),E(s)}}):console.error('Element with id "categoryList" not found')});fetch("https://books-backend.p.goit.global/books/category-list").then(t=>t.json()).then(t=>{t.sort((e,s)=>e.list_name.localeCompare(s.list_name));const o=document.getElementById("categoryList");t.forEach(e=>{const s=e.list_name,n=document.createElement("li");n.textContent=s,n.classList.add("category-item"),o.appendChild(n)})}).catch(t=>console.error("Error fetching data:",t));
//# sourceMappingURL=commonHelpers.js.map
