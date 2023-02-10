import "/src/scss/Blog.scss";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import data from '/src/data/Blog.js';

import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode,Pagination} from 'swiper';
import 'swiper/scss';
import "swiper/scss/free-mode";
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
                    <p className="text">A close look at the skin care life and routine of celebrities, customers’  reviews about products,and inside scoop from our aesthetic experts.
                    </p>
                </div>

                    <div className="container row">
                        <Swiper
                            freeMode={true}
                            grabCursor={true}
                            modules={[FreeMode,Pagination]}
                            slidesPerView={3}
                            spaceBetween={40}
                            pagination={{ clickable: true }}
                            className="blog_swiper"
                        >
                            <SwiperSlide>
                                <h1>side 1</h1>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h1>side 1</h1>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h1>side 1</h1>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h1>side 1</h1>
                            </SwiperSlide>
                        </Swiper>
                    </div>
            </div>  
        </main>
 )}


export default BlogContent;