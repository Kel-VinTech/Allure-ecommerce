import "/src/scss/TopSales.scss";
import { MdChevronLeft,MdChevronRight, MdEast } from "react-icons/md";

const TopSales = () => {
    return (
        <main>
            <div className="heading-container">
                <h2>Top picks from <s>SALES</s> </h2>
                <div className="Heading_icons">
                        <div className="directions-icon">
                          <MdChevronLeft className="direction_icons left"/>
                          <MdChevronRight className="direction_icons right"/> 
                        </div>  
                </div>
            </div>
        </main>
    )
}

export default TopSales;