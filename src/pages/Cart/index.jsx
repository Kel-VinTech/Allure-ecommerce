import React from "react";
import { NavLink, useLocation,Outlet } from "react-router-dom";
import "/src/scss/Cart.scss";



const Cart = () => {
    const NavLinkStyle = ({isActive})=> {
        return {
            fontWeight: isActive ? "bold" : "normal",
            color : isActive ? "#292929": "",
            
        }
    }

    return <main>
        <div className="cart">
            <div className="cart-heading">
                <div className="cart-links">
                <NavLink to="#"
                style={NavLinkStyle}
                >Shopping cart
                <div className="cart-line1"></div>
                </NavLink>
                <NavLink to="checkout"
                >Shipping details</NavLink>
                <NavLink to="#">Payment details</NavLink>
                
                </div>
                <div className="cart-line"></div>
               
            </div>
        </div>
    </main>
}

export default Cart