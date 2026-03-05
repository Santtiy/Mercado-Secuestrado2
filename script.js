// Datos de productos simulados
const productosData = [
    { id: 1, nombre: "iPhone 14 Pro Max 256GB", precio: 4599000, descuento: 15, envioGratis: true, nuevo: true, icono: "fa-mobile-alt" },
    { id: 2, nombre: "Samsung Smart TV 55'' 4K UHD", precio: 2299000, descuento: 20, envioGratis: true, nuevo: false, icono: "fa-tv" },
    { id: 3, nombre: "PlayStation 5 Digital Edition", precio: 2799000, descuento: 0, envioGratis: true, nuevo: true, icono: "fa-gamepad" },
    { id: 4, nombre: "Laptop HP Pavilion 15.6'' i7", precio: 3499000, descuento: 10, envioGratis: true, nuevo: false, icono: "fa-laptop" },
    { id: 5, nombre: "Apple AirPods Pro 2da Gen", precio: 899000, descuento: 12, envioGratis: true, nuevo: true, icono: "fa-headphones" },
    { id: 6, nombre: "Bicicleta Montaña GW 29''", precio: 1299000, descuento: 25, envioGratis: false, nuevo: false, icono: "fa-bicycle" },
    { id: 7, nombre: "Nevera Samsung 21 pies", precio: 2199000, descuento: 18, envioGratis: true, nuevo: false, icono: "fa-snowflake" },
    { id: 8, nombre: "Zapatillas Nike Air Max 2023", precio: 459000, descuento: 30, envioGratis: true, nuevo: true, icono: "fa-shoe-prints" }
];

const ofertasData = [
    { id: 1, nombre: "Audífonos Bluetooth JBL", precio: 129000, descuento: 50, icono: "fa-headphones-alt" },
    { id: 2, nombre: "Smartwatch Xiaomi Band 7", precio: 179000, descuento: 40, icono: "fa-clock" },
    { id: 3, nombre: "Mochila para Laptop", precio: 89000, descuento: 35, icono: "fa-backpack" },
    { id: 4, nombre: "Teclado Mecánico RGB", precio: 249000, descuento: 45, icono: "fa-keyboard" },
    { id: 5, nombre: "Mouse Gamer Logitech", precio: 159000, descuento: 38, icono: "fa-mouse" },
    { id: 6, nombre: "Webcam Full HD 1080p", precio: 199000, descuento: 42, icono: "fa-video" }
];

// Variables globales
let carrito = [];
let productosCargados = 8;

// Formatear precio
function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(precio);
}

// Calcular precio con descuento
function calcularPrecioConDescuento(precio, descuento) {
    return precio - (precio * descuento / 100);
}

// Crear tarjeta de producto
function crearProductoCard(producto) {
    const precioFinal = producto.descuento > 0 ? calcularPrecioConDescuento(producto.precio, producto.descuento) : producto.precio;
    return `
        <div class="product-card" data-id="${producto.id}">
            ${producto.nuevo ? '<span class="product-badge">NUEVO</span>' : ''}
            <div class="product-image"><i class="fas ${producto.icono}"></i></div>
            <h3 class="product-title">${producto.nombre}</h3>
            <div class="product-price">${formatearPrecio(precioFinal)}</div>
            ${producto.descuento > 0 ? `<div class="product-discount">${producto.descuento}% OFF</div>` : ''}
            ${producto.envioGratis ? `<div class="product-shipping"><i class="fas fa-truck"></i> Envío gratis</div>` : ''}
        </div>
    `;
}

// Crear tarjeta de oferta
function crearOfertaCard(oferta) {
    const precioFinal = calcularPrecioConDescuento(oferta.precio, oferta.descuento);
    return `
        <div class="deal-card" data-id="${oferta.id}">
            <div class="deal-image"><i class="fas ${oferta.icono}"></i></div>
            <div class="deal-discount">${oferta.descuento}% OFF</div>
            <h4>${oferta.nombre}</h4>
            <div class="deal-price">${formatearPrecio(precioFinal)}</div>
            <div style="text-decoration: line-through; color: #999; font-size: 0.9rem;">${formatearPrecio(oferta.precio)}</div>
        </div>
    `;
}

// Cargar productos
function cargarProductos() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = productosData.map(crearProductoCard).join('');
}

// Cargar ofertas
function cargarOfertas() {
    const dealsGrid = document.getElementById('dealsGrid');
    dealsGrid.innerHTML = ofertasData.map(crearOfertaCard).join('');
}

// Buscar productos
function buscarProductos() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const sectionTitle = document.querySelector('#productos .section-title');
    const productsGrid = document.getElementById('productsGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    if (!query) {
        sectionTitle.textContent = 'Productos Destacados';
        loadMoreBtn.style.display = 'block';
        cargarProductos();
        return;
    }

    const filtrados = productosData.filter(p => p.nombre.toLowerCase().includes(query));
    sectionTitle.innerHTML = `<span style="font-weight: normal; font-size: 1.2rem;">${filtrados.length} resultados para </span>"${query}"`;
    loadMoreBtn.style.display = 'none';

    productsGrid.innerHTML = filtrados.length ? filtrados.map(crearProductoCard).join('') : `
        <div style="grid-column: 1/-1; text-align:center; padding:60px 20px; background:white; border-radius:8px; box-shadow:var(--shadow);">
            <i class="fas fa-search" style="font-size:4rem; color:#e6e6e6; margin-bottom:20px;"></i>
            <h3 style="font-size:1.5rem; color:var(--dark-color); margin-bottom:10px;">No hay publicaciones que coincidan con tu búsqueda.</h3>
            <ul style="list-style:none; color:#666; font-size:1rem; text-align:left; max-width:400px; margin:0 auto;">
                <li style="margin-bottom:8px;">• <strong>Revisa la ortografía</strong> de la palabra.</li>
                <li style="margin-bottom:8px;">• Utiliza <strong>palabras más genéricas</strong> o menos palabras.</li>
                <li>• Navega por las <strong>categorías</strong> para encontrar un producto similar.</li>
            </ul>
        </div>
    `;
}

// Agregar al carrito
function agregarAlCarrito(id) {
    const producto = productosData.find(p => p.id === id);
    if (producto) {
        carrito.push(producto);
        actualizarContadorCarrito();
        mostrarNotificacion('Producto agregado al carrito');
    }
}

// Actualizar contador
function actualizarContadorCarrito() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = carrito.length;
    cartCount.style.transform = 'scale(1.3)';
    setTimeout(() => cartCount.style.transform = 'scale(1)', 200);
}

// Mostrar notificación
function mostrarNotificacion(mensaje) {
    const noti = document.createElement('div');
    noti.textContent = mensaje;
    noti.style.cssText = `
        position:fixed; top:100px; right:20px;
        background-color:var(--success-color); color:white;
        padding:15px 25px; border-radius:8px;
        box-shadow:0 4px 12px rgba(0,0,0,0.2);
        z-index:10000; animation:slideIn 0.3s ease-out;
    `;
    document.body.appendChild(noti);
    setTimeout(() => { noti.style.animation = 'slideOut 0.3s ease-out'; setTimeout(() => document.body.removeChild(noti),300); }, 3000);
}

// Contador de ofertas
function iniciarContador() {
    const countdownElement = document.getElementById('countdown');
    const tiempoFinal = new Date().getTime() + (24*60*60*1000);
    const intervalo = setInterval(() => {
        const diferencia = tiempoFinal - new Date().getTime();
        if (diferencia < 0) { clearInterval(intervalo); countdownElement.innerHTML="¡Ofertas terminadas!"; return; }
        const horas = Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));
        const minutos = Math.floor((diferencia%(1000*60*60))/(1000*60));
        const segundos = Math.floor((diferencia%(1000*60))/1000);
        countdownElement.innerHTML = `${String(horas).padStart(2,'0')}:${String(minutos).padStart(2,'0')}:${String(segundos).padStart(2,'0')}`;
    }, 1000);
}

// Event listeners
document.getElementById('searchBtn').addEventListener('click', buscarProductos);
document.getElementById('searchInput').addEventListener('keypress', e => { if(e.key==='Enter') buscarProductos(); });
document.getElementById('loadMoreBtn').addEventListener('click', () => mostrarNotificacion('No hay más productos por ahora'));

document.addEventListener('click', e => {
    const productCard = e.target.closest('.product-card');
    if(productCard) agregarAlCarrito(parseInt(productCard.dataset.id));
});

// Inicializar página
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
    cargarOfertas();
    iniciarContador();
    console.log('%c¡Bienvenido a Mercado Secuestrado!', 'color:#3483FA; font-size:20px; font-weight:bold;');
});

// Scroll to top
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => { scrollTopBtn.classList.toggle('show', window.pageYOffset>300); });
scrollTopBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// Animaciones CSS dinámicas
const style = document.createElement('style');
style.textContent = `
@keyframes slideIn { from {transform:translateX(400px);opacity:0;} to {transform:translateX(0);opacity:1;} }
@keyframes slideOut { from {transform:translateX(0);opacity:1;} to {transform:translateX(400px);opacity:0;} }
`;
document.head.appendChild(style);

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{ e.preventDefault(); const t=document.querySelector(a.getAttribute('href')); if(t) t.scrollIntoView({behavior:'smooth', block:'start'}); }));