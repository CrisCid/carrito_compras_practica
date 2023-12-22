import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./../css/Productos.css";

const Productos = ({ productos, agregarProductoAlCarrito }) => {
  const [productss, setProductos] = useState([]);
  let nuevosProductos = [];
  const fetchCarro = async () => {
    let respuesta = await fetch("https://fakestoreapi.com/products");
    const data = await respuesta.json();
    setProductos(data);
    /* console.log("ID:", data[0].id);
    console.log("Titulo:", data[0].title);
    console.log("Precio:", data[0].price);
    console.log("Descripcion:", data[0].description); */
    /* let productoss = [];
    productoss = data;
    productoss.map((produ) => {
      let total = {
        id: data.id
      }
    });
    console.log(total); */
  };
  console.log('revisar',productss);
  useEffect(() => {
    fetchCarro();
  }, []);
  return (
    <div>
      {/* <p className="fs-5">Productos</p> */}
      {/* Contenedor de la parte de los productos */}
      <div className="contenedorProductos d-grid row d-flex col-sm-12">
        {/* {productos.map((producto, index) => { */}
        {productss.map((producto, index) => {
          return (
            /* Separacion de cada producto por columna */
            <div className="col-sm-2 mb-4">
              {/* Formato de tarjeta */}
              <div className="card col-sm-12 h-100">
                <div
                  /* para cada producto */
                  className="product m-2 card-body d-flex flex-column me-5 ms-5 mb-0 mt-0"
                  key={index}
                >
                  <img
                    className="mb-3 tiendaimagenes rounded"
                    src={producto.image}
                  ></img>
                  <div className="d-flex flex-column  align-center align-items-center ">
                    <p className="fs-6 mb-0 text-break font-monospace text-nowrap texto">{producto.title}</p>
                    <p className="fs-6 mb-0">{producto.marca}</p>
                    <p className="fs-6 mb-0">${producto.price}</p>
                  </div>
                  {/* <div className=""> */}
                  <div className="d-flex flex-column justify-content-end  h-100">
                    <button
                      className="botones btn btn-outline-dark btn-sm"
                      onClick={() =>
                        agregarProductoAlCarrito(
                          producto.id,
                          producto.nombre,
                          producto.precio,
                          producto.imagen
                        )
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
    agregarProductoAlCarrito: (
      idProductoAAgregar,
      nombre,
      precio,
      imagen,
      subtotal
    ) => {
      dispatch({
        type: "AGREGAR_PRODUCTO_AL_CARRITO",
        idProductoAAgregar: idProductoAAgregar,
        nombre: nombre,
        precio: precio,
        imagen: imagen,
        subtotal: subtotal,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Productos);
