import React from "react";
import { connect } from "react-redux";
import "../css/Carrito.css";

const Carrito = ({ carrito }) => {
  return (
    <div className="carrito1">
      <div className="">
        {/* <h3 className="display-6 mt-2 mb-3">Carrito de Compras</h3> */}
      </div>
      <div className="carrito2 border-start border overflow-auto ">
        {carrito.length > 0 ? (
          carrito.map((producto, index) => {
            return (
              <div
                className="border-bottom row d-flex flex-column"
                style={{ zIndex: -100 }}
                key={index}
              > 
                <div>
                <p className="ms-1 mb-0 fs-5 col">{producto.nombre}</p>
                <p className="ms-1 mb-0 fs-5 col">Precio:${producto.precio}</p>
                <p className="ms-1 mb-0 fs-6 colores col">Cantidad: {producto.cantidad}</p>
                
                <div>
                <img
                    className="mb-3 tiendaimagenes rounded carrocompras"
                    src={producto.imagen}
                  ></img>
                </div>
                </div>
              </div>
              
            );
          })
        ) : (
          <div className="border-bottom border-start fs-6 ">
            <p className="text-break ms-1">
              Aun no has agregado productos al carrito
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (estado) => {
  return {
    carrito: estado.carrito,
  };
};
export default connect(mapStateToProps)(Carrito);
