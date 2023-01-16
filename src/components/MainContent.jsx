import React from "react";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';

import eli7 from '../assets/Ellipse 7.png';
import image1 from '../assets/Rectangle 4.png'
import '../scss/Main.scss';

const MainContent = () => {
    return(
        <section className="row main">
            <div className="main-content">
            <img className="elipse" src={eli7} />
            <img className="elipse7" src={eli7} />
            
            <h4>ABOUT US</h4>
            <div className="content">
                <div className="content-text">
                    <h2>EARTH IS OUR <br/>TRUE SOURCE <br/>OF BEAUTY</h2>
                    <p>Allure is a cosmetic brand of face <br/> oils,body care and wellness products <br/> for all skin types. </p>
                </div>
            </div>
            <button>LEARN MORE</button>
            <div className="message">
                <p>We are a brand and representation <br/> for everyone  who believes that <br/> beauty does not come from a <br/> snapshot, but from a sequence.</p>
                <img className="image1" src={image1} />
            </div>
            </div>

            <div className="content_2">
                <h3>WHY YOU SHOULD CHOOSE ALLURE</h3>
                <div className="table">
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <h3>SKIN HEALTH</h3>
                            <p>Our products contain only natural variants that are essential for your skin, oil and additives contained 
                            in natural skincare have anti-inflammatory effects.</p>
                        </td>
                        <td></td>
                        <td>
                            <h3>SKIN HEALTH</h3>
                            <p>Our products contain only natural variants that are essential for your skin, oil and additives contained 
                            in natural skincare have anti-inflammatory effects.</p>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                    <td></td>
                        <td>
                            <h3>ORIGINALITY</h3>
                            <p>Our products are unique, original
                             and made carefully with good attention to details.</p>
                        </td>
                        <td></td>
                        <td>
                            <h3>GENTLE CARE</h3>
                            <p>The products do not only cleanse the skin, but also protects 
                            it from the negative effects of other unwanted environmental factors.</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <div className="content_3">
                <h2>Popular Products</h2>
                <div className="direction_icons">
                    <FaAngleLeft className="direction left"/>
                    <FaAngleRight className="direction right"/>
                </div>
            </div>
            
        </section>
    )
}

export default MainContent