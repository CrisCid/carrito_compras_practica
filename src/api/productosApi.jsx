import { useState, useEffect } from "react";
const ProductosApi = () => {
    const [productss, setProductos] = useState([]);
    let nuevosProductos = [];
    const fetchCarro = async () => {
        let respuesta = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await respuesta.json();
        setProductos(data);
    };
   /*  console.log('revisar', productss); */
    useEffect(() => {
        fetchCarro();
    }, []);
    return productss;
}

export default ProductosApi;