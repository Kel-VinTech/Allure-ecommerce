import "/src/scss/Blog.scss";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import data from '/src/data/Blog.json';



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


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
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={3}
                        
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                    {data.map(user => (
                        <SwiperSlide key={user.id}>
                            <div>
                                
                                {user.title}
                                
                            </div>
                        </SwiperSlide>
                    ))}
                        
                    </Swiper>
            </div>
        </main>
    )
}

export default BlogContent;