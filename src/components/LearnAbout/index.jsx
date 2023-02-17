
import "/src/scss/LearnAbout.scss";
import image3 from "/src/assets/images/Rectangle 11.png"

const LearnAbout = () => {
    return (
        <main>
            <h2 className="head-text">learn more </h2>
            <div className="learn_container row">
                    
                <div className="single-container">
                    <img src={image3} alt="" />
                    <div className="learn-text">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, minima!</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LearnAbout;