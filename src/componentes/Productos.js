import React from "react";
import { connect } from "react-redux";
import "./../css/Productos.css";

const Productos = ({ productos, agregarProductoAlCarrito }) => {
  return (
    <div>
      {/* <p className="fs-5">Productos</p> */}
      {/* Contenedor de la parte de los productos */}
      <div className="contenedorProductos grid row d-flex">
        {productos.map((producto, index) => {
          return (
            /* Separacion de cada producto por columna */
            <div className="col-sm-6 col-12 mb-3">
                {/* Formato de tarjeta */}
              <div className="card">
                <div
                /* para cada producto */
                  className="product m-2 card-body d-flex flex-column" 
                  key={index}
                >
                  <p className="card-title">{producto.nombre}</p>
                  <img
                  /* Imagenes */
                    className="mb-3 tiendaimagenes rounded w-100 "
                    src={producto.imagen}
                  ></img>
                  <div class="d-grid col-6 mx-auto w-100">
                  <button 
                    className="botones btn btn-outline-dark fs-6 "
                    onClick={() =>
                      agregarProductoAlCarrito(producto.id, producto.nombre)
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
