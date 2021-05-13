import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="jumbotron mt-2">
      <h1 className="display-4">Bienvenidos !</h1>
      <p className="lead">
        Prototipo de administración de tareas
      </p>
      <hr className="my-4" />
      <p>
        DEV: Claudio Díaz.
      </p>
      <Link className="btn btn-dark btn-lg" to="/login">
        Registrarse / Iniciar Sesión
      </Link>
    </div>
  );
};

export default Inicio;
