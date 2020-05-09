import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import "../css/NavBar.css";
import { AuthContext } from '../providers/AuthProvider';
import { logout } from '../util/firebaseFunctons';

export default function NavBar(params) {
    const { user } = useContext(AuthContext);
    const display = () => {
        if(user) {
            return <button onClick={logout}>Log Out</button>;
        } else {
            return (
              <>
                <NavLink to={"/signup"}>Sign Up</NavLink>
                <NavLink to={"/login"}>Log In</NavLink>
              </>
            );
        }
    }
    return(
        <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/users"}>Show All Users</NavLink>
            {display()}
            
        </nav>
    )
};
