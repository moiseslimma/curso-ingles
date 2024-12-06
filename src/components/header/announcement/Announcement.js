import React from "react";
import * as S from "./stylesAnnounc";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Announc } from "./dataAnnoucement";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

export const Announcement = () => {
  SwiperCore.use([Autoplay]);

  return (
    <S.Div>
      <Swiper
        style={{ width: "100%", height: "250px" }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        {Announc.map((item) => (
          <SwiperSlide key={item.id}>
            <S.SliderItem data-aos="flip-left">
              <span>{item.spann}</span>
              <h1>{item.titulo}</h1>
            </S.SliderItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <S.Button>EU QUERO</S.Button>
    </S.Div>
  );
};
