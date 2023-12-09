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
      <div class="container contenedor mt-5 pt-3 ">
        <nav class="navbar navbar-expand-lg menu grid justify-content-evenly content-fluid">
          <div class="row navbar-brand">
            <div className="col-4 linkeos"><NavLink to="/">Inicio</NavLink></div>
            
            <div className="col-4 linkeos"><NavLink to="/blog">Blog</NavLink></div>
            
            <div className="col-4 linkeos"><NavLink to="/tienda">Tienda</NavLink></div>
            
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Tienda" element={<Tienda />} />
          </Routes>
        </main>

        <aside>
          <Carrito />
        </aside>
      </div>
    </Provider>
  );
};

export default App;
