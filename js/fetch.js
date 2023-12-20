function ObtenerInformacionProductos() {

    return new Promise((resolve, reject) => {

        fetch('../JSON/productos.json')

            .then(response => {

                debugger

                if (!response.ok) {

                    throw new Error("Error al cargar la API, comunícate con el administrador");

                }

                return response.json();

            })

            .then(data => resolve(data))

            .catch(error => reject(error));

    });

}

async function main() {

    try {


        const { crearCatalogoJuegos } = await import('./index.js');

        const informacionProductos = await ObtenerInformacionProductos();

        crearCatalogoJuegos(informacionProductos);


    } catch (error) {

        console.error("Error en la app:", error);

    }

}


main();