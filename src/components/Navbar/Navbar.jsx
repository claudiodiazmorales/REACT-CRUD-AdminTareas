import React from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase.js";
import { withRouter } from "react-router-dom";

export const Navbar = (props) => {
  const cerrarSesion = () => {
    auth.signOut().then(() => {
      props.history.push("/");
    });
  };

  return (
    <div className="navbar navbar-dark bg-dark justify-content-between">
      <Link className="navbar-brand" to="/">
        Administrador de Tareas
      </Link>
      <div>
     
        <div className="d-flex">
        {props.firebaseUser === null ? (
          <NavLink className="btn btn-dark mr-2" to="/" exact>
            Inicio
          </NavLink>

          ) : null}

          {props.firebaseUser !== null ? (
            <NavLink className="btn btn-dark mr-2" to="/tareas">
              Tareas
            </NavLink>
          ) : null}

          {props.firebaseUser !== null ? (
            <button className="btn btn-dark" onClick={() => cerrarSesion()}>
              Cerrar Sesión
            </button>
          ) : (
            <NavLink className="btn btn-dark mr-2" to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
