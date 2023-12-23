import React from "react";
import BlogsApi from "../../api/blogsApi";

const ContenidoBlog = () => {
  const contenido = BlogsApi();
  /*  console.log(contenido[1].name,contenido[1].email); */
  return (
    <div className="row d-flex d-grid col-sm-12">
      {contenido.slice(0,16).map((content, index) => {
        return (
          <div className="col-sm-3 mb-4">
            <div className="card  h-100 shadow">
            <div
              key={index}
              className="border p-3 align-center align-items-center card-body"
            >
              <p className="border-bottom border-secondary mb-0 fw-medium">Titulo: {content.name}</p>
              <p className="border-bottom border-secondary mt-0 mb-0">Correo: {content.email}</p>
              <p>Comentario: {content.body}</p>
              {console.log(content.name)}
            </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default ContenidoBlog;
