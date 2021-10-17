import React from 'react'
import { Link } from 'react-router-dom';

const Session = ({currentUser, logout}) => {
    let result;
    if(currentUser){
          result = <div>
            <h1>
                Hello!
            </h1>
            <button onClick={logout()}>Logout!</button>
        </div>
    }else{
          result = <div>
             <ul className="navbar-icons">
                 <li className="navbar-icon"><Link id="join" to='/signup' >Join Now</Link></li>
                 <li className="navbar-icon"><Link id="sign_in" to='/login' >Sign in</Link></li>
            </ul>
        </div>
    }

    return (
        <div>
            {result}
        </div>
    )
}

export default Session;