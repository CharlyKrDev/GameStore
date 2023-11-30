

export const contenedorCarrito = document.getElementById('contenedorCarrito')

export function crearListaDeCompra() {
    const productos = JSON.parse(localStorage.getItem('productos'));
    console.log(productos);
    if(productos && productos.length > 0){
    juegosList.forEach((producto) => {
        const nuevosJuegos = document.createElement('article');
        nuevosJuegos.classList = 'cardsCatalogoJuegos';
        nuevosJuegos.innerHTML = `
        <img src='${producto.img}'>
        <h2>${producto.nombre}</h2>
        <div class="precio">u$s ${producto.precioentero}.<span>${producto.preciocentavos}</span></div>
        <div>
            <button>-</button>
            <span class = 'cantidad'> 0 </span>
            <button>+</button>
        </div>

        `

        contenedorCarrito.appendChild(nuevosJuegos);
        nuevosJuegos.getElementsByTagName('button')[0].addEventListener('click', ()=>agregarAlCarrito(producto));

    });
   }
}

crearListaDeCompra();