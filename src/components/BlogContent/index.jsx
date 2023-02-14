import "/src/scss/Blog.scss";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import data from '/src/data/Blog.js';

import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode,Pagination,Scrollbar} from 'swiper';
import 'swiper/scss';
import "swiper/scss/free-mode";
import 'swiper/scss/pagination';


const BlogContent = (props) => {
    // <div className="content">
    //                 <div className="heading">
    //                     <h1 className="heading_text">Allure’s Blog</h1>
    //                     <div className="Heading_icons">
    //                         {/* <FaAngleLeft className="direction_icons left"/>
    //                         <FaAngleRight className="direction_icons right"/> */}
    //                         <p>hello</p>
    //                     </div>
    //                 </div>
    //                 <p className="text">A close look at the skin care life and routine of celebrities, customers’  reviews about products,and inside scoop from our aesthetic experts.
    //                 </p>
    //             </div>
    
    return (
        <main>
            <Swiper className="container_card row"
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={3}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    350: {
                      slidesPerView: 1,
                      spaceBetween:30,
                    },
                    768: {
                      
                      slidesPerView: 2,
                    },
                  }}
            >
              {data.map(user => (
                  <SwiperSlide key={user.id} className="single_container">
                    <div className="swiper_image">
                    <img src={user.image} />
                    </div>
                  <h2>{user.title}</h2>
                  <p>{user.text}</p>
              </SwiperSlide>
              
              ))}
         </Swiper>
        </main>
 )}


export default BlogContent;