import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdEast } from "react-icons/md";
import '/src/scss/Hero.scss'
import { motion } from "framer-motion"; 

import ProductList from "../../components/ProductUI/ProductList";
import products from '/src/data/products.js';

const HeroContent = () => {
    const [data, setData] = useState(products)
    
    return (
    <section className="hero row"
    >
     
        <motion.div className="hero-content"
        initial={{x:'-100vw'}}
        animate={{x:0}}
        transition={{delay:0.5}}
        >
            <h1 className="hero-title">Allure : Skin for days</h1>
            <p className="hero-text">Skin care is a science, Allure makes it art. Reduce fine lines & <br/> wrinkles with alpha hydroxy acid skin care products. Say HI to a new found glow routine.</p>
             <Link to="/product">Shop now</Link>
        </motion.div>
        <div className="products_collection">
           <ul>
                    <li><Link to="#">All</Link></li>
                    <li><Link to="#">Moisturizers</Link></li>
                    <li><Link to="#">Treatments</Link></li>
                    <li><Link to="#">Cleansers</Link></li>
                    <li><Link to="#">Masks</Link></li>
                    <li><Link to="#">Lip Balms</Link></li>
                    <li><Link to="#">Wellness</Link></li>
                    <li><Link to="#"><MdEast/> </Link></li>
            </ul>  
        </div>
    </section>   
    )
}

export default HeroContent