const estadoInicial = {
    productos: [
        { id: 1, nombre: 'Air Jordan 1 Zoom CMFT 2', imagen: 'https://nikeclprod.vtexassets.com/arquivos/ids/723484-1200-1200?v=638241050045270000&width=1200&height=1200&aspect=true' },
        { id: 2, nombre: 'Adidas ADVANTAGE', imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/da74b3ffcf3445deacaf93c1f33c6e3d_9366/Zapatillas_Advantage_Negro_IF2987_01_standard.jpg' },
        { id: 3, nombre: 'PS5', imagen: 'https://www.pcfactory.cl/public/foto/48854/4_1000.jpg?t=1690300273550' },
        { id: 4, nombre: 'Samsung Galaxy S23 Ultra', imagen: 'https://http2.mlstatic.com/D_NQ_NP_634820-MLU72491363640_102023-O.webp' }
    ],
    carrito: [],
    blog: [
        { id: 1, nombre: 'Nike', texto: 'Es una empresa multinacional estadounidense dedicada al diseño, desarrollo, fabricación y comercialización de equipamiento deportivo: balones, calzado, ropa, equipo, accesorios y otros artículos deportivos.'},
        { id: 2, nombre: 'Adidas', texto: 'Es una compañía multinacional alemana fundada en 1949, con sede en Herzogenaurach, ciudad ubicada en Baviera. Se dedica a la fabricación de equipamiento deportivo y productos de moda (bolsos, camisas, relojes, gafas, etc.). La empresa también es patrocinadora de eventos y figuras deportivas a nivel mundial. Es el primer mayor fabricante del rubro en el mundo.'},
        { id: 3, nombre: 'Sony', texto: 'Comúnmente referida como Sony y estilizada como SONY, es una empresa multinacional japonesa con sede en Tokio (Japón) y uno de los fabricantes más importantes a nivel mundial en electrónica de consumo: audio y vídeo, computación, fotografía, videojuegos, telefonía móvil, productos profesionales, etcétera. En 2021 Sony ocupó el puesto 74 en la lista Fortune Global 500,7​ un escalafón de empresas de todo el mundo medidas por los ingresos. También se situo como la empresa 96 del mundo por capitalización de mercado. A comienzos del siglo xxi, Sony llegó a estar entre las treinta primeras de este listado en varias oportunidades.'},
        { id: 4, nombre: 'Samsung', texto: 'Es un conglomerado de empresas multinacionales con sede en Seúl, Corea del Sur. Se trata del mayor grupo empresarial surcoreano, con numerosas filiales que abarcan negocios como la electrónica de consumo, tecnología, finanzas, aseguradoras, construcción, biotecnología y sector servicios.'}
    ],
    blogActualizado: []
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
                    carrito: [{ id: idProductoAAgregar, nombre: nombre, cantidad: 1 }],
                

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