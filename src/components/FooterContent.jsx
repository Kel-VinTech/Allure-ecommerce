import React from "react";
import '../scss/Footer.scss';
import elipse from '../assets/Ellipse 7.png'

const FooterContent = () => {
    return(
        <footer className="">

            <div className="foot_1">
                <div className="extra row">
                    <div className="foot_text">
                        <h2>Save</h2>
                        <p>INGREDIENTS THAT KEEP IN MIND YOUR PURITY, POWER, AND INTEGRITY.</p>
                        <h2>Moisture</h2>
                    </div>
                    {/* <img className="elipse1" src={elipse} alt="circle" /> */}
                    <div className="line">
                    <div className="line_2"></div>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}

export default FooterContent;