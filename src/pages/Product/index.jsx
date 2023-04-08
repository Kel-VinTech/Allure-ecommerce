import { useState, useEffect } from "react";
import "/src/scss/ProductPage.scss";
import { Link } from "react-router-dom";
import ProductList from "../../components/ProductUI/ProductList";
import products from '/src/data/products.js';

import { MdChevronLeft,MdChevronRight } from "react-icons/md";


const Product = () => {
        const [mobile, setMobile] = useState(false)
    // filter the products base on the category
    
    const [data, setData] = useState(products)

    useEffect(() => {
        const filteredProducts = products.filter(
            (item) => item.category === "moisturizers"
        );

        setData(filteredProducts)
    },[]);

    return(
       <section className="product_store">
        <div className="heading-txt">
            <h2>Our Collections</h2>
            <button className="filter-btn"  onClick={() => setMobile(!mobile)}>
                            {mobile? 
                            <span className="filter">
                            <h3>Add filter </h3>
                            <MdChevronLeft />
                            </span> :
                        <span className="filter">
                        <h3>Add filter
                        </h3><MdChevronRight /></span>}
            </button>
        </div>
        <div className="product-shop ">
        <aside 
        className={mobile? "filter-aside active" : "sidebar"}
        onClick={()=> setMobile(false)}
            >
           <div className="aside_content">
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
           </div>
        </aside>


        <main>
            <div className="product-container">
                <ProductList data={data} />
            </div>
        </main>
        </div>
       </section>
    )
}

export default Product;