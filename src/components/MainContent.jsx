import React from "react";
import eli7 from '../assets/Ellipse 7.png';
import '../scss/Main.scss';

const MainContent = () => {
    return(
        <section className="row main">
            <img className="elipse" src={eli7} />
            <div className="content">
                <div className="content-text">
                    <h4 className="text">ABOUT US</h4>
                    <h2 className="message">EARTH IS OUR TRUE SOURCE OF BEAUTY</h2>
                    <p>Allure is a cosmetic brand of face oils,body care and wellness products for all skin types. </p>
                </div>
                <button>LEARN MORE</button>
            </div>
        </section>
    )
}

export default MainContent