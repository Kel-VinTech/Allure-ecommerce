import React from "react";
import '../scss/Footer.scss';
import { Link } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa';

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
                    <div className="line">
                        <div className="line_2"></div>
                    </div> 
                </div>
            </div>
            <div className="foot_2 row">
                <div className="foot_container">
                    <div className="foot_2_content">
                    <div className="text">
                        <h2>ALLURE.</h2>
                        <p className="mess">Skin care is a science, Allure makes it art.
                        <br/>Reduce fine lines & wrinkles with alpha hydroxy acid skin care products.
                        Say HI to a new found glow routine.</p>
                        <p className="copyright">Allurebeauty © 2023. All Rights Reserved.</p>
                        <p className="copyright">Made by - Kelvin.eth</p>
                    </div>
                    
                        <div className="foot_line"></div>

                    <div className="text_2">
                        <div className="foot_links">
                            <Link>Info</Link>
                            <Link>Shipping & Returns</Link>
                            <Link>Privacy Policy</Link>
                            <Link>FAQs</Link>
                            <Link>Contact</Link>
                        </div>
                        <p>Soft Avenue, House 15, Ibeju <br/> Lekki,Lagos,Nigeria.</p>
                        <div className="foot_icons">
                            <FaTwitter className="twitter"/>
                            <FaGithub />
                            <FaLinkedin />
                        </div>
                    </div>
                    </div>
                </div>
    
            </div>
        </footer>
    )
}

export default FooterContent;