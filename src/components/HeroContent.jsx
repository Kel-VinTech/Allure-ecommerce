import React from "react";
import { Link } from "@chakra-ui/react";
import '../scss/Hero.scss'

const HeroContent = () => {
    return (
    <section className="hero row"
    >
        <nav>
            <h1 className="logo">ALLURE.</h1>
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
            <p className="hero-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             sapiente ullam hic maiores odit? Pariatur ipsum dolor obcaecati quae ea.</p>
             <button>Shop now</button>
        </div>

    </section>   
    )
}

export default HeroContent