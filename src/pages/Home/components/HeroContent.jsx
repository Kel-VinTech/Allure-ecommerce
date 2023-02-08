import React from "react";
import {FaUser,FaBars,FaCartPlus,FaHeart, FaSearch} from 'react-icons/fa';

import '../scss/Hero.scss'

const HeroContent = () => {
    return (
    <section className="hero row"
    >
        <nav>
            
           <div className="icons">
                <FaSearch className="icon"/>
                <FaHeart className=" heart"/>
                <FaCartPlus className="icons"/> 
                <FaUser className="icons"/>
            </div>
            <FaBars className=" menu"/>
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