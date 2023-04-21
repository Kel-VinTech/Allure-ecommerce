import "/src/scss/Nav.scss";
import Logo from "../Logo";
import { NavLink ,useLocation} from "react-router-dom";
import { MdSearch,MdMenu, MdPerson,MdClose } from "react-icons/md";
import {FiSearch,FiUser }from "react-icons/fi"
import { useState } from "react";
import { useSelector } from "react-redux";
import {BsCart4}from "react-icons/bs"
import Search from "../Search";


const NavBar =() => {

    const totalQuantity = useSelector(state => state.cart.totalQty)


    const [mobile, setMobile] = useState(false) 

    const location = useLocation();
    const isHome = location.pathname === '/';
    const isAbout = location.pathname === '/about';
    const homeStyle ={
        position: isHome? "absolute" :  "relative",
        backgroundColor:isHome? "" : "#f1f5f2",
        color: isHome ? "" : "blue" 
    }

    const cartBg = {
        backgroundColor: isHome? "#fff": "#2F4333",
        color: isHome? "#000" : "#fff"
    }

    const NavColor = {
        color: mobile? "#292929" : isHome ? "#E9E9E9" : "#292929" ,
        borderColor:mobile? "#292929": isHome ? '#E9E9E9': '#292929'
    }
  
    return (
        <div>
            <nav className="row"
            style={homeStyle}
           
            >
                <Logo />
                <div>
                    <ul className={mobile? "nav-link-mobile" : "navbar"}
                    onClick={()=> setMobile(false)}
                    >
                        <li>
                            <NavLink style={NavColor} to="/"
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink style={NavColor} to="/product">
                                Products
                            </NavLink>
                        </li>

                        <div className="oval"
                        style={NavColor}
                        >   
                            <li>
                                    <NavLink style={NavColor} to="/"
                                    className="sales">
                                    SALE
                                    </NavLink>
                            </li>
                        </div>
                        <li>
                            <NavLink style={NavColor} to="#blog">
                            Blog
                            </NavLink>
                        </li>

                        <li>
                            <NavLink style={NavColor} to="/about">
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="secondary_link ">
                    <NavLink  style={NavColor} to="/">
                    <FiUser/>
                    </NavLink>

                    <NavLink  style={NavColor} to="/">
                        
                        <Search/>
                    </NavLink>
 
                    <NavLink className="cart" style={NavColor} to="/">
                        <BsCart4/><span style={cartBg} className="cart_items">{totalQuantity}</span>
                    </NavLink>

                    <div className="mobile-display">
                        <button  style={NavColor} onClick={() => setMobile(!mobile)}>
                            {mobile? <MdClose /> :<MdMenu />}
                        </button>
                    </div>
                </div>
                
            </nav>
        </div>
    )
}

export default NavBar;