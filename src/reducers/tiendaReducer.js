
const estadoInicial = {
    carrito: [],
};
const reducer = (estado = estadoInicial, accion) => {
    
    switch (accion.type) {
        case 'AGREGAR_PRODUCTO_AL_CARRITO':

            const { title, idProductoAAgregar, price, image } = accion;

            if (estado.carrito.length === 0) {
                return {
                    ...estado,
                    carrito: [{ id: idProductoAAgregar, title: title, cantidad: 1, price: price,image: image}],
                

                }
            } else {


                const nuevoCarrito = [...estado.carrito];

                const yaEstaEnCarrito = nuevoCarrito.filter((productoDeCarrito) => {
                    return productoDeCarrito.id === idProductoAAgregar
                }).length > 0;

                if (yaEstaEnCarrito) {

                    nuevoCarrito.forEach((productoDeCarrito, index) => {

                        if (productoDeCarrito.id === idProductoAAgregar) {
                            const cantidad = nuevoCarrito[index].cantidad;
                            const price = nuevoCarrito[index].price;
                            const precios = price;
                            nuevoCarrito[index] = {
                                id: idProductoAAgregar,
                                title: title,
                                cantidad: cantidad + 1,
                                image: image,
                                price: precios,
                                
                            }
                     
                        }

                    });
              
                } else {
                    nuevoCarrito.push({
                        id: idProductoAAgregar,
                        title: title,
                        cantidad: 1,
                        price: price,
                        image: image,
                        
                    });
         
                }
                return {
                    
                    ...estado,
                    carrito: nuevoCarrito
                    
                }
                
            }
        default:
           
            return estado;
    }


}

export default reducer;