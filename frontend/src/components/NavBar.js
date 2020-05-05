import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/NavBar.css";
import { logout } from '../util/firebaseFunctons';

export default function NavBar(params) {
    return(
        <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/users"}>Show All Users</NavLink>
            <NavLink to={"/signup"}>Sign Up</NavLink>
            <NavLink to={"/login"}>Log In</NavLink>
            <button onClick={logout}>Log Out</button>
        </nav>
    )
};
