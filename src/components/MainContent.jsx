import React from "react";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';

import eli7 from '../assets/Ellipse 8.png';
import image1 from '../assets/Rectangle 4.png'
import '../scss/Main.scss';

const MainContent = () => {
    return(
        <section className="row main">
            <div className="main-content">
                <img className="elipse" src={eli7} />
                <img className="elipse7" src={eli7} />
                
                
               <div className="content-message">
                    <div className="content">
                        <div className="content-text">
                        <h4>ABOUT US</h4>
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
            </div>

            <div className="content_2">
                <h2>WHY YOU SHOULD CHOOSE ALLURE</h2>
                <div className="grid_container">
                    <div>
                        <div className="grid_text">
                            <h3>SKIN HEALTH</h3>
                            <p>Our products contain only natural variants that are essential for your skin, oil and additives contained 
                            in natural skincare have anti-inflammatory effects.</p>
                        </div>
                    </div>
                    <div></div>
                    <div>
                        <div className="grid_text">
                            <h3>NATURAL INGREDIENTS</h3>
                            <p>Our skincare products are handmade in batches.
                                 They are made using only natural oils and they contain no chemicals.</p>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div>
                        <div className="grid_text">
                            <h3>ORIGINALITY</h3>
                            <p>Our products are unique, original
                             and made carefully with good attention to details.</p>
                        </div>
                    </div>
                    <div></div>
                    <div>
                        <div className="grid_text">
                        <h3>GENTLE CARE</h3>
                            <p>The products do not only cleanse the skin, but also protects 
                            it from the negative effects of other unwanted environmental factors.</p>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="content_3">
                
                <div className="direction">
                    <h2>Popular Products</h2>
                    <div className="direction_icons">
                        <FaAngleLeft className="direction_icons left"/>
                        <FaAngleRight className="direction_icons right"/>
                    </div>
                    
                </div>
            </div>
            
        </section>
    )
}

export default MainContent