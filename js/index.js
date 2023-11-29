import { juegosList } from "./products.js";



const contenedorCatalogo = document.getElementById('contenedorJuegos')

function crearCatalogoJuegos(productos) {
    juegosList.forEach(producto => {
        const nuevosJuegos = document.createElement('article');
        nuevosJuegos.classList = 'cardsCatalogoJuegos';
        nuevosJuegos.innerHTML = `
        <img src='${producto.img}'>
        <h2>${producto.nombre}</h2>
        <h3>${producto.descripcion}</h3>
        <p>${producto.precioentero}.<span>${producto.preciocentavos}</span></p>
        <button>Agregar al carrito</button>
        `

        contenedorCatalogo.appendChild(nuevosJuegos);


    });
}

crearCatalogoJuegos(juegosList);