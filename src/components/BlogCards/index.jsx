import data from '/src/data/Blog.js';
import{Link} from "react-router-dom"

const BlogCards = (props) => {
    return (
        <div className="card_container">
            <div className="card_image">
                {props.image}
            </div>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <Link to="#">Read more</Link>
        </div>
    )
}

export default BlogCards;
