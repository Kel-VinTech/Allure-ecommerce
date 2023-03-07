import "/src/scss/Nav.scss";
import Logo from "../Logo";
import ProductCart from "../ProductCart";
import { NavLink ,useLocation} from "react-router-dom";
import { MdSearch,MdMenu, MdPerson } from "react-icons/md";
import { useState } from "react";

const NavBar =() => {
    const [mobile, setMobile] = useState(false) 

    const location = useLocation();
    const isHome = location.pathname === '/';
    const isAbout = location.pathname === '/about';
    const homeStyle ={
        position: isHome? "absolute" :  "relative",
        backgroundColor:isHome? "" : "#f1f5f2",
        color: isHome ? "" : "blue" 
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
                            <NavLink style={{color: isHome ? '#E9E9E9': '#292929'}}to="/">
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink style={{color: isHome ? '#E9E9E9': '#292929'}}to="/">
                                Products
                            </NavLink>
                        </li>

                        <div className="oval"
                        style={{borderColor: isHome ? '#E9E9E9': '#292929'}}
                        >   
                            <li>
                                    <NavLink style={{color: isHome ? '#E9E9E9': '#292929'}}to="/"
                                    className="sales">
                                    SALE
                                    </NavLink>
                            </li>
                        </div>
                        <li>
                            <NavLink style={{color: isHome ? '#E9E9E9': '#292929'}}to="blog">
                            Blog
                            </NavLink>
                        </li>

                        <li>
                            <NavLink style={{color: isHome ? '#E9E9E9': '#292929'}}to="/about">
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="secondary_link ">
                    <NavLink  to="/">Home</NavLink>
                    <NavLink to="/">Home</NavLink>

                    <div className="mobile-display">
                        <button onClick={() => setMobile(!mobile)}>
                            {mobile? "yes " :<MdMenu />}
                        </button>
                    </div>
                </div>
                
            </nav>
        </div>
    )
}

export default NavBar;