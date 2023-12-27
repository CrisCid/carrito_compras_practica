import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./../../css/Productos.css";
import productosApi from "../../api/productosApi";

function  Productos  ({ categoria, agregarProductoAlCarrito })  {
  const [productosFiltrado, setProductosFiltrado] = useState<any[]>();
  useEffect(()=>{
    obtenerProductos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  useEffect(()=>{
    obtenerProductos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[categoria]);

  const obtenerProductos = async() =>{
    const categoriaa = categoria;
    const productss = await productosApi();
  
  
    let productosFiltrados:any[] = [] 
    productosFiltrados = categoriaa ? productss.filter( (producto) => producto.category === categoriaa.categoria)
    : productss;
    setProductosFiltrado(productosFiltrados);
    if(categoriaa.categoria === null){
      setProductosFiltrado(productss)
    }
  }
  

  return (
    <div>
      {/* Contenedor de la parte de los productos */}
        
      <div className="contenedorProductos d-grid row d-flex col-sm-12 ">
        {productosFiltrado && productosFiltrado.map((producto, index) => {
        /*   <p>{categoriaa.name}</p> */
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
                    src={producto.image}
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
                          producto.image
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
  console.log('Estado?:',estado);
  return {
    productss: estado.productosFiltrado,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    agregarProductoAlCarrito: (
      idProductoAAgregar,
      title,
      price,
      image,
      subtotal
    ) => {
      dispatch({
        type: "AGREGAR_PRODUCTO_AL_CARRITO",
        idProductoAAgregar: idProductoAAgregar,
        title: title,
        price: price,
        image: image,
        subtotal: subtotal,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Productos);
