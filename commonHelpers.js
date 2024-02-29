import{o as u}from"./assets/footer-4ced3dcf.js";import{a as c}from"./assets/vendor-b619ac7a.js";const r=document.querySelector(".top-books-container"),p="https://books-backend.p.goit.global/";m();l();async function k(){try{return await c.get(p+"books/top-books")}catch(t){return alert("Something went wrong, please try again."),t}}async function h(t){try{return await c.get(p+`books/category?category=${t}`)}catch(e){return alertError("Something went wrong, please try again."),e}}async function m(){r.replaceChildren(),r.insertAdjacentHTML("afterbegin",`  <h1 class="best-sellers-title">
    Best sellers <span class="best-sellers-title-accent">Books</span>
  </h1>
  <ul class="top-books-list"></ul>`);const t=document.querySelector(".top-books-list");(await k()).data.map(n=>{const s=f(n);t.insertAdjacentHTML("beforeend",s)}),l(),document.querySelectorAll(".top-books-btn").forEach(n=>n.addEventListener("click",v))}function d(t,e){return e.length>t?e.slice(0,t)+"...":e}function f(t){const e=t.books.map(o=>y(o)).join("");return`
  <li class="top-category" >
    <p class="top-category-name">${t.list_name}</p>
    <ul class="top-category-list">${e}</ul>
      <button value="${t.list_name}" class="top-books-btn">See more</button></li>
        `}function y(t){return`<li class="top-book-list" value="${t.list_item}">
      <div class="ovelay-container">
        <img src="${t.book_image}" 
        alt="${t.title}" class="top-book-img" data-id="${t._id}"/>
        <p class="overlay">Quick view</p>
      </div>
      <h2 class="top-book-title">${d(16,t.title)}</h2>
      <p class="top-book-author">${d(16,t.author)}</p>

    </li>`}function v(t){t.preventDefault(),h(t.target.value).then(e=>{const o=B(t.target.value);r.innerHTML=`<div class="box-in-box">
    <h1 class="best-sellers-title" id="selectedCategory">${o}
      <span class="titlecategory"></span>
    </h1>
    <ul class="books-list">${L(e)}</ul>
  </div>`,l(),window.scrollTo({top:0,behavior:"smooth"}),document.querySelectorAll(".category-item").forEach(s=>{t.target.value===s.textContent?s.classList.add("active"):s.classList.remove("active")})})}function l(){document.querySelectorAll(".top-book-img").forEach(e=>{e.addEventListener("click",u)})}function L(t){return t.data.map(e=>y(e)).join("")}function B(t){const e=t.split(" "),o=e.pop();return`${e.map(s=>`<span>${s}</span>`).join(" ")} <span class="best-sellers-title-accent">${o}</span>`}function E(){const t=document.getElementById("output");t.innerHTML="",t.innerHTML='<div class="loader">Loading...</div>',c.get("https://openlibrary.org/search.json?q="+document.getElementById("input").value).then(e=>{t.innerHTML="";for(let o=0;o<10&&o<e.data.docs.length;o++)e.data.docs[o].title?t.innerHTML+='<h2 class="book-search-title">'+e.data.docs[o].title+"</h2>"+(e.data.docs[o].author_name?e.data.docs[o].author_name[0]:"Invisible author")+'<br><img class="books-search-cover" src="https://covers.openlibrary.org/b/isbn/'+e.data.docs[o].isbn[0]+'-M.jpg"><br>':console.log("Heading not found for element with index "+o)}).catch(e=>{console.error("Error occurred while fetching books:",e),t.innerHTML=""})}function C(){E()}document.getElementById("buttonId").addEventListener("click",C);document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("output");t.innerHTML=""});const g=document.querySelector(".top-books-container");async function w(t){if(t.length!==0)try{let e=`https://books-backend.p.goit.global/books/category?category=${t}`;const o=await fetch(e);if(!o.ok)throw new Error("Failed to fetch books");return await o.json()}catch(e){return console.error(e),[]}else console.log("Hello sir ")}async function I(t){const e=document.querySelector(".books-list");if(e){e.innerHTML="",(await w(t)).forEach(a=>{const b=`
                        <div class="book">
                            <div class="ovelay-container">
                              <img class="image_book" src="${a.book_image}"  data-id="${a._id}"alt="Book Image">
                              <p class="overlay">Quick view</p>
                            </div>
                            <h2 class="title_book"> ${a.title}</h2>
                            <p class="test_book"> ${a.contributor}</p>
                        </div>
                    `;e.innerHTML+=b});const n=t.split(" "),s=n.at(-1);document.querySelector(".titlecategory").textContent=s,n.pop();const i=n.join(" ");document.getElementById("selectedCategory").insertAdjacentHTML("afterbegin",i)}else console.error('Element with class "books-list" not found')}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("categoryList");t?(t.addEventListener("click",o=>{if(g.replaceChildren(),g.insertAdjacentHTML("afterbegin",`<div class="box-in-box">
    <h1 class="title-category-page" id="selectedCategory">
      <span class="titlecategory"></span>
    </h1>
    <ul class="books-list"></ul>
  </div>`),document.querySelector(".books-list").addEventListener("click",u),o.target&&o.target.matches("li.category-item")){let s=o.target.textContent;if(t.querySelectorAll(".category-item").forEach(a=>{a.classList.remove("active")}),o.target.classList.add("active"),s=="All categories"){m();return}I(s)}}),t.querySelector(".category-item").classList.add("active")):console.error('Element with id "categoryList" not found')});fetch("https://books-backend.p.goit.global/books/category-list").then(t=>t.json()).then(t=>{t.sort((o,n)=>o.list_name.localeCompare(n.list_name));const e=document.getElementById("categoryList");t.forEach(o=>{const n=o.list_name,s=document.createElement("li");s.textContent=n,s.classList.add("category-item"),e.appendChild(s)})}).catch(t=>console.error("Error fetching data:",t));
//# sourceMappingURL=commonHelpers.js.map
