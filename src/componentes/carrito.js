import React from "react";
import { connect } from "react-redux";
import "../css/Carrito.css";

const Carrito = ({ carrito }) => {
  return (
    <div className="carrito1">
      <div className="">
        <h3 className="display-6 mt-2 mb-3">Carrito de Compras</h3>
      </div>
      <div className="carrito2 border-start border-bottom">
        {carrito.length > 0 ? (
          carrito.map((producto, index) => {
            return (
              <div
                className=""
                style={{zIndex:-100}}
                key={index}
              >
                <p className="ms-1">{producto.nombre}</p>
                <p className="ms-1">
                  Cantidad: {producto.cantidad}
                </p>
              </div>
            );
          })
        ) : (
          <div className="border-bottom border-start border-danger fs-6 ">
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
