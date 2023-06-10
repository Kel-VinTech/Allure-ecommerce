import data from '/src/data/LearnAbout.js';
import "/src/scss/LearnAbout.scss";


const LearnAbout = () => {
    return (
        <main>
            <h2 className="head-text">Learn about necessities</h2>
            <div className="learn_container row">
                 {data.map(item => (
                        <div key={item.id} className="single-container">
                            <img src={item.image} alt="image" />
                                <div className="learn-text">
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </div>
                        </div>
                 ))}   
                
            </div>
        </main>
    )
}

export default LearnAbout;