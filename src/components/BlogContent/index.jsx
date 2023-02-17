import "/src/scss/Blog.scss";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import data from '/src/data/Blog.js';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/scss';
import "swiper/scss/free-mode";
import 'swiper/scss/pagination';


const BlogContent = (props) => {
    
    const mobileStyle = {
      padding: '15px 0',
      color: '#292929',
      fontSize: '18px'
    }
    return (
        <main>
          <div className="content">
                    <div className="heading">
                        <h1 className="heading_text">Allure’s Blog</h1>
                        <div className="Heading_icons">
                            {/* <FaAngleLeft className="direction_icons left"/>
                            <FaAngleRight className="direction_icons right"/> */}
                            <p>hello</p>
                        </div>
                    </div>
                    <p className="text">A close look at the skin care life and routine of celebrities, customers’  reviews about products,and inside scoop from our aesthetic experts.
                    </p>
            </div>

            <Swiper className="container_card row"
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                pagination={{ clickable: true }}
                breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween:30,
                    },
                    480: {
                      slidesPerView: 1,
                      spaceBetween:30,
                    },
                    768: {
                      
                      slidesPerView: 2,
                      spaceBetween:30,
                    },
                    1024: {
                      
                      slidesPerView: 3,
                      spaceBetween:60,
                    },
                  }}
            >
              {data.map(user => (
                  <SwiperSlide key={user.id} className="single_container">
                    <div className="swiper_image">
                        <img src={user.image} />
                    </div>
                  <div className="swiper_text">
                    <h2 className="title">{user.title}</h2>
                    <p >{user.text}</p>
                  </div>
              </SwiperSlide>
              
              ))}
         </Swiper>
        </main>
 )}


export default BlogContent;