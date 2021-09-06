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
             <ul className="navbar_icons">
                 <li className="navbar_icon" id="join"><Link to='/signup' >Join Now</Link></li>
                 <li className="navbar_icon" id="sign_in"><Link to='/login' >Sign in</Link></li>
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