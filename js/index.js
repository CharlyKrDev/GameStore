import { juegosList } from "./products.js";
import { agregarAlCarrito } from "./carrito.js";



const contenedorCatalogo = document.getElementById('contenedorJuegos')

function crearCatalogoJuegos(productos) {
    juegosList.forEach(producto => {
        const nuevosJuegos = document.createElement('article');
        nuevosJuegos.classList = 'cardsCatalogoJuegos';
        nuevosJuegos.innerHTML = `
        <img src='${producto.img}'>
        <h2>${producto.nombre}</h2>
        <p>${producto.descripcion}</p>
        <section class="precios">u$s ${producto.precioVigente} <span class = 'precioAnterior'>${producto.precioAnterior}</span></section>
        <button>Agregar al carrito</button>
        `

        contenedorCatalogo.appendChild(nuevosJuegos);
        nuevosJuegos.getElementsByTagName('button')[0].addEventListener('click', ()=>agregarAlCarrito(producto));

    });
}

crearCatalogoJuegos(juegosList);