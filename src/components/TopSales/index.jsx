import "/src/scss/TopSales.scss";
import data from '/src/data/TopSales.js';
import { Link } from "react-router-dom";
import { MdChevronLeft,MdChevronRight, MdEast } from "react-icons/md";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/scss';
import "swiper/scss/free-mode";
import 'swiper/scss/pagination';

const TopSales = (props) => {
    return (
        <main>
            <div className="sale-content">
              <div className="heading-container">
                  <h2>Top picks from <s>SALES</s> </h2>
                  <div className="Heading_icon">
                          <div className="directions-icon">
                            <MdChevronLeft className="direction_icons left"/>
                            <MdChevronRight className="direction_icons right"/> 
                          </div>  
                  </div>
              </div>
            <Swiper className="container_card row"
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={4}
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
                      
                      slidesPerView: 3,
                      spaceBetween:30,
                    },
                    1024: {
                      
                      slidesPerView: 4,
                      spaceBetween:60,
                    },
                  }}
            >
                {data.map(item => (
                    <SwiperSlide key={item.id} className="single_container">
                    <div className="swiper-image">
                        <img src={item.image} />
                    </div>
                    <h3>{item.title}</h3>
                    <div className="swiper-prices">
                        <span>${item.price1}</span>
                        <span><s>${item.price2}</s></span>
                    </div>
                    <div className="add-link">
                      <Link to="#">Add to cart <MdEast/> </Link>
                  </div>
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </main>
    )
}

export default TopSales;