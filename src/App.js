import React from "react";

import { NavLink, Routes, Route } from "react-router-dom";
import Tienda from "./componentes/Tienda";
import Blog from "./componentes/Blog";
import Inicio from "./componentes/Inicio";
import Error404 from "./componentes/Error404";
import Carrito from "./componentes/carrito";

import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import reducer from "./reducers/tiendaReducer";
import "./css/App.css";
/* Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // el reducer es una funcion, que edita nuestro estado global

  const store = legacy_createStore(reducer);

  return (
    <Provider store={store}>
      <div class="">
        {/* Contenedor de la barra */}
        <nav class=" navbar justify-content-evenly sticky-top menu w-auto">
          <div class="row navbar-brand rounded barra">
            <div className="col-4">
              <NavLink to="/">Inicio</NavLink>
            </div>

            <div className="col-4">
              <NavLink to="/blog">Blog</NavLink>
            </div>

            <div className="col-4">
              <NavLink to="/tienda">Tienda</NavLink>
            </div>
            <div class="dropdown col-4">
              <button
                type="button"
                class="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
         
                  Carrito
            
                
              </button>
              <div class="dropdown-menu p-4 carro">
                <div className="mb-3 carro2">
                  <Carrito />
                  <button className="btn btn-warning mt-2">jiklasyhdkua</button>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </nav>
        <div className="container contenedor mb-5 mt-2">
          
          <main>
            <Routes>
              <Route path="*" element={<Error404 />} />
              <Route path="/" element={<Inicio />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Tienda" element={<Tienda />} />
            </Routes>
          </main>
          
        </div>
      </div>
      <div className="bd-footer py-4 py-md-5 mt-5 bg-light ">
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">One of three columns</div>
            <div class="col">One of three columns</div>
            <div class="col">One of three columns</div>
            <div class="col">One of three columns</div>
            <div class="col">One of three columns</div>
            <div class="col">One of three columns</div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
