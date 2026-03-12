(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const x=[{id:1,nombre:"iPhone 14 Pro Max 256GB",marca:"Apple",categoria:"Celulares y Smartphones",precio:4599e3,descuento:15,envioGratis:!0,nuevo:!0,icono:"fa-mobile-alt"},{id:2,nombre:"Samsung Smart TV 55'' 4K UHD",marca:"Samsung",categoria:"Televisores",precio:2299e3,descuento:20,envioGratis:!0,nuevo:!1,icono:"fa-tv"},{id:3,nombre:"PlayStation 5 Digital Edition",marca:"Sony",categoria:"Consolas",precio:2799e3,descuento:0,envioGratis:!0,nuevo:!0,icono:"fa-gamepad"},{id:4,nombre:"Laptop HP Pavilion 15.6'' i7",marca:"HP",categoria:"Computación",precio:3499e3,descuento:10,envioGratis:!0,nuevo:!1,icono:"fa-laptop"},{id:5,nombre:"Apple AirPods Pro 2da Gen",marca:"Apple",categoria:"Audio",precio:899e3,descuento:12,envioGratis:!0,nuevo:!0,icono:"fa-headphones"},{id:6,nombre:"Bicicleta Montaña GW 29''",marca:"GW",categoria:"Deportes",precio:1299e3,descuento:25,envioGratis:!1,nuevo:!1,icono:"fa-bicycle"},{id:7,nombre:"Nevera Samsung 21 pies",marca:"Samsung",categoria:"Electrodomésticos",precio:2199e3,descuento:18,envioGratis:!0,nuevo:!1,icono:"fa-snowflake"},{id:8,nombre:"Zapatillas Nike Air Max 2023",marca:"Nike",categoria:"Calzado",precio:459e3,descuento:30,envioGratis:!0,nuevo:!0,icono:"fa-shoe-prints"}],O=[{id:1,nombre:"Audífonos Bluetooth JBL",precio:129e3,descuento:50,icono:"fa-headphones-alt"},{id:2,nombre:"Smartwatch Xiaomi Band 7",precio:179e3,descuento:40,icono:"fa-clock"},{id:3,nombre:"Mochila para Laptop",precio:89e3,descuento:35,icono:"fa-backpack"},{id:4,nombre:"Teclado Mecánico RGB",precio:249e3,descuento:45,icono:"fa-keyboard"},{id:5,nombre:"Mouse Gamer Logitech",precio:159e3,descuento:38,icono:"fa-mouse"},{id:6,nombre:"Webcam Full HD 1080p",precio:199e3,descuento:42,icono:"fa-video"}];let B=[],I=!1;function w(e){return new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0}).format(e)}function T(e,t){return e-e*t/100}function C(e){const t=e.descuento>0?T(e.precio,e.descuento):e.precio;return`
        <div class="product-card" data-id="${e.id}">
            ${e.nuevo?'<span class="product-badge">NUEVO</span>':""}
            <div class="product-image">
                <i class="fas ${e.icono}"></i>
            </div>
            <h3 class="product-title">${e.nombre}</h3>
            <div class="product-price">${w(t)}</div>
            ${e.descuento>0?`
                <div class="product-discount">${e.descuento}% OFF</div>
            `:""}
            ${e.envioGratis?`
                <div class="product-shipping">
                    <i class="fas fa-truck"></i>
                    Envío gratis
                </div>
            `:""}
        </div>
    `}function P(e){const t=e.precio,n=T(e.precio,e.descuento);return`
        <div class="deal-card" data-id="${e.id}">
            <div class="deal-image">
                <i class="fas ${e.icono}"></i>
            </div>
            <div class="deal-discount">${e.descuento}% OFF</div>
            <h4>${e.nombre}</h4>
            <div class="deal-price">${w(n)}</div>
            <div style="text-decoration: line-through; color: #999; font-size: 0.9rem;">
                ${w(t)}
            </div>
        </div>
    `}function M(){const e=document.getElementById("productsGrid"),t=x.map(n=>C(n)).join("");e.innerHTML=t}function D(){const e=document.getElementById("dealsGrid"),t=O.map(n=>P(n)).join("");e.innerHTML=t}function b(){const e=document.getElementById("searchInput"),t=e.value.toLowerCase().trim(),n=document.querySelector("#productos .section-title"),u=document.getElementById("productsGrid"),a=document.getElementById("loadMoreBtn"),r=document.querySelector(".hero-banner"),l=document.querySelector(".categories");if(t===""){n.textContent="Productos Destacados",a.style.display="block",r&&(r.style.display="block"),l&&(l.style.display="block"),M();return}const p=x.filter(d=>{const m=t.split(" "),h=`${d.nombre} ${d.marca||""} ${d.categoria||""}`.toLowerCase();return m.every(g=>h.includes(g))});if(r&&(r.style.display="none"),l&&(l.style.display="none"),n.innerHTML=`<span style="font-weight: normal; font-size: 1.2rem;">${p.length} resultados para </span>"${e.value}"`,a.style.display="none",p.length===0)u.innerHTML=`
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: white; border-radius: 8px; box-shadow: var(--shadow);">
                <i class="fas fa-search" style="font-size: 4rem; color: #e6e6e6; margin-bottom: 20px;"></i>
                <h3 style="font-size: 1.5rem; color: var(--dark-color); margin-bottom: 10px;">No hay publicaciones que coincidan con tu búsqueda.</h3>
                <ul style="list-style: none; color: #666; font-size: 1rem; text-align: left; max-width: 400px; margin: 0 auto;">
                    <li style="margin-bottom: 8px;">• <strong>Revisa la ortografía</strong> de la palabra.</li>
                    <li style="margin-bottom: 8px;">• Utiliza <strong>palabras más genéricas</strong> o menos palabras.</li>
                    <li>• Navega por las <strong>categorías</strong> para encontrar un producto similar.</li>
                </ul>
            </div>
        `;else{const d=p.map(m=>C(m)).join("");u.innerHTML=d}const f=document.getElementById("productos");f&&f.scrollIntoView({behavior:"smooth",block:"start"})}document.getElementById("searchBtn").addEventListener("click",b);document.getElementById("searchInput").addEventListener("keypress",e=>{e.key==="Enter"&&b()});function G(){if(I)return;const e=document.querySelector(".nav-menu"),t=document.getElementById("navToggle"),n=document.querySelectorAll(".nav-menu > li > a"),u=document.querySelectorAll(".submenu a"),a=document.querySelector(".has-submenu"),r=document.querySelector(".submenu-toggle"),l=document.querySelector(".logo"),p=document.querySelector(".btn-primary");if(!e||!t)return;const f=o=>{t.setAttribute("aria-expanded",o?"true":"false"),t.setAttribute("aria-label",o?"Cerrar menu":"Abrir menu"),t.innerHTML=o?'<i class="fas fa-times"></i>':'<i class="fas fa-bars"></i>'},d=o=>{!a||!r||(a.classList.toggle("open",o),r.setAttribute("aria-expanded",o?"true":"false"))},m=()=>{e.classList.remove("show"),f(!1),d(!1)},h=o=>{if(!o||window.innerWidth<=768){e.style.setProperty("--indicator-opacity","0");return}const i=o.getBoundingClientRect(),c=e.getBoundingClientRect(),s=Math.max(0,i.left-c.left);e.style.setProperty("--indicator-left",`${s}px`),e.style.setProperty("--indicator-width",`${i.width}px`),e.style.setProperty("--indicator-opacity","1")},g=()=>{const o=document.querySelector(".nav-menu > li > a.active");h(o||n[0])};t.addEventListener("click",()=>{const o=e.classList.toggle("show");f(o)});const y=o=>{n.forEach(i=>{const c=i.getAttribute("href")===`#${o}`;i.classList.toggle("active",c)}),g()},E=()=>{const o=window.scrollY+140,i=[...n].map(s=>s.getAttribute("href")).filter(s=>s&&s.startsWith("#")).map(s=>document.querySelector(s)).filter(Boolean);let c=i[0];i.forEach(s=>{o>=s.offsetTop&&(c=s)}),c&&y(c.id)};n.forEach(o=>{o.addEventListener("click",i=>{i.preventDefault();const c=o.getAttribute("href");if(!c||!c.startsWith("#"))return;const s=document.querySelector(c);s&&(s.scrollIntoView({behavior:"smooth",block:"start"}),y(c.slice(1)),window.innerWidth<=768&&m())}),o.addEventListener("mouseenter",()=>h(o)),o.addEventListener("focus",()=>h(o))}),e.addEventListener("mouseleave",g),r&&a&&r.addEventListener("click",()=>{const o=r.getAttribute("aria-expanded")==="true";d(!o)}),u.forEach(o=>{o.addEventListener("click",i=>{i.preventDefault();const c=document.querySelector("#productos"),s=o.dataset.category||"",S=document.getElementById("searchInput");c&&c.scrollIntoView({behavior:"smooth",block:"start"}),S&&s&&(S.value=s,b()),y("productos"),window.innerWidth<=768?m():d(!1)})});const A=[...n].map(o=>o.getAttribute("href")).filter(o=>o&&o.startsWith("#")).map(o=>document.querySelector(o)).filter(Boolean),$=new IntersectionObserver(o=>{o.forEach(i=>{i.isIntersecting&&y(i.target.id)})},{threshold:.35,rootMargin:"-80px 0px -45% 0px"});A.forEach(o=>$.observe(o)),E(),g(),l&&l.addEventListener("click",o=>{o.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),E(),window.innerWidth<=768&&m()}),p&&p.addEventListener("click",()=>{const o=document.getElementById("ofertas");o&&(o.scrollIntoView({behavior:"smooth",block:"start"}),y("ofertas"))}),document.addEventListener("click",o=>{!o.target.closest(".nav-bottom")&&window.innerWidth<=768&&e.classList.contains("show")&&m(),!o.target.closest(".has-submenu")&&a&&a.classList.contains("open")&&d(!1)}),document.addEventListener("keydown",o=>{o.key==="Escape"&&(e.classList.contains("show")&&m(),d(!1))}),window.addEventListener("resize",()=>{window.innerWidth>768&&(e.classList.remove("show"),f(!1),d(!1)),E(),g()}),window.addEventListener("scroll",E,{passive:!0}),I=!0}function N(){const e=document.getElementById("countdown"),n=new Date().getTime()+24*60*60*1e3,u=setInterval(()=>{const a=new Date().getTime(),r=n-a;if(r<0){clearInterval(u),e.innerHTML="¡Ofertas terminadas!";return}const l=Math.floor(r%(1e3*60*60*24)/(1e3*60*60)),p=Math.floor(r%(1e3*60*60)/(1e3*60)),f=Math.floor(r%(1e3*60)/1e3);e.innerHTML=`${String(l).padStart(2,"0")}:${String(p).padStart(2,"0")}:${String(f).padStart(2,"0")}`},1e3)}const L=document.getElementById("scrollTopBtn");window.addEventListener("scroll",()=>{window.pageYOffset>300?L.classList.add("show"):L.classList.remove("show")});L.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){if(this.closest(".nav-menu"))return;t.preventDefault();const n=document.querySelector(this.getAttribute("href"));n&&n.scrollIntoView({behavior:"smooth",block:"start"})})});const z={threshold:.1,rootMargin:"0px 0px -50px 0px"},H=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.style.opacity="1",t.target.style.transform="translateY(0)")})},z);function F(){document.querySelectorAll(".product-card, .deal-card, .service-card, .team-member").forEach(e=>{e.style.opacity="0",e.style.transform="translateY(20px)",e.style.transition="all 0.5s ease-out",H.observe(e)})}function W(e){const t=x.find(n=>n.id===e);t&&(B.push(t),V(),v("Producto agregado al carrito"))}function V(){const e=document.querySelector(".cart-count");e.textContent=B.length,e.style.transform="scale(1.3)",setTimeout(()=>{e.style.transform="scale(1)"},200)}function v(e){const t=document.createElement("div");t.textContent=e,t.style.cssText=`
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: var(--success-color);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `,document.body.appendChild(t),setTimeout(()=>{t.style.animation="slideOut 0.3s ease-out",setTimeout(()=>{document.body.removeChild(t)},300)},3e3)}document.addEventListener("click",e=>{if(e.target.closest(".product-card")){const t=e.target.closest(".product-card"),n=parseInt(t.dataset.id);W(n)}});document.getElementById("loadMoreBtn").addEventListener("click",()=>{v("Cargando más productos..."),setTimeout(()=>{v("No hay más productos disponibles por ahora")},1e3)});document.querySelectorAll(".category-item").forEach(e=>{e.addEventListener("click",function(){const t=this.querySelector("h3").textContent;v(`Explorando categoría: ${t}`)})});window.addEventListener("load",()=>{F()});window.addEventListener("scroll",()=>{const e=window.pageYOffset,t=document.querySelector(".banner-content");t&&(t.style.transform=`translateY(${e*.5}px)`,t.style.opacity=1-e/500)});const q=document.createElement("style");q.textContent=`
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;document.head.appendChild(q);document.addEventListener("DOMContentLoaded",()=>{G(),M(),D(),N(),console.log("%c¡Bienvenido a Mercado Secuestrado!","color: #3483FA; font-size: 20px; font-weight: bold;"),console.log("%cDesarrollado con ❤️ por el equipo de desarrollo","color: #666; font-size: 14px;")});document.querySelectorAll(".member-social a, .social-links a").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),v("Funcionalidad de redes sociales en desarrollo")})});document.querySelectorAll(".footer-section a, .app-badge").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.textContent.trim();n&&v(`Navegando a: ${n}`)})});let k;document.getElementById("searchInput").addEventListener("input",()=>{clearTimeout(k),k=setTimeout(()=>{const e=document.getElementById("searchInput").value;(e.length>2||e.length===0)&&b()},500)});console.log("✅ Mercado Secuestrado cargado correctamente");
