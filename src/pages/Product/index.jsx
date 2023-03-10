import "/src/scss/ProductPage.scss";
import { Link } from "react-router-dom";

const Product = () => {
    return(
       <section className="product_store">
        <div className="product-shop">
        <aside>
            <h2>
                Sort by
            </h2>
            <div className="new-release">
                <Link to="#" onClick={() => alert("hello")}>
                   New Release
                </Link>
                <Link to="#" onClick={() => alert("hello")}>
                    Price : High to Low
                </Link>
                <Link to="#" onClick={() => alert("hello")}>
                    Price : Low to High
                </Link>
            </div>
            <div className="select-category">
                <h2>Category</h2>
                <div className="checks">
                    <input type="checkbox" name="scrub" id="scrub" />
                    <label htmlFor="scrub">Body scrubs</label><br/>
                    <input type="checkbox" name="Lip" id="Lip" />
                    <label htmlFor="Lip">Lip care</label><br/>
                    <input type="checkbox" name="Glow" id="Glow" />
                    <label htmlFor="Glow">Glow recipe</label><br/>
                    <input type="checkbox" name="body scrub" id="" />
                    <label htmlFor="scrub">Moisturizers</label><br/>
                </div>
            </div>

            <div className="price-category">
                <h2>Price</h2>
                <Link to="#">All</Link>
                <Link to="#">Below $100.00</Link>
                <Link to="#">$100.00 - $150.00</Link>
                <Link to="#">$150.00 - $200.00</Link>
                <Link to="#">Above $200.00</Link>
            </div>
        </aside>
        <main>
            <div className="product-container">
                <h3>hello</h3>
            </div>
        </main>
        </div>
       </section>
    )
}

export default Product;