function ObtenerInformacionProductos(){
    return new Promise ((resolve,reject) => {
        fetch('../JSON/productos.json')
        .then(response=>{
            if(!response.ok){ 
                throw new Error("Error al cargar la API, comunicate con el administrador");                
            }
            return response.json();
        })
        .then(data=>resolve(data))
        .catch(error=>reject(error));
    })
}
async function main(){
    try{
        const informacionProductos = await ObtenerInformacionProductos()
        mostrarProductos(informacionProductos) 
        productos = informacionProductos; 
    }catch(error){
        console.error("Error en la app :",error)
    }
}
