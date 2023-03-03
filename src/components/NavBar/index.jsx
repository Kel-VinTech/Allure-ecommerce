import "/src/scss/Navbar.scss";
import Logo from "../Logo";
import ProductCart from "../ProductCart";
import { Link ,useLocation} from "react-router-dom";
import { MdSearch,MdMenu, MdPerson } from "react-icons/md";
import { useState } from "react";
import { color } from "@chakra-ui/react";

const NavBar =() => {
    const [Mobile, setMobile] = useState(false) 
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isAbout = location.pathname === '/about';
    const homeStyle ={
        position: 'absolute',
    }
    const otherPage = {
        position: 'relative',
        backgroundColor: "#f1f5f2",
        bottom: "40%",
    }
    const colorPage={
        color: "#292929"
    }
    return (

        
        <div className="navbar row"
        style={{position: isHome ? 'homeStyle' :  'otherPage' }}
        >
            <Logo 
            
            />
            <nav className={Mobile? "nav-links-mobile" : "nav_links"}
            onClick={() => setMobile(false)}
            >
                <ul>
                    <li ><Link className="active-link" to="/"
                    style={{color: isHome ? '#E9E9E9': '#292929'}}
                    >Home</Link></li>
                    <li><Link to="/"
                    style={{color: isHome ? '#E9E9E9': '#292929'}}>Products</Link></li>
                    
                        <div className="oval"
                        style={{borderColor: isHome ? '#E9E9E9': '#292929'}}
                        >
                        <li><Link 
                        style={{color: isHome ? '#E9E9E9': '#292929'}}
                        className="sales"
                         to="/">SALES</Link></li>
                        </div>
                    <li><Link 
                    style={{color: isHome ? '#E9E9E9': '#292929'}}
                    to="/">Blog</Link></li>
                    <li><Link
                    style={{color: isHome ? '#E9E9E9': '#292929'}}
                    to="/about">About Us</Link></li>
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