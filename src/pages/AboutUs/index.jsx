import data from '/src/data/AboutUs.js';
import "/src/scss/AboutUs.scss";
import image1 from "/src/assets/images/Rectangle 48.png"
import image2 from "/src/assets/images/Rectangle 49.png"
import image3 from "/src/assets/images/Rectangle 50.png"
import image4 from "/src/assets/images/Rectangle 52.png"
const AboutUs = ( props) => {

    return (
        <main>
            <div className="about_container">
            <div className="single-item row">
                    <div className="about-image">
                        <img src={image1} alt="" />
                    </div>
                    <div className="about-text">
                        <h3>OUR STORY</h3>
                        <p className="text">
                        We are a brand and representation for everyone
                        who believes that beauty does not come from a snapshot, but from a sequence.
                        </p>
                        <p className="message">
                        We recognise nature as bold and full of surprises,but we also saw that “natural beauty” brands were predictable and flat. So with our deliberate use of minimal colours, Art Deco grandeur, and modern aesthetics, 
                        we are unveiling what is actually ‘natural’ in beauty ;which are power,intrigue, and a bit of whimsy too.

                            </p>
                    </div>
                </div>
                <div className="single-item row">
                    
                    <div className="about-text">
                        <h3>OUR PHILOSOPHY</h3>
                        <p className="text">
                        We are a brand and representation for everyone  who believes that
                         beauty does not come from a snapshot, but from a sequence.

                        </p>
                        <p className="message">
                        We believe in inclusivity and equity. Our skincare products are tailored to care for all skin type and skin color.
                         They cater for your skin needs and work effectively irrespective of the type, foundation and color.

                        </p>
                    </div>
                    <div className="about-image">
                        <img src={image2} alt="" />
                    </div>
                </div>
                <div className="single-item row">
                    <div className="about-image">
                        <img src={image3} alt="" />
                    </div>
                    <div className="about-text">
                        <h3>With Allure, age is just a number! </h3>
                        <p className="text">
                        During our 60s and 70s, skin can feel dry and irritated. This happens for many reasons, including that skin is
                         thinner and loses water more easily. Medications and medical conditions can also play a role.
                        </p>
                        <p className="message">There is good news. The right skin care from Allure can improve how your skin feels — and looks.</p>
                    </div>
                </div>
                <div key={props.id} className="single-item row">
                    <div className="about-text">
                        <p className="message">
                         Our high-performance skin care line helps you achieve a healthy, 
                         clear complexion with results-driven formulas & powerful ingredients. 
                         Whether your skin is dry or oily, our hyaluronic acid skincare products will keep your
                          skin hydrated and nourished. Need to combat acne? Our salicylic acid skincare products
                           will help clear up breakouts and prevent future ones from forming. 
                         Are fine lines & wrinkles giving you a hard time? Our alpha hydroxy acids skincare products
                          are the perfect way to fight back against the signs of aging. With our premium natural 
                         & organic ingredients, you can be sure that every skincare product we make is pure & effective.

                        </p>
                    </div>
                    <div className="about-image">
                        <img src={image4} alt="" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutUs;