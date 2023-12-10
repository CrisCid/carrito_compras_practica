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
        <nav class=" navbar justify-content-evenly sticky-top menu w-auto mt-0  ">
          <div class="row navbar-brand rounded barra ">
            <div className="col-3 menulinks">
              <NavLink to="/">Inicio</NavLink>
            </div>

            <div className="col-3 menulinks">
              <NavLink to="/blog">Blog</NavLink>
            </div>

            <div className="col-3 menulinks">
              <NavLink to="/tienda">Tienda</NavLink>
            </div>

            {/* Carro */}
            <div class="container-fluid col-3 menucarro">
              <button
                class="navbar-toggler bg-white"
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
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
              </button>
              <div
                class="offcanvas offcanvas-end ancho"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div class="offcanvas-header">
                  {/* texto */}
                  <h3 className="display-6 mt-2 mb-3">Carrito de Compras</h3>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                    <div className="mb-3 carro2 ">
                      <Carrito />
                      <button className="btn btn-warning mt-2">Comprar</button>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="container contenedor mb-5 mt-0">
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
