import React from "react";
import {FaUser,FaBars,FaCartPlus,FaHeart} from 'react-icons/fa';
import { Link } from "@chakra-ui/react";
import '../scss/Hero.scss'

const HeroContent = () => {
    return (
    <section className="hero row"
    >
        <nav>
            <h1 className="logo">ALLURE.</h1>
            <div className="icons">
                <FaUser className="icons"/>
                <FaHeart className="icons"/>
                <FaCartPlus className="icons"/>
                <FaBars className="icons"/>
            </div>
            
           <div className="links">
                <div className="primary_link">
                    <Link to="">Home</Link>
                    <Link id="links">Home</Link>
                    <Link id="links">Home</Link>
                    <Link>Home</Link>   
                </div>
                <div className="secondary_link">
                    <Link>search</Link>   
                </div>
           </div>
        </nav>
        <div className="hero-content">
            <h1 className="hero-title">Allure : Skin for days</h1>
            <p className="hero-text">Skin care is a science, Allure makes it art. Reduce fine lines & <br/> wrinkles with alpha hydroxy acid skin care products. Say HI to a new found glow routine.</p>
             <button>Shop now</button>
        </div>
        {/* <div className="products_collection">
           <h2>All</h2>
           <h2>cream</h2>  
        </div> */}
    </section>   
    )
}

export default HeroContent