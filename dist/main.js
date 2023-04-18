(()=>{"use strict";function e(e,t){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h2");a.textContent=e;const o=document.createElement("p");o.classList.add("food-des"),o.textContent=t;const c=document.createElement("div");c.classList.add("img-container");const d=document.createElement("img");return d.src=`images/${e.toLowerCase()}.jpg`,d.alt=`${e}`,c.appendChild(d),n.appendChild(a),n.appendChild(c),n.appendChild(o),n}function t(e){const t=document.createElement("p");return t.classList.add("paragraph"),t.textContent=e,t}const n=function(){console.log("loadHome ran");const e=document.querySelector(".main-area");e.textContent="";const n=document.createElement("div");n.classList.add("home"),e.appendChild(n);const a=document.createElement("img"),o=document.createElement("p");o.classList.add("chef-pic"),a.src="images/Hotpot.png",a.alt="Picture of chef",o.appendChild(a),n.appendChild(t("Free food if you can find us!")),n.appendChild(t("Made with passion since 1218 bc")),n.appendChild(o),n.appendChild(t("Don't worry about it"))};function a(){const a=document.createElement("header");a.classList.add("header");const c=document.createElement("h1");return c.classList.add("rest-name"),c.textContent="Ranger Station",a.appendChild(c),a.appendChild(function(){const a=document.createElement("div");a.classList.add("nav");const c=document.createElement("button");c.classList.add("nav-button"),c.textContent="Home",c.addEventListener("click",(e=>{e.target.classList.contains("active")||(o(c),n())}));const d=document.createElement("button");d.classList.add("nav-button"),d.textContent="Menu",d.addEventListener("click",(t=>{t.target.classList.contains("active")||(o(d),function(){console.log("loadMenu ran");const t=document.querySelector(".main-area");t.textContent="";const n=document.createElement("div");n.classList.add("menu"),t.appendChild(n),n.appendChild(e("Margherita","Tomatoes, Mozzarella cheese, Garlic, fresh Basil, and extra-virgin Olive oil")),n.appendChild(e("Pepperoni","Thinly sliced Pepperoni")),n.appendChild(e("Neapolitan","Tomato sauce, fresh Basil, Parmesan cheese, Olive oil, Black pepper")),n.appendChild(e("Mixed","Choose up to 4 combinations"))}())}));const s=document.createElement("button");return s.classList.add("nav-button"),s.textContent="About",s.addEventListener("click",(e=>{e.target.classList.contains("active")||(o(s),function(){console.log("loadAbout ran");const e=document.querySelector(".main-area");e.textContent="";const n=document.createElement("div");n.classList.add("about"),e.appendChild(n);const a=document.createElement("img"),o=document.createElement("div");o.classList.add("location"),a.src="images/location.png",a.alt="Location of island",o.appendChild(a),n.appendChild(t("Join us over at Bouvet Island!")),n.appendChild(o),n.appendChild(t("Sorry, we don't take reservations"))}())})),a.appendChild(c),a.appendChild(d),a.appendChild(s),a}()),a}function o(e){console.log("activePage ran"),document.querySelectorAll(".nav-button").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const e=document.querySelector("#content");e.appendChild(a()),e.appendChild(function(){const e=document.createElement("div");return e.classList.add("main-area"),e}()),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");return t.textContent=`Copyright © ${(new Date).getFullYear()} Employed Ranger`,e.appendChild(t),e}()),console.log("web after appends"),o(document.querySelector(".nav-button")),n()}()})();