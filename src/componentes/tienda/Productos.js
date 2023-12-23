import React from "react";
import { connect } from "react-redux";
import "./../../css/Productos.css";
import productosApi from "../../api/productosApi";

const Productos = ({ categoria, productos, agregarProductoAlCarrito }) => {

  const categoriaa = categoria;
 
  const productss = productosApi();

  let productosFiltrados = categoriaa ? productss.filter( (producto) => producto.category.name === categoriaa.categoria)
  : productss;

  if(categoriaa.categoria === null){
    productosFiltrados = productss;
  }

  return (
    <div>
      {/* Contenedor de la parte de los productos */}
        
      <div className="contenedorProductos d-grid row d-flex col-sm-12 ">
        {productosFiltrados.map((producto, index) => {
          <p>{categoriaa.name}</p>
          return (
            /* Separacion de cada producto por columna */
            <div className="col-sm-2 mb-4 " key={index}>
              
              {/* Formato de tarjeta */}
              <div className="card col-sm-12 h-100 shadow">
                <div
                  className="product m-2 card-body d-flex flex-column me-5 ms-5 mb-0 mt-0"
                  key={index}
                >
                  <img
                    className="mb-3 tiendaimagenes rounded"
                    src={producto.images}
                    alt="Imagen"
                  ></img>
                  <div className="d-flex flex-column  align-center align-items-center ">
                    <p className="fs-6 mb-0 text-break font-monospace text-nowrap texto">
                      {producto.title}
                    </p>

                    <p className="fs-6 mb-0">${producto.price}</p>

                  </div>

                  <div className="d-flex flex-column justify-content-end  h-100">
                    <button
                      className="botones btn btn-outline-dark btn-sm"
                      onClick={() =>
                        agregarProductoAlCarrito(
                          producto.id,
                          producto.title,
                          producto.price,
                          producto.images
                        )
                      }
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (estado) => {
  return {
    productss: estado.productss,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    agregarProductoAlCarrito: (
      idProductoAAgregar,
      title,
      price,
      images,
      subtotal
    ) => {
      dispatch({
        type: "AGREGAR_PRODUCTO_AL_CARRITO",
        idProductoAAgregar: idProductoAAgregar,
        title: title,
        price: price,
        images: images,
        subtotal: subtotal,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Productos);
