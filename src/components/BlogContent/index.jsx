import "/src/scss/Blog.scss";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import data from '/src/data/Blog.js';

const BlogContent = (props) => {
    return (
        <main>
            <div className="row">
                <div className="content">
                    <div className="Heading">
                        <h1>Allure’s Blog</h1>
                        <div className="Heading_icons">
                            <FaAngleLeft className="direction_icons left"/>
                            <FaAngleRight className="direction_icons right"/>
                        </div>
                    </div>
                    <p className="text">A close look at the skin care life and routine of celebrities, customers’ reviews about products,and inside scoop from our aesthetic experts.
                    </p>
                </div>
        </div>  
     </main>
 )}


export default BlogContent;