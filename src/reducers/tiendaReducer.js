const estadoInicial = {
    productos: [
        { id: 1, nombre: 'Producto 1' },
        { id: 2, nombre: 'Producto 2' },
        { id: 3, nombre: 'Producto 3' },
        { id: 4, nombre: 'Producto 4' }
    ],
    carrito: []

};

//  el reducer va a recibir un estado
//  y una accion, la cual determinara que se hara "eliminar, agregar, actualizar"
// el reducer es una funcion que se va a encargar de administrar el estado global de la aplicacion
const reducer = (estado = estadoInicial, accion) => {
    switch (accion.type) {
        case 'AGREGAR_PRODUCTO_AL_CARRITO':

            const { nombre, idProductoAAgregar } = accion;

            // Si el carrito esta vacio entonces agregamos el product
            if (estado.carrito.length === 0) {
                return {
                    ...estado,
                    carrito: [{ id: idProductoAAgregar, nombre: nombre, cantidad: 1 }]
                }
            } else {

                // Si ya tiene el producto entonces actualizamos el valor
                // Si no tiene el producto entonces lo agregamos

                // Para poder editar el arreglo lo tenemos que clonar
                const nuevoCarrito = [...estado.carrito];
                // Comprobamos si el carrito ya tiene el id del producto a agregar
                const yaEstaEnCarrito = nuevoCarrito.filter((productoDeCarrito) => {
                    return productoDeCarrito.id === idProductoAAgregar
                }).length > 0;
                // Si ya esta en carrito, se tiene que actualizar
                if (yaEstaEnCarrito) {
                    // Para ello tenemos que buscar su posicion en el arreglo
                    // y en base a su posicion actualizamos el valor
                    nuevoCarrito.forEach((productoDeCarrito, index) => {

                        // Si el producto del id es igual al producto que queremos agregar, entonces sera la misma cantidad mas 1
                        if (productoDeCarrito.id === idProductoAAgregar) {
                            const cantidad = nuevoCarrito[index].cantidad;
                            nuevoCarrito[index] = {
                                id: idProductoAAgregar,
                                nombre: nombre,
                                cantidad: cantidad + 1
                            }
                        }
                    });
                    // de otra forma entonces agregamos el producto al arreglo
                } else {
                    nuevoCarrito.push({
                        id: idProductoAAgregar,
                        nombre: nombre,
                        cantidad: 1
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