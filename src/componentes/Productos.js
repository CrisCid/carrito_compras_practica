import React from "react";
import { connect } from "react-redux";
import "./../css/Productos.css";

const Productos = ({ productos, agregarProductoAlCarrito }) => {
  return (
    <div>
      {/* <p className="fs-5">Productos</p> */}
      {/* Contenedor de la parte de los productos */}
      <div className="contenedorProductos d-grid row d-flex">
        {productos.map((producto, index) => {
          return (
            /* Separacion de cada producto por columna */
            <div className="col-sm-3 mb-3 ">
              {/* Formato de tarjeta */}
              <div className="card col-12 h-100">
                <div
                  /* para cada producto */
                  className="product m-2 card-body d-flex flex-column"
                  key={index}
                >
                  <img
                    /* Imagenes */
                    className="mb-3 tiendaimagenes rounded"
                    src={producto.imagen}
                  ></img>
                  <div className="d-flex flex-column  align-center align-items-center ">
                    <p className="fs-6 mb-1 ">{producto.nombre}</p>
                    <p className="fs-6 mb-1">{producto.marca}</p>
                  </div>
                  {/* <div className=""> */}
                    <div class="d-flex flex-column justify-content-end  h-100">
                      <button
                        className="botones btn btn-outline-dark btn-sm"
                        onClick={() =>
                          agregarProductoAlCarrito(producto.id, producto.nombre)
                        }
                      >
                        Agregar al carrito
                      </button>
                    </div>
                  {/* </div> */}
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
    productos: estado.productos,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    agregarProductoAlCarrito: (idProductoAAgregar, nombre) => {
      dispatch({
        type: "AGREGAR_PRODUCTO_AL_CARRITO",
        idProductoAAgregar: idProductoAAgregar,
        nombre: nombre,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Productos);
