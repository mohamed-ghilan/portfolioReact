import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/c1.jpg";
import AVATAR2 from "../../assets/c2.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="Testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials-container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVATAR1}></img>
          </div>
          <h5 className="client__name">Ahmad</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
            sunt. Exercitationem numquam placeat ipsum, eligendi tempora culpa
            perferendis non magnam deleniti libero alias dolorum sequi ullam
            itaque sapiente. Laboriosam, alias.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVATAR2}></img>
          </div>
          <h5 className="client__name">Sara</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
            sunt. Exercitationem numquam placeat ipsum, eligendi tempora culpa
            perferendis non magnam deleniti libero alias dolorum sequi ullam
            itaque sapiente. Laboriosam, alias.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVATAR1}></img>
          </div>
          <h5 className="client__name">Khalid</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVATAR2}></img>
          </div>
          <h5 className="client__name">Amal</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
            sunt. Exercitationem numquam placeat ipsum, eligendi tempora culpa
            perferendis non magnam deleniti libero
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
