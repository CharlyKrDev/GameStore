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
    let cuenta = 0;

    if (!preCargado) {
        const listaDeCompras = getNuevoJuegoAlCarrito(producto);
        localStorage.setItem('juegosList', JSON.stringify([listaDeCompras]));
        cuenta = 1;
    } else {
        const indiceJuegos = preCargado.findIndex(juegosList => juegosList.id === producto.id);
        console.log(indiceJuegos);
        const sumaCompra = preCargado;
        if (indiceJuegos === -1) {
            sumaCompra.push(getNuevoJuegoAlCarrito(producto));
            cuenta = 1
        } else {
            sumaCompra[indiceJuegos].cantidad++;
            cuenta = sumaCompra[indiceJuegos].cantidad;
        }
        localStorage.setItem('juegosList', JSON.stringify(sumaCompra));
    }

    actualizarCantDejuegos();
    return cuenta;
}

export function restarAlCarrito(producto) {
    const preCargado = JSON.parse(localStorage.getItem('juegosList'));
    const indiceJuegos = preCargado.findIndex(juegosList => juegosList.id === producto.id);
    if (preCargado[indiceJuegos].cantidad === 1) {
        preCargado.splice(indiceJuegos, 1);
    } else {
        preCargado[indiceJuegos].cantidad--;
    }
    localStorage.setItem('juegosList', JSON.stringify(preCargado));
    actualizarCantDejuegos();

}

function getNuevoJuegoAlCarrito(producto) {
    const listaDeCompras = producto;
    listaDeCompras.cantidad = 1;
    return listaDeCompras;
}

