const contadorCarritoElement = document.getElementById('gamesCounter');

function actualizarCantDejuegos() {
    const preCargado = JSON.parse(localStorage.getItem('juegosList'));

    if (preCargado !== null) {
        const contador = preCargado.reduce((a, b) => a + b.cantidad, 0);
        contadorCarritoElement.innerText = contador;
    } else {
        contadorCarritoElement.innerText = 0;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarCantDejuegos();
});

export function agregarAlCarrito(producto) {
    const preCargado = JSON.parse(localStorage.getItem('juegosList'));
    console.log(preCargado);

    if (!preCargado) {
        const listaDeCompras = getNuevoJuegoAlCarrito(producto);
        localStorage.setItem('juegosList', JSON.stringify([listaDeCompras]));
    } else {
        const indiceJuegos = preCargado.findIndex(juegosList => juegosList.id === producto.id);
        console.log(indiceJuegos);
        const sumaCompra = preCargado;
        if (indiceJuegos === -1) {
            sumaCompra.push(getNuevoJuegoAlCarrito(producto));
        } else {
            sumaCompra[indiceJuegos].cantidad++;
        }
        localStorage.setItem('juegosList', JSON.stringify(sumaCompra));
    }

    actualizarCantDejuegos();
}

function getNuevoJuegoAlCarrito(producto) {
    const listaDeCompras = producto;
    listaDeCompras.cantidad = 1;
    return listaDeCompras;
}

