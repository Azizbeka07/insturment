import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFade, Navigation, Autoplay } from "swiper/modules";

import GeneratorsImg from "@/assets/images/generators.jpg";
import SnowfallImg from "@/assets/images/snowfall.jpg";
import ToolImg from "@/assets/images/tool.jpg";

const Banner = () => {
  return (
    <div className="container">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        className="mySwiper"
        modules={[EffectFade, Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="slide">
          <h1 className="slide__title">Сильнее Снегопада</h1>
          <p className="slide__text">
            Большой выбор снегоуборочных машин. Качественные устройства для
            любого бюджета
          </p>
          <button className="slide__btn">Подробнее</button>
          <img src={SnowfallImg} />
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="slide__title">FUBAG ГЕНЕРАТОРЫ</h1>
          <p className="slide__text">
          Большой выбор снегоуборочных машин. Качественные устройства для
            любого бюджета
          </p>
          <button className="slide__btn">Подробнее</button>
          <img src={GeneratorsImg} />
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="slide__title color">Электро-Бензо инструмент</h1>
          <p className="slide__text color">
            Большой выбор снегоуборочных машин. Качественные устройства для
            любого бюджета
          </p>
          <button className="slide__btn">Подробнее</button>
          <img src={ToolImg} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
