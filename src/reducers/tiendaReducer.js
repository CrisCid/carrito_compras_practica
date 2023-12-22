
const estadoInicial = {
    productos: [
        { id: 1, nombre: 'Air Jordan 1 Zoom CMFT 2', marca: 'Nike', precio: 152990,imagen: 'https://nikeclprod.vtexassets.com/arquivos/ids/723484-1200-1200?v=638241050045270000&width=1200&height=1200&aspect=true' },
        { id: 2, nombre: 'ADVANTAGE', marca: 'Adidas ', precio: 64990, imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/da74b3ffcf3445deacaf93c1f33c6e3d_9366/Zapatillas_Advantage_Negro_IF2987_01_standard.jpg' },
        { id: 3, nombre: 'PS5', marca: 'Sony', precio: 572990, imagen: 'https://www.pcfactory.cl/public/foto/48854/4_1000.jpg?t=1690300273550' },
        { id: 4, nombre: 'Galaxy S23 Ultra', marca: 'Samsung ', precio: 834990, imagen: 'https://http2.mlstatic.com/D_NQ_NP_634820-MLU72491363640_102023-O.webp' },
        { id: 5, nombre: 'Air Jordan 1 Zoom CMFT 2', marca: 'Nike', precio: 152990, imagen: 'https://nikeclprod.vtexassets.com/arquivos/ids/723484-1200-1200?v=638241050045270000&width=1200&height=1200&aspect=true' },
        { id: 6, nombre: 'ADVANTAGE', marca: 'Adidas', precio: 64990, imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/da74b3ffcf3445deacaf93c1f33c6e3d_9366/Zapatillas_Advantage_Negro_IF2987_01_standard.jpg' },
        { id: 7, nombre: 'PS5', marca: 'Sony', precio: 572990, imagen: 'https://www.pcfactory.cl/public/foto/48854/4_1000.jpg?t=1690300273550' },
        { id: 8, nombre: 'Galaxy S23 Ultra', marca: 'Samsung ', precio: 834990, imagen: 'https://http2.mlstatic.com/D_NQ_NP_634820-MLU72491363640_102023-O.webp' }
    ],
    carrito: [],

};

//  el reducer va a recibir un estado
//  y una accion, la cual determinara que se hara "eliminar, agregar, actualizar"
// el reducer es una funcion que se va a encargar de administrar el estado global de la aplicacion
const reducer = (estado = estadoInicial, accion) => {
    
    switch (accion.type) {
        case 'AGREGAR_PRODUCTO_AL_CARRITO':

            const { title, idProductoAAgregar, price, images } = accion;

            // Si el carrito esta vacio entonces agregamos el product
            if (estado.carrito.length === 0) {
                return {
                    ...estado,
                    carrito: [{ id: idProductoAAgregar, title: title, cantidad: 1, price: price,images: images}],
                

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
                            const price = nuevoCarrito[index].price;
                            const precios = price;
                            nuevoCarrito[index] = {
                                id: idProductoAAgregar,
                                title: title,
                                cantidad: cantidad + 1,
                                images: images,
                                price: precios,
                                
                            }
                        }
                    });
                    // de otra forma entonces agregamos el producto al arreglo
                } else {
                    nuevoCarrito.push({
                        id: idProductoAAgregar,
                        title: title,
                        cantidad: 1,
                        price: price,
                        images: images,
                        
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