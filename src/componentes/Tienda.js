import React from "react";
import Productos from "./Productos";
import "./../css/Tienda.css";

const Tienda = () => {
  return (
    <div className="tienda">
      <div className="d-flex flex-column align-center align-items-center">
        <h1 className="display-6 mt-2 mb-3">Productos en venta</h1>
      </div>
      <Productos />
    </div>
  );
};

export default Tienda;
