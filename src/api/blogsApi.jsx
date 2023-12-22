import { useState, useEffect } from "react";
const BlogsApi = () => {
    const [blogs, setBlogs] = useState([]);

    const fetchCarro = async () => {
        let respuesta = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await respuesta.json();
        setBlogs(data);
    };
   /*  console.log('revisar cate', categorias); */
    useEffect(() => {
        fetchCarro();
    }, []);
    return blogs;
}
 
export default BlogsApi;