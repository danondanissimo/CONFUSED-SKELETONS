(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m=document.querySelector(".modal-close"),u=document.querySelector(".modal-backdrop"),l=document.querySelector(".sign-up-form"),d=document.querySelector(".log-out-button"),c="sign-up-form-state";JSON.parse(localStorage.getItem(c));l.addEventListener("submit",s=>{localStorage.removeItem(c),s.preventDefault();const r=s.currentTarget.elements.name.value.trim(),i=s.currentTarget.elements.email.value.trim(),o=s.currentTarget.elements.password.value.trim();if(r.length===0||i.length===0||o.length===0)alert("All form fields must be filled in");else{const e={name:r,email:i,password:o};l.reset(),localStorage.setItem(c,JSON.stringify(e)),JSON.stringify(e)!==0&&(f.forEach(t=>{t.classList.remove("hidden")}),n.replaceChildren(),n.insertAdjacentHTML("beforeend",`<img src=""> ${e.name}`),l.classList.add("hidden"),d.classList.remove("hidden"),d.addEventListener("click",()=>{f.forEach(t=>{t.classList.add("hidden")}),l.classList.remove("hidden"),d.classList.add("hidden"),n.replaceChildren(),n.insertAdjacentHTML("beforeend","Sign-up"),localStorage.removeItem(c)})),u.classList.add("visually-hidden")}});const f=document.querySelectorAll(".navigation-list-item"),n=document.querySelector(".modal-open");n.addEventListener("click",()=>{u.classList.remove("visually-hidden"),m.addEventListener("click",()=>{u.classList.add("visually-hidden")}),m.removeEventListener("click",()=>{})});
//# sourceMappingURL=commonHelpers.js.map