import React from "react";
import Productos from "./Productos";
import "./../../css/Tienda.css";

const Tienda = (categoria) => {
  const categoriaa= categoria;
  return (
    <div className="tienda">
      <div className="d-flex flex-column align-center align-items-center">
        <h1 className="display-6 mt-2 mb-3">{categoriaa.categoria}  </h1>
        {/* <h1 className="display-6 mt-2 mb-3">Productos en Venta</h1> */}
        
      </div>
      
      <Productos categoria={categoria}/>
    </div>
  );
};

export default Tienda;
