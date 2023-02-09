import "/src/scss/Blog.scss";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';

const BlogContent = () => {
    return (
        <main>
            <div className="row">
                <div className="Heading">
                    <h1>Allure's Blog</h1>
                    <div className="Heading_icons">
                        <FaAngleLeft className="direction_icons left"/>
                        <FaAngleRight className="direction_icons right"/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BlogContent;