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
                actualizarTotales(); // Actualiza los totales antes de recrear el catálogo
                crearCatalogoJuegos();
            });

            const spanContador = document.createElement('span');
            spanContador.classList = 'contador';
            
            // Verificar si la cantidad es mayor que cero antes de mostrar el contador
            spanContador.textContent = producto.cantidad > 0 ? `${producto.cantidad}` : '';

            const buttonMas = document.createElement('button');
            buttonMas.textContent = '+';
            buttonMas.addEventListener('click', () => {
                agregarAlCarrito(producto);
                actualizarTotales(); // Actualiza los totales antes de recrear el catálogo
                crearCatalogoJuegos();
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
actualizarTotales();

function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem('juegosList'));
    let unidades = 0;
    let precioTotal = 0;

    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            unidades += producto.cantidad;
            precioTotal += producto.precioVigente * producto.cantidad;
        });
    }

    unidadesElement.innerText = unidades;
    precioTotalElement.innerText = precioTotal;
}
