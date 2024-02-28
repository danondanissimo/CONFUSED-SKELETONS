import{o as u}from"./assets/footer-c58278e3.js";import{a as c}from"./assets/vendor-b619ac7a.js";const r=document.querySelector(".top-books-container"),m="https://books-backend.p.goit.global/";p();l();async function h(){try{return await c.get(m+"books/top-books")}catch(t){return alert("Something went wrong, please try again."),t}}async function k(t){try{return await c.get(m+`books/category?category=${t}`)}catch(e){return alertError("Something went wrong, please try again."),e}}async function p(){r.replaceChildren(),r.insertAdjacentHTML("afterbegin",`  <h1 class="best-sellers-title">
    Best sellers <span class="best-sellers-title-accent">Books</span>
  </h1>
  <ul class="top-books-list"></ul>`);const t=document.querySelector(".top-books-list");(await h()).data.map(n=>{const s=f(n);t.insertAdjacentHTML("beforeend",s)}),l(),document.querySelectorAll(".top-books-btn").forEach(n=>n.addEventListener("click",L))}function d(t,e){return e.length>t?e.slice(0,t)+"...":e}function f(t){const e=t.books.map(o=>y(o)).join("");return`
  <li class="top-category" >
    <p class="top-category-name">${t.list_name}</p>
    <ul class="top-category-list">${e}</ul>
      <button value="${t.list_name}" class="top-books-btn">See more</button></li>
        `}function y(t){return`<li class="top-book-list" value="${t.list_item}">
      <img src="${t.book_image}" 
      alt="${t.title}" class="top-book-img" data-id="${t._id}"/>
      <h2 class="top-book-title">${d(16,t.title)}</h2>
      <p class="top-book-author">${d(16,t.author)}</p>

    </li>`}function L(t){t.preventDefault(),k(t.target.value).then(e=>{const o=B(t.target.value);r.innerHTML=`<div class="box-in-box">
    <h1 class="best-sellers-title" id="selectedCategory">${o}
      <span class="titlecategory"></span>
    </h1>
    <ul class="books-list">${v(e)}</ul>
  </div>`,l(),window.scrollTo({top:0,behavior:"smooth"}),document.querySelectorAll(".category-item").forEach(s=>{t.target.value===s.textContent?s.classList.add("active"):s.classList.remove("active")})})}function l(){document.querySelectorAll(".top-book-img").forEach(e=>{e.addEventListener("click",u)})}function v(t){return t.data.map(e=>y(e)).join("")}function B(t){const e=t.split(" "),o=e.pop();return`${e.map(s=>`<span>${s}</span>`).join(" ")} <span class="best-sellers-title-accent">${o}</span>`}function E(){const t=document.getElementById("output");t.innerHTML="",t.innerHTML='<div class="loader">Loading...</div>',c.get("https://openlibrary.org/search.json?q="+document.getElementById("input").value).then(e=>{t.innerHTML="";for(let o=0;o<10&&o<e.data.docs.length;o++)e.data.docs[o].title?t.innerHTML+='<h2 class="book-search-title">'+e.data.docs[o].title+"</h2>"+(e.data.docs[o].author_name?e.data.docs[o].author_name[0]:"Invisible author")+'<br><img class="books-search-cover" src="https://covers.openlibrary.org/b/isbn/'+e.data.docs[o].isbn[0]+'-M.jpg"><br>':console.log("Heading not found for element with index "+o)}).catch(e=>{console.error("Error occurred while fetching books:",e),t.innerHTML=""})}function C(){E()}document.getElementById("buttonId").addEventListener("click",C);document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("output");t.innerHTML=""});const g=document.querySelector(".top-books-container");async function I(t){if(t.length!==0)try{let e=`https://books-backend.p.goit.global/books/category?category=${t}`;const o=await fetch(e);if(!o.ok)throw new Error("Failed to fetch books");return await o.json()}catch(e){return console.error(e),[]}else console.log("Hello sir ")}async function $(t){const e=document.querySelector(".books-list");if(e){e.innerHTML="",(await I(t)).forEach(a=>{const b=`
                        <div class="book">
                            <img class="image_book" src="${a.book_image}"  data-id="${a._id}"alt="Book Image">
                            <h2 class="title_book"> ${a.title}</h2>
                            <p class="test_book"> ${a.contributor}</p>
                        </div>
                    `;e.innerHTML+=b});const n=t.split(" "),s=n.at(-1);document.querySelector(".titlecategory").textContent=s,n.pop();const i=n.join(" ");document.getElementById("selectedCategory").insertAdjacentHTML("afterbegin",i)}else console.error('Element with class "books-list" not found')}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("categoryList");t?(t.addEventListener("click",o=>{if(g.replaceChildren(),g.insertAdjacentHTML("afterbegin",`<div class="box-in-box">
    <h1 class="title-category-page" id="selectedCategory">
      <span class="titlecategory"></span>
    </h1>
    <ul class="books-list"></ul>
  </div>`),document.querySelector(".books-list").addEventListener("click",u),o.target&&o.target.matches("li.category-item")){let s=o.target.textContent;if(t.querySelectorAll(".category-item").forEach(a=>{a.classList.remove("active")}),o.target.classList.add("active"),s=="All categories"){p();return}$(s)}}),t.querySelector(".category-item").classList.add("active")):console.error('Element with id "categoryList" not found')});fetch("https://books-backend.p.goit.global/books/category-list").then(t=>t.json()).then(t=>{t.sort((o,n)=>o.list_name.localeCompare(n.list_name));const e=document.getElementById("categoryList");t.forEach(o=>{const n=o.list_name,s=document.createElement("li");s.textContent=n,s.classList.add("category-item"),e.appendChild(s)})}).catch(t=>console.error("Error fetching data:",t));
//# sourceMappingURL=commonHelpers.js.map
