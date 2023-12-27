import { useState, useEffect } from "react";
const ProductosApi = async():Promise<any[]> => {
    const [productss, setProductos] = useState([]);
    const fetchCarro = async () => {
        let respuesta = await fetch("https://fakestoreapi.com/products");
        const data = await respuesta.json();
        setProductos(data);
    };

    useEffect(() => {
        fetchCarro();
    }, []);
    return productss;
}

export default ProductosApi;