import React from 'react';
import {auth} from '../../firebase/firebase.js';
import { withRouter } from 'react-router-dom';
import Tareas from '../Tareas/Tareas.jsx';

const Admin = (props) => {

  const [user, setUser] = React.useState(null)

  React.useEffect(() =>{

    if (auth.currentUser){
      console.log('existe un usuario');
      setUser(auth.currentUser)
    }else{
      console.log('no existe usuario');
      props.history.push('/login')
    }

  },[props.history])

  return (
    <div>
        {
          user && (
            <Tareas user={user}/>
          )
        }
    </div>
  )
}

export default withRouter(Admin)

