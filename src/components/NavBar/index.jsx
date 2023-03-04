import "/src/scss/Navbar.scss";
import Logo from "../Logo";
import ProductCart from "../ProductCart";
import { NavLink ,useLocation} from "react-router-dom";
import { MdSearch,MdMenu, MdPerson } from "react-icons/md";
import { useState } from "react";

const NavBar =() => {
    const [Mobile, setMobile] = useState(false) 
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isAbout = location.pathname === '/about';
    const homeStyle ={
        position: isHome? "absolute" :  "relative",
        backgroundColor:isHome? "" : "#f1f5f2",
        color: isHome ? "" : "blue" 
    }
  
    return (

        
        <div className="navbar row"
        style={homeStyle}
        >
            <Logo />
            <nav className={Mobile? "nav-links-mobile" : "nav_links"}
            onClick={() => setMobile(false)}
            >
                <ul>
                    <li ><NavLink activeClassName="active-home" to="/"
                    style={{color: isHome ? '#E9E9E9': '#292929'}}
                    >Home</NavLink></li>

                    <li><NavLink activeClassName="active-pages" to="/"
                    style={{color: isHome ? '#E9E9E9': '#292929'}}>Products</NavLink></li>
                    
                        <div className="oval"
                        style={{borderColor: isHome ? '#E9E9E9': '#292929'}}
                        >
                        <li><NavLink activeClassName="active-pages" 
                        style={{color: isHome ? '#E9E9E9': '#292929'}}
                        className="sales"
                         to="/">SALES</NavLink></li>
                        </div>
                    <li><NavLink  activeClassName="active-pages"
                    style={{color: isHome ? '#E9E9E9': '#292929'}}
                    to="#blog">Blog</NavLink></li>

                    <li><NavLink activeClassName="active-about"
                    style={{color: isHome ? '#E9E9E9': '#292929'}}
                    to="/about">About Us</NavLink></li>
                </ul>
                
            </nav>
           
            <div className="secondary_link"
            >
                <MdPerson
                style={{color: isHome ? '#E9E9E9': '#292929'}}
                />
                <MdSearch
                style={{color: isHome ? '#E9E9E9': '#292929'}} />
                <ProductCart
                />
                <button className="nav-links-mobile" onClick={() => setMobile(!Mobile)}>
                    {Mobile? "yes": <MdMenu />}
                </button>
            </div>
            
        </div>
    )
}

export default NavBar;