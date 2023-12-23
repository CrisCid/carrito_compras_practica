import React from "react";
import BlogsApi from "../api/blogsApi";
import ProductosApi from "../api/productosApi";
const Inicio = () => {
  const blogsInicio = BlogsApi();
  const productosInicio = ProductosApi();
  return (
    <div className="row">
      <div className="col-sm-4 container ">
        <h1 className="mb-4 border-bottom border-dark">Pequeña informacion de esta pagina</h1>
        
        <p className="fs-2 border-start border-end ps-4 pe-4 shadow-lg rounded text-break">En esta "pagina" he estado probando como llamar a apis, como seria tener un carrito de compras, esta pagina esta hecha con REACT, HTML, CSS, BOOTSTRAP, esta alojado en vercel, las apis que estoy llanado son https://fakeapi.platzi.com para llenar la tienda, el otro, es https://jsonplaceholder.typicode.com para poder llenar la parte de blog</p>
      </div>
      <div className="col-sm-4 container border-start border-end border-1  border-black mt-3 p-3 mb-3">
        {blogsInicio.slice(0,6).map((comentarios, index)=>{
            return(
            <div key={index} className="border-bottom border-black">
            <p className="border-bottom mt-1 mb-1 border-dark-subtle">{comentarios.name}</p>
            <p className="border-bottom mt-1 mb-1 border-secondary-subtle">{comentarios.email}</p>
            <p className=" mt-1 mb-1">{comentarios.body}</p>
            </div>
            )
        })}
      </div>
      <div className="col-sm-3 d-grid row p-4 ">
        {productosInicio.slice(0,4).map((productos,index)=>{
            return(
                <div key={index} className="card mb-4 p-0 ms-0 ">
                    <div className="card-body d-flex flex-column me-0 ms-0 mb-0 mt-0 d-flex flex-column align-center align-items-center ">
                        <img className="mb-3 rounded w-50 " src={productos.images} alt="Imagen"></img>
                        <div className="d-flex flex-column  align-center align-items-center ">
                            <p className="fs-6">{productos.title}</p>
                            <p className="fs-6">${productos.price}</p>
                        </div>
                    </div>
                </div>
            )
        })}

      </div>
    </div>
  );
};

export default Inicio;
