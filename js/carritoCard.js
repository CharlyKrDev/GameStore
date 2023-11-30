import { agregarAlCarrito } from "./carrito.js";



const contenedorCatalogo = document.getElementById('contenedorJuegos')

function crearCatalogoJuegos() {
        const productos = JSON.parse(localStorage.getItem('juegosList'))
        console.log(productos)
        if(productos && productos.length >0){
        productos.forEach(producto => {
        const nuevosJuegos = document.createElement('article');
        nuevosJuegos.classList = 'cardsCatalogoJuegos';
        nuevosJuegos.innerHTML = `
        <img src='${producto.img}'>
        <h2>${producto.nombre}</h2>
        <p>${producto.descripcion}</p>
        <button>-</button>
        <span class='contador'>0</span>
        <button>+</button>
        `

        contenedorCatalogo.appendChild(nuevosJuegos);
        nuevosJuegos.getElementsByTagName('button')[0].addEventListener('click', ()=>agregarAlCarrito(producto));

    });
}
}

crearCatalogoJuegos();