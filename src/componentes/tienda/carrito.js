import React from "react";
import { connect } from "react-redux";
import "./../../css/Carrito.css";

const Carrito = ({ carrito }) => {
  const carro =  carrito;
  return (
    <div className="carrito1">
      <div className="carrito2 h-100 border border-start overflow-auto">
        {carro.length > 0 ? (
          
          carro.map((producto, index) => {
            return (
              <div
                className=" border-bottom "
                style={{ zIndex: -100 }}
                key={index}
              >
                <div className="w-100 row">
                  <div className="flex-column aling-items-start h-50 col-9 text-break">
                    <p className=" ms-1 mb-0 h-50 fs-5 ">{producto.title}</p>
                    
                  </div>

                  <div className="row flex-column w-50 col-4">
                    <p className="ms-1 mb-0 mt-0 col fs-6 colores">
                      Precio:${producto.price}
                    </p>
                    <p className="ms-1 mb-0 mt-0 col fs-6 colores">
                      Cantidad: {producto.cantidad}
                    </p>
                  </div>
                  <div className="col me-0 pe-0 text-end mt-2 col-6">
                    <img
                      className="mb-3 tiendaimagenes rounded carrocompras"
                      src={producto.image}
                      alt="imagen"
                    ></img>
                  </div>
                </div>
                <p className="mb-0 pb-0 fs-6 ms-1">
                  Subtotal:{producto.price * producto.cantidad}
                </p>
              </div>
            );
          })
        ) : (
          <div className="border-bottom border-start fs-6 row w-100">
            <p className=" ms-1 col">
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
    ...estado,
    carrito: estado.carrito,
  };
};
export default connect(mapStateToProps)(Carrito);
