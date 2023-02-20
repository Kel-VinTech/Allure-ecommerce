import "/src/scss/Popular.scss";
// import data from '/src/data/TopSales.js';
import { MdChevronLeft,MdChevronRight, MdEast } from "react-icons/md";
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
            </div>
        </main>
    )
}

export default PopularContent;