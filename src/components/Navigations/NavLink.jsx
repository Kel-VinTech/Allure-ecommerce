import React from "react";
import {Link, NavLink} from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="nav_links">
            <NavLink to="">Home</NavLink>
            <NavLink id="links">Products</NavLink>
            <Link id="links sales">Sales</Link>
            <Link>Blogs</Link> 
            <NavLink>About Us</NavLink>   
        </nav>
    )
}

export default NavBar