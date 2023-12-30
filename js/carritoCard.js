import { agregarAlCarrito } from "./carrito.js";
import { restarAlCarrito } from "./carrito.js";

const contenedorCatalogo = document.getElementById('contenedorJuegos');
const unidadesElement = document.getElementById('unidades');
const precioTotalElement = document.getElementById('valorPrecioTotal');
const carritoVacioElement = document.getElementById('contenedorPrincipal');

function crearCatalogoJuegos() {
    contenedorCatalogo.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem('juegosList'));

    if (productos && productos.length > 0) {
        const nuevosJuegosArray = productos.map((producto) => {
            const nuevosJuegos = document.createElement('article');
            nuevosJuegos.classList = 'cardsCatalogoJuegos';

            const imgElement = document.createElement('img');
            imgElement.src = producto.img;

            const h2Element = document.createElement('h2');
            h2Element.textContent = producto.nombre;

            const buttonMenos = document.createElement('button');
            buttonMenos.textContent = '-';
            buttonMenos.addEventListener('click', () => {
                restarAlCarrito(producto);
                actualizarTotales();
            });

            const spanContador = document.createElement('span');
            spanContador.classList = 'contador';

            spanContador.textContent = producto.cantidad > 0 ? `${producto.cantidad}` : '';

            const buttonMas = document.createElement('button');
            buttonMas.textContent = '+';
            buttonMas.addEventListener('click', () => {
                agregarAlCarrito(producto);
                actualizarTotales();
            });

            nuevosJuegos.appendChild(imgElement);
            nuevosJuegos.appendChild(h2Element);
            nuevosJuegos.appendChild(buttonMenos);
            nuevosJuegos.appendChild(spanContador);
            nuevosJuegos.appendChild(buttonMas);

            return nuevosJuegos;
        });

        contenedorCatalogo.append(...nuevosJuegosArray);
    } else {
        carritoVacioElement.textContent = "No hay juegos en el carrito, APROVECHA alguna oferta!";
    }

    actualizarTotales();
}

crearCatalogoJuegos();

function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem('juegosList'));
    let unidades = 0;
    let precioTotal = 0;

    if (productos && productos.length > 0) {
        const spanContadores = document.querySelectorAll('.contador');

        productos.forEach(producto => {
            unidades += producto.cantidad;
            precioTotal += producto.precioVigente * producto.cantidad;
        });

        unidadesElement.innerText = unidades;
        precioTotalElement.innerText = precioTotal;

        spanContadores.forEach((spanContador, index) => {
            spanContador.textContent = productos[index].cantidad > 0 ? `${productos[index].cantidad}` : '';
        });
    } else {
        unidadesElement.innerText = 0;
        precioTotalElement.innerText = 0;
    }
}

const reiniciarCompraBtn = document.getElementById('reiniciarCompra');
if (reiniciarCompraBtn) {
    reiniciarCompraBtn.addEventListener('click', function () {
        Toastify({
            text: "¡Haz vaciado el carrito!",
            duration: 1000,
            close: true,
            gravity: "bottom",
            style: {
                background: "rgba(255,0,0, 0.6)",
            },
        }).showToast();

        setTimeout(function () {
            localStorage.clear();
            crearCatalogoJuegos();
        }, 1000);
    });
}

const btnCompra = document.getElementById('btnCompra');
if (btnCompra) {
    btnCompra.addEventListener('click', function () {
        Toastify({
            text: `¡Compra realizada correctamente!`,
            duration: 2000,
            close: true,
            gravity: "bottom",
            position: 'left',
            style: {
                background: "rgba(0, 255, 0, 0.6)"
      
