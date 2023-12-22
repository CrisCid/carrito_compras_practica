import React, { useReducer, useState } from "react";

const estadoInicial = { contador: 0 };

function reducer(estado, accion) {
  switch (accion.type) {
    case "INCREMENT":
      return { contador: estado.contador + 1 };
    case "DECREMENT":
      return { contador: estado.contador - 1 };
    default:
        return estado;      
  }
  return estado;
}
const ContenidoBlog = ({}) => {
  /* const [contador, setcontador] = useState(0); */
  const [state, dispatch] = useReducer(reducer, estadoInicial);
 /*  const sumar = () => setcontador(contador + 1);
  const restar = () => setcontador(contador - 1); */
  const sumar = () => dispatch({type:"INCREMENT"});
  const restar = () => dispatch({type:"DECREMENT"});
  return (
    <div>
      {/* <h2>Listado de Blogs</h2> */}
      <h2>Contador</h2>
      <nav>
        <button onClick={sumar} className="btn btn-warning">
          +
        </button>
        <button onClick={restar} className="btn btn-warning">
          -
        </button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default ContenidoBlog;
