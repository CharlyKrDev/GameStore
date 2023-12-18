import { juegosList } from "./products.js";
import { agregarAlCarrito } from "./carrito.js";



const contenedorCatalogo = document.getElementById('contenedorJuegos')

function crearCatalogoJuegos(productos) {
    productos.forEach(producto => {
        const { img, nombre, descripcion, precioAnterior, precioVigente } = producto;

        const nuevosJuegos = document.createElement('article');
        nuevosJuegos.classList.add('cardsCatalogoJuegos');

        const imgElement = document.createElement('img');
        imgElement.src = img;

        const h2Element = document.createElement('h2');
        h2Element.textContent = nombre;

        const pElement = document.createElement('p');
        pElement.textContent = descripcion;

        const preciosSection = document.createElement('section');
        preciosSection.classList.add('precios');

        const precioAnteriorSpan = document.createElement('span');
        precioAnteriorSpan.classList.add('precioAnterior');
        precioAnteriorSpan.textContent = `u$s ${precioAnterior}`;

        const precioVigenteText = document.createTextNode(` u$s ${precioVigente}`);

        preciosSection.appendChild(precioAnteriorSpan);
        preciosSection.appendChild(precioVigenteText);

        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Comprar';

        nuevosJuegos.appendChild(imgElement);
        nuevosJuegos.appendChild(h2Element);
        nuevosJuegos.appendChild(pElement);
        nuevosJuegos.appendChild(preciosSection);
        nuevosJuegos.appendChild(buttonElement);

        contenedorCatalogo.appendChild(nuevosJuegos);

        buttonElement.addEventListener('click', () => {
            agregarAlCarrito(producto);

            Toastify({
                text: `¡${nombre} añadido al carrito!`,
                duration: 1000,
                close: true,
                gravity: "top",
                style: {
                    background: "linear-gradient(to right, rgba(36, 36, 36, 0.4), rgba(138, 43, 226, 0.6))"
                },
            }).showToast();
        });
    });
}

crearCatalogoJuegos(juegosList);

