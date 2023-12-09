import React from 'react';
import { connect } from 'react-redux';
import '../css/Carrito.css';

const Carrito = ({ carrito }) => {

    return (
        
        <div className='ml-5'>
            <h3 className='display-6 '>Carrito de Compras</h3>
            {carrito.length > 0 ?
                carrito.map((producto, index) => {
                    return (
                        <div className='border-bottom border-start border-danger fs-6' key={index}>
                            <p className='nombreProducto'>
                                {producto.nombre}

                            </p>
                            Cantidad:  {producto.cantidad}
                        </div>
                    );
                })
                :
                <p className='text-break'>Aun no has agregado productos al carrito</p>
            }
        </div>
    );
}

const mapStateToProps = (estado) => {
    return {
        carrito: estado.carrito
    }
}
export default connect(mapStateToProps)(Carrito);