import React from "react";
import "./project.css";
import  carRental  from "../../assets/car-rental.png";
import  clickandbuy  from "../../assets/clickandbuy.png";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function Project() {
  return (
    <section className="testimonial container section">
      <h2 className="section_title">My Project</h2>
      {/* <span className="section_title"></span> */}
      <Swiper
        className="testimonial_container"
        // slidesPerView={1}
        loop={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className="testimonial_card">
          <a href="https://car-rental-car.netlify.app/" target="blank"><img src={carRental} alt="" className="testimonial_img" /></a>
          <h3 className="testimonial_name">car rental</h3>
          <p className="testimonial_description">Mean Project</p>
        </SwiperSlide>
        <SwiperSlide className="testimonial_card" >
          <img src={clickandbuy} alt="" className="testimonial_img" />
          <h3 className="testimonial_name">Click & Buy</h3>
          <p className="testimonial_description">Mern Project</p>
        </SwiperSlide>
        {/* <SwiperSlide className="testimonial_card" >
          <img src={Image1} alt="" className="testimonial_img" />
          <h3 className="testimonial_name">drtfgyuhijkl</h3>
          <p className="testimonial_description">fdghjklghjkl</p>
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
}

export default Project;
