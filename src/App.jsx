import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Inicio from "./components/Inicio/Inicio";
import Login from "./components/Login/Login";
import Reset from "./components/Login/Reset";
import Admin from "./components/Admin/Admin";
import NotFound from "./components/Notfound/Notfound"

import { auth } from "./firebase/firebase.js";

function App() {
  const [firebaseUser, setFirebaseUser] = React.useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged(user =>{
      console.log(user);
      if(user){
        setFirebaseUser(user);
      }else{
        setFirebaseUser(null)
      }
    })
  }, []);

  return firebaseUser!== false ? (
    <Router>
      <div className="container">
        <Navbar firebaseUser = {firebaseUser}/>
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/login" component={Login} />
          <Route path="/tareas" component={Admin} />
          <Route path="/reset" component={Reset} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  ) : (
    <p>Cargando ....</p>
  )
}

export default App;
