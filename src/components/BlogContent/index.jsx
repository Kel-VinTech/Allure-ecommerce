import "/src/scss/Blog.scss";
import data from '/src/data/Blog.js';
import { Link } from "react-router-dom";
import { MdChevronLeft,MdChevronRight, MdEast } from "react-icons/md";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/scss';
import "swiper/scss/free-mode";
import 'swiper/scss/pagination';
import {motion } from "framer-motion"


const BlogContent = (props) => {
   
    return (
        <main  className="row">
          <div className="blog_content">
            <div className="blog_content1 row">
                <div id="blog" className="heading">
                    <h1 className="heading_text">Allure’s Blog</h1>
                    <div className="Heading_icons">
                        <div className="directions-icon">
                          <MdChevronLeft className="direction_icons left"/>
                          <MdChevronRight className="direction_icons right"/>
                          
                        </div>
                        
                    </div>
                </div>
                <p className="text">A close look at the skin care life and routine of celebrities, customers’ <br />  reviews about products,and inside scoop from our aesthetic experts.
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
                    500: {
                      slidesPerView: 1,
                      spaceBetween:30,
                    },
                    648: {
                      slidesPerView: 2,
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
                        <motion.img whileHover={{scale:0.9}}  src={user.image} />
                    </div>
                  <div className="swiper_text">
                    <h2 className="title">{user.title}</h2>
                    <p >{user.text}</p>
                  </div>
                  <div className="read-link">
                      <Link to="#">Read more <MdEast/> </Link>
                  </div>
              </SwiperSlide>
              
              ))}
         </Swiper>
          </div>
        </main>
 )}


export default BlogContent;