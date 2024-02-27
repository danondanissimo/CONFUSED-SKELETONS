import{a as $,b as x}from"./vendor-27708577.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const A=document.querySelectorAll(".navigation-list-item"),a=document.querySelector(".modal-open"),I=document.querySelector(".js-toggle-mobile-menu"),T=document.querySelector(".menu-button-icon_burger"),j=document.querySelector(".menu-button-icon_close"),_=document.querySelector(".mobile-menu"),w=document.querySelector(".modal-close"),m=document.querySelector(".modal-backdrop"),d=document.querySelector(".mobile-sign-up"),L=document.querySelector(".mobile-log-out-button"),C=window.location.href,J=document.querySelectorAll(".navigation-list-item");console.log(C);function b(){m.classList.remove("visually-hidden"),w.addEventListener("click",()=>{m.classList.add("visually-hidden")}),window.addEventListener("keydown",e=>{e.key==="Escape"&&m.classList.add("visually-hidden")}),w.removeEventListener("click",()=>{}),window.removeEventListener("keydown",()=>{}),m.addEventListener("click",e=>{e.target===e.currentTarget&&m.classList.add("visually-hidden")}),m.removeEventListener("click",()=>{})}a.addEventListener("click",b);I.addEventListener("click",()=>{_.classList.toggle("is-open")});d.addEventListener("click",b);function P(){J.forEach(e=>{e.href==C&&e.classList.add("current-page")})}console.log(window.location.href);P();I.addEventListener("click",()=>{T.classList.toggle("visually-hidden"),j.classList.toggle("visually-hidden")});const R=document.querySelector(".js-toggle-mobile-menu"),W=document.querySelector(".mobile-menu");R.addEventListener("click",p);function p(){W.classList.toggle("visually-hidden")}const f=document.querySelector(".sign-up-form"),k=document.querySelector(".log-out-button"),v="sign-up-form-state";let D=JSON.parse(localStorage.getItem(v))||"";f.addEventListener("submit",e=>{localStorage.removeItem(v),e.preventDefault();const t=e.currentTarget.elements.name.value.trim(),n=e.currentTarget.elements.email.value.trim(),i=e.currentTarget.elements.password.value.trim();if(t.length===0||n.length===0||i.length===0)alert("All form fields must be filled in");else{const o={name:t,email:n,password:i};f.reset(),localStorage.setItem(v,JSON.stringify(o)),JSON.stringify(o)!==0&&M(o),m.classList.add("visually-hidden")}});function B(){A.forEach(e=>{e.classList.add("visually-hidden")}),f.classList.remove("visually-hidden"),k.classList.add("visually-hidden"),L.classList.add("visually-hidden"),d.replaceChildren(),d.insertAdjacentHTML("beforeend",'Sign-up<svg class="sign-up-icon"><use href="./img/head-and-mobile-menu.svg#icon-arrow-narrow-right"></svg>'),d.classList.remove("user-profile"),a.replaceChildren(),a.insertAdjacentHTML("beforeend",'Sign-up<svg class="sign-up-icon"><use href="./img/head-and-mobile-menu.svg#icon-arrow-narrow-right"></svg>'),a.classList.remove("header-user"),a.removeEventListener("click",p),a.addEventListener("click",b),localStorage.removeItem(v),d.disabled=!1,p()}function M(e){A.forEach(t=>{t.classList.remove("visually-hidden")}),a.replaceChildren(),a.insertAdjacentHTML("beforeend",`<span class="user-icon-eclipse"><svg class="user-icon"><use href="./img/head-and-mobile-menu.svg#icon-user"></svg></span> ${e.name}<svg class="carret-down-icon"><use href="./img/head-and-mobile-menu.svg#icon-carret-down"></use></svg>`),a.classList.add("header-user"),a.removeEventListener("click",b),a.addEventListener("click",p),d.replaceChildren(),d.insertAdjacentHTML("beforeend",`<span class="user-icon-eclipse"><svg class="user-icon"><use href="./img/head-and-mobile-menu.svg#icon-user"></svg></span> ${e.name}`),d.classList.add("user-profile"),f.classList.add("visually-hidden"),L.classList.remove("visually-hidden"),L.addEventListener("click",B),k.classList.remove("visually-hidden"),k.addEventListener("click",B),d.disabled=!0}function F(){const e=G()||{},{name:t,email:n,password:i}=e;t&&t.length>0&&M(e)}function G(){try{return D}catch(e){console.error(e)}}F();const N="shopping-list";let g;const h=U(N)||[],ee=async e=>{if(e.preventDefault(),e.target.nodeName!=="IMG")return;const t=e.target.dataset.id,n=await H(t);K(n),g=document.querySelector(".addBtn"),g.addEventListener("click",z(n)),h.length>0&&(h.some(o=>t===o._id)?(g.textContent="Remove from the shopping list",g.classList.add("mobileWidth")):g.textContent="Add to shopping list")};async function H(e){return(await $.get(`https://books-backend.p.goit.global/books/${e}`)).data}function K({book_image:e,author:t,title:n,description:i,_id:o,buy_links:s}){i===""&&(i="Book description has not been added yet...");const l=x.create(`
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
              <h3 class="book-title">${n}</h3>
              <p class="book-author">${t}</p>
              <p class="book-description">${i}</p>
              <ul class="buy-links-container"></ul>
            </div>
        </div>
        <button type="submit" class="addBtn" id="addBtn">Add to shopping list</button>
    </div>
    `,{onShow:u=>{document.body.style.overflow="hidden";const E=u.element().querySelector(".closeModalBtn");E.onclick=()=>u.close(),g=u.element().querySelector(".addBtn")},onClose:u=>{document.body.style.overflow="visible"}}),c=l.element().querySelector(".buy-links-container");V({book_image:e,author:t,title:n,buy_links:s},c),l.show();const r=u=>{u.key==="Escape"&&(l.close(),document.removeEventListener("keydown",r))};document.addEventListener("keydown",r)}const z=e=>t=>{if(t.preventDefault(),t.target.textContent==="Remove from the shopping list"){t.target.textContent="Add to shopping list",t.target.classList.remove("mobileWidth");const n=h.findIndex(i=>i._id===e._id);h.splice(n,1),Q()}else t.target.textContent="Remove from the shopping list",t.target.classList.add("mobileWidth"),h.push(e),Y();localStorage.setItem(N,JSON.stringify(h))};function U(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}function Y(){const e=document.querySelector(".item-modal"),t=document.createElement("p");t.className="congratulation",t.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",e.appendChild(t)}function Q(){const e=document.querySelector(".congratulation");e&&e.remove()}function V({book_image:e,author:t,title:n,buy_links:i},o){i.forEach(s=>{const l=document.createElement("li");o.appendChild(l);const c=document.createElement("a");l.appendChild(c);const r=document.createElement("img");c.appendChild(r),l.className="shop-link",c.target="_blank",r.className="booksIcon",r.alt=s.name+" Icon";const y=`${e}`.split("/").pop().split(".")[0];switch(s.name){case"Amazon":c.href=s.url,r.src="./img/amazon.svg";break;case"Apple Books":c.href=s.url,r.src="./img/apple.svg",r.className="booksIconApple";break;case"Books-A-Million":c.href=`https://www.booksamillion.com/p/${n}/${t}/${y}`,r.src="./img/Books-A-Million_logo.svg";break;case"Bookshop":c.href=`https://bookshop.org/search?keywords=${y}`,r.src="./img/bookshop.svg";break;case"IndieBound":c.href=`https://bookshop.org/p/books/atomic-habits-an-easy-proven-way-to-build-good-habits-break-bad-ones-james-clear/12117739?ean=${y}`,r.src="./img/indiebound.svg";break;default:c.href=s.url,r.src="./img/another-shops.svg";break}s.name!=="Amazon"&&s.name!=="Apple Books"&&s.name!=="Barnes and Noble"&&(r.width="40",r.height="40")})}const S=document.querySelector(".theme-toggle"),q=document.querySelector("head");localStorage.getItem("theme")==="true"&&(S.checked="true",O());S.addEventListener("click",X);function X(){O()}function O(){let e=S.checked;if(localStorage.setItem("theme",JSON.stringify(e)),e){const t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href","/css/dark-theme.css"),q.insertAdjacentElement("beforeend",t)}else{const t=q.querySelector('link[href="/css/dark-theme.css"]');t&&t.remove()}}export{ee as o};
//# sourceMappingURL=dark-theme-b67ca4b9.js.map
