import React from "react";
import eli7 from '../assets/Ellipse 7.png';
import image1 from '../assets/Rectangle 4.png'
import '../scss/Main.scss';

const MainContent = () => {
    return(
        <section className="row main">
            <div className="image">
                <img className="elipse" src={eli7} />
                <img className="elipse7" src={eli7} />
            </div>
            <div className="content">
                <div className="content-text">
                    <h4>ABOUT US</h4>
                    <h2>EARTH IS OUR <br/>TRUE SOURCE <br/>OF BEAUTY</h2>
                    <p>Allure is a cosmetic brand of face <br/> oils,body care and wellness products <br/> for all skin types. </p>
                </div>
                <button>LEARN MORE</button>
            </div>
            <div className="message">
                <p>We are a brand and representation <br/> for everyone  who believes that <br/> beauty does not come from a <br/> snapshot, but from a sequence.</p>
                <img className="image1" src={image1} />
            </div>
        </section>
    )
}

export default MainContent