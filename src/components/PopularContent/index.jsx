import "/src/scss/Popular.scss";
import image1 from "/src/assets/images/Rectangle 6.png"
import image2 from "/src/assets/images/Rectangle 7.png"
import image3 from "/src/assets/images/Rectangle 81.png"
import image4 from "/src/assets/images/Rectangle 3.png"
import { Link } from "react-router-dom";
import { MdChevronLeft,MdChevronRight, MdEast } from "react-icons/md";
import eli7 from '/src/assets/images/Ellipse 3.png';

const PopularContent = () => {
    return(
        <main>
            <div className="popular_container">
                <div className="heading-container">
                    <h2 className="popular_title">Popular Products</h2>
                    <div className="Heading_icon">
                            <div className="directions-icon">
                                <MdChevronLeft className="direction_icons left"/>
                                <MdChevronRight className="direction_icons right"/> 
                            </div>  
                    </div>
                </div>

                <div className="popular_cards row">

                    <div className="first-content">
                        <div className="single_card first">
                            <img src={image1}/>
                                <div className="text">
                                    <span className="title">ALLEY FACE CREAM</span>
                                    <span className="price">$45.00</span>
                                </div>
                                <div className="add-link">
                                        <Link to="#">Add to cart <MdEast/> </Link>
                                </div>
                                <img className="elipse8" src={eli7} />
                                <img className="elipse9" src={eli7} />      
                        </div>
                       
                        <div className="single_card second">
                            <img src={image2}/>
                                    <div className="text">
                                        <span className="title">PHILAE HAIR SERUM</span>
                                        <span className="price">$60</span>
                                    </div>
                                    <div className="add-link">
                                            <Link to="#">Add to cart <MdEast/> </Link>
                                    </div>
                        </div>
                    </div>
                    
                    <div className="second-content">
                        <div className="single_card third">
                                <img src={image4}/>
                                        <div className="text">
                                            <span className="title">ALLY BODY WASH</span>
                                            <span className="price">$45.00</span>
                                        </div>
                                        <div className="add-link">
                                            <Link to="#">Add to cart <MdEast/> </Link>
                                        </div>
                        </div>
                        <div className="single_card fourth">
                            <img src={image3}/>
                            <div className="text">
                                <span className="title">ALLEY 2X CLEANSER</span>
                                <span className="price">$60</span>
                            </div>
                            <div className="add-link">
                                    <Link to="#">Add to cart <MdEast/> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </main>
    )
}

export default PopularContent;