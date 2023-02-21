import "/src/scss/Popular.scss";
import image1 from "/src/assets/images/Rectangle 6.jpg"
import { Link } from "react-router-dom";
// import data from '/src/data/TopSales.js';
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
                                    <span className="title">Allure skincare</span>
                                    <span className="price">$60</span>
                                </div>
                                <div className="add-link">
                                        <Link to="#">Add to cart <MdEast/> </Link>
                                </div>
                                <img className="elipse8" src={eli7} />
                                <img className="elipse9" src={eli7} />      
                        </div>
                       
                        <div className="single_card second">
                            <img src={image1}/>
                                    <div className="text">
                                        <span className="title">Allure skincare</span>
                                        <span className="price">$60</span>
                                    </div>
                                    <div className="add-link">
                                            <Link to="#">Add to cart <MdEast/> </Link>
                                    </div>
                        </div>
                    </div>
                    
                    <div className="second-content">
                        <div className="single_card third">
                                <img src={image1}/>
                                        <div className="text">
                                            <span className="title">Allure skincare</span>
                                            <span className="price">$60</span>
                                        </div>
                                        <div className="add-link">
                                                <Link to="#">Add to cart <MdEast/> </Link>
                                        </div>
                        </div>
                        <div className="single_card fourth">
                            <img src={image1}/>
                            <div className="text">
                                <span className="title">Allure skincare</span>
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