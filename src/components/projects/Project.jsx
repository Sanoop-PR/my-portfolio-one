import React from "react";
import "./project.css";
import  carRental  from "../../assets/car-rental.png";
import  clickandbuy  from "../../assets/clickandbuy.png";
import  mediamate  from "../../assets/mediamate-high-resolution-logo-transparent.png";
import  todo  from "../../assets/todo.png";
import  doThis  from "../../assets/DT.png";


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
          <a href="https://github.com/Sanoop-PR/cars-rental.git" target="blank"><img src={carRental} alt="" className="testimonial_img" />
          <h3 className="testimonial_name">car rental</h3>
          <p className="testimonial_description">Mean Project</p></a>
        </SwiperSlide>
        <SwiperSlide className="testimonial_card" >
          <a href="https://github.com/Sanoop-PR/Click_and_Buy.git"><img src={clickandbuy} alt="" className="testimonial_img" />
          <h3 className="testimonial_name">Click & Buy</h3>
          <p className="testimonial_description">Mern Project</p></a>
        </SwiperSlide>
        <SwiperSlide className="testimonial_card" >
          <a href="https://github.com/Sanoop-PR/mediamate.git"><img src={mediamate} alt="" className="testimonial_img" />
          <h3 className="testimonial_name">Mediamate</h3>
          <p className="testimonial_description">Mern Project</p></a>
        </SwiperSlide>
        <SwiperSlide className="testimonial_card" >
          <a href="https://github.com/Sanoop-PR/mern_todo"><img src={todo} alt="" className="testimonial_img" />
          <h3 className="testimonial_name">Todo App</h3>
          <p className="testimonial_description">Mern Project</p></a>
        </SwiperSlide>
        <SwiperSlide className="testimonial_card" >
          <a href="https://github.com/Sanoop-PR/do_this_frontend.git"><img src={doThis} alt="" className="testimonial_img" />
          <h3 className="testimonial_name">Do This</h3>
          <p className="testimonial_description">React Native project</p></a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Project;
