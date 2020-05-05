import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/NavBar.css";

export default function NavBar(params) {
    return(
        <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/users"}>Show All Users</NavLink>
            <NavLink to={"/signup"}>Sign Up</NavLink>
            <NavLink to={"/login"}>Log In</NavLink>
        </nav>
    )
};
