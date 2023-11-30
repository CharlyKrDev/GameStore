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
        <div class="precio">u$s ${producto.precioentero}.<span>${producto.preciocentavos}</span></div>
        <button>Agregar al carrito</button>
        `

        contenedorCatalogo.appendChild(nuevosJuegos);
        nuevosJuegos.getElementsByTagName('button')[0].addEventListener('click', ()=>agregarAlCarrito(producto));

    });
}

crearCatalogoJuegos(juegosList);