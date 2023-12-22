import { useState, useEffect } from "react";
const CategoriasApi = () => {
    const [categorias, setCategorias] = useState([]);

    const fetchCarro = async () => {
        let respuesta = await fetch("https://api.escuelajs.co/api/v1/categories");
        const data = await respuesta.json();
        setCategorias(data);
    };
   /*  console.log('revisar cate', categorias); */
    useEffect(() => {
        fetchCarro();
    }, []);
    return categorias;
}
 
export default CategoriasApi;