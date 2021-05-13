import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <Link to="/" className="btn btn-dark">
        Ir al Inicio
      </Link>
    </div>
  );
};

export default Notfound;
