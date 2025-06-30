import{a as p,S as f,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="50349808-906d80db7093834bea09f6975",g="https://pixabay.com/api/";async function h(i){const s={key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(g,{params:s})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new f(".gallery a");function v(i){const s=i.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:o,comments:d,downloads:u})=>`
    <li class="gallery-item">
      <a href="${a}">
        <img class="img" src="${r}" alt="${e}" />
      </a>
    <div class="info">
  <div class="info-item">
    <p class="label">Likes:</p>
    <p class="value">${t}</p>
  </div>
  <div class="info-item">
    <p class="label">Views:</p>
    <p class="value">${o}</p>
  </div>
  <div class="info-item">
    <p class="label">Comments:</p>
    <p class="value">${d}</p>
  </div>
  <div class="info-item">
    <p class="label">Downloads:</p>
    <p class="value">${u}</p>
  </div>
</div>
</li>
  `).join("");l.insertAdjacentHTML("beforeend",s),y.refresh()}function L(){l.innerHTML=""}function b(){c.classList.remove("is-hidden")}function w(){c.classList.add("is-hidden")}const S=document.querySelector(".form");S.addEventListener("submit",async i=>{i.preventDefault();const s=i.target.elements["search-text"].value.trim();if(!s){n.warning({message:"Enter search term",position:"topRight"});return}L(),b();try{const r=await h(s);if(r.hits.length===0){n.info({message:"No images found",position:"topRight"});return}v(r.hits)}catch{n.error({message:"Something went wrong",position:"topRight"})}finally{w()}});
//# sourceMappingURL=index.js.map
