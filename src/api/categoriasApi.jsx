import { useState, useEffect } from "react";
const CategoriasApi = () => {
    const [categorias, setCategorias] = useState([]);

    const fetchCarro = async () => {
        let respuesta = await fetch("https://fakestoreapi.com/products/categories");
        const data = await respuesta.json();
        setCategorias(data);
       /*  console.log(data); */
    };
   /*  console.log('revisar cate', categorias); */
    
   useEffect(() => {
        fetchCarro();
    }, []);
    return categorias;
    
}
 
export default CategoriasApi;