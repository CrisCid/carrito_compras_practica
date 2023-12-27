import React, { useState } from "react";

import { NavLink, Routes, Route } from "react-router-dom";
import Tienda from "./componentes/tienda/Tienda";
import Blog from "./componentes/blog/Blog";
import Inicio from "./componentes/Inicio";
import Error404 from "./componentes/Error404";
import Carrito from "./componentes/tienda/carrito";

import { Provider} from "react-redux";
import { legacy_createStore } from "redux";
import reducer from "./reducers/tiendaReducer";
import "./css/App.css";
/* Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";
import CategoriasApi from "./api/categoriasApi";
const App = () => {
  // el reducer es una funcion, que edita nuestro estado global

  const store = legacy_createStore(reducer);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const categorias = CategoriasApi();
  const handleCategoriaSeleccionada = (categoria) => {
    if(categoria === "todo"){
      setCategoriaSeleccionada(null);
    }
     if(window.location.pathname !== "/tienda"){
      window.location.pathname = "/tienda";
      
    }
    setCategoriaSeleccionada(categoria);


  }

  return (
    <Provider store={store}>
      <div className="">
        {/* Contenedor de la barra */}
        <nav className=" navbar sticky-top menu  mt-0  border-bottom">
          <div className="row navbar-brand rounded barra ">
            <div className="col menulinks ">
              <NavLink to="/">Inicio</NavLink>
            </div>
            <div className="col menulinks">
              <NavLink to="/blog">Blog</NavLink>
            </div>
            <div className="col menulinks  dropdown">
                <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias </NavLink>
              <ul className="dropdown-menu">
                <li>
                <button to="/tienda" className={"dropdown-item"} onClick={() => handleCategoriaSeleccionada('todo')}>Todo</button>
                </li>
                  {categorias.map((categoria, index)=>{
                    return(
                      <li key={index}>
                      <button className="dropdown-item" to="#" onClick={() => handleCategoriaSeleccionada(categoria)}>
                        {categoria}
                      </button>
                     </li>
                    )
                  }) }
              </ul>
            </div>
            {/* Carro */}
            <div className=" col menucarro d-flex flex-column flex-row-reverse">
              <button
                className="navbar-toggler bg-white "
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
              </button>
              <div
                className="offcanvas offcanvas-end ancho"
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header row aling-items-start pt-0 pb-0">
                  {/* texto */}
                  <button
                    type="button"
                    className="btn-close col-4 mt-2"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                  <h3 className="display-6 mt-2 mb-0 ms-0 col">
                    Carrito de Compras
                  </h3>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 h-100">
                    <div className="mb-3 carro2 ">
                      <Carrito />
                      <div className="d-grid gap-2">
                        <button className="btn btn-dark btn-lg mt-2">
                          Comprar
                        </button>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="contenedor mb-5 mt-0 ps-5 pe-5">
          <main>
            <Routes>
              <Route path="*" element={<Error404 />} />
              <Route path="/" element={<Inicio />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Tienda" element={<Tienda categoria={categoriaSeleccionada}/>} />
            </Routes>
          </main>
        </div>
      </div>
      <div className="bd-footer py-4 py-md-5 mt-5 bg-light ">
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col">One of three columns</div>
            <div className="col">One of three columns</div>
            <div className="col">One of three columns</div>
            <div className="col">One of three columns</div>
            <div className="col">One of three columns</div>
            <div className="col">One of three columns</div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
