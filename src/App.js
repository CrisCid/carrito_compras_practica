import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, Routes, Route } from 'react-router-dom';
import Tienda from './componentes/Tienda';
import Blog from './componentes/Blog';
import Inicio from './componentes/Inicio';
import Error404 from './componentes/Error404';
import Carrito from './componentes/carrito';
const App = () => {
  const productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' },
    { id: 4, nombre: 'Producto 4' }
  ];
  const [carrito, cambiarCarrito] = useState([]);

  const agregarProductoAlCarrito = (idProductoAAgregar, nombre) => {
    // Si el carrito esta vacio entonces agregamos el producto
    if (carrito.length === 0) {
      cambiarCarrito([{ id: idProductoAAgregar, nombre: nombre, cantidad: 1 }]);
    } else {
      // Si ya tiene el producto entonces actualizamos el valor
      // Si no tiene el producto entonces lo agregamos

      // Para poder editar el arreglo lo tenemos que clonar
      const nuevoCarrito = [...carrito];
      // Comprobamos si el carrito ya tiene el id del producto a agregar
      const yaEstaEnCarrito = nuevoCarrito.filter((productoDeCarrito) => {
        return productoDeCarrito.id === idProductoAAgregar
      }).length > 0;
      // Si ya esta en carrito, se tiene que actualizar
      if (yaEstaEnCarrito) {
        // Para ello tenemos que buscar su posicion en el arreglo
        // y en base a su posicion actualizamos el valor
        nuevoCarrito.forEach((productoDeCarrito, index) => {

          // Si el producto del id es igual al producto que queremos agregar, entonces sera la misma cantidad mas 1
          if (productoDeCarrito.id === idProductoAAgregar) {
            const cantidad = nuevoCarrito[index].cantidad;
            nuevoCarrito[index] = { id: idProductoAAgregar, nombre: nombre, cantidad: cantidad + 1 }
          }
        });
      } else {
        nuevoCarrito.push({
          id: idProductoAAgregar, nombre: nombre, cantidad: 1
        });
      }
      cambiarCarrito(nuevoCarrito);
    }

  }

  return (
    <Contenedor>
      <Menu>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/tienda">Tienda</NavLink>
      </Menu>
      <main>
        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route path='/' element={<Inicio />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Tienda' element={
            <Tienda
              productos={productos}
              agregarProductoAlCarrito={agregarProductoAlCarrito}
            />
          } />
        </Routes>
      </main>
      <aside>
        <Carrito carrito={carrito}/>
      </aside>
    </Contenedor>
  );
}

const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;
export default App;