import React, { useState } from "react";
import userComentSvg from "./Image.svg";
import "./ComentsSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Types from "../types/Types";

const ComentsSlider: React.FC = () => {
  const [objects, setObjects] = useState<Types[]>([
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis.",
      image: userComentSvg,
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis. 2",
      image: userComentSvg,
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis. 3",
      image: userComentSvg,
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis. 4",
      image: userComentSvg,
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="coments-slider">
      <div className="coments-slider-inner">
        <Swiper
          slidesPerView={3}
          spaceBetween={700}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          centeredSlides={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          style={{ height: "100%" }}
        >
          {objects.map((object, index) => (
            <SwiperSlide key={object.id}>
              <div
                className={`slider-elem ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <div className="slider-elems">
                  <div className="slider-elem-user-svg">
                    <img
                      src={object.image}
                      className="user-svg"
                      alt="user-svg"
                    />
                  </div>
                  <p className="user-coment-text-content">{object.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ComentsSlider;
