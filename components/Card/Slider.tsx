import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SliderVariants, SliderWrap } from "./styled";
import { FC, useRef } from "react";
import { ImgWrap } from "styles/img-wrap";
import Image from "next/image";
import Chip from "components/Chip";
import { useState } from "react";

interface ISlider {
  data?: any;
}

const Slider: FC<ISlider> = ({}) => {

  const swiperRef = useRef(null);
  const [index, setIndex] = useState<number>(0)

  const handleClick = (idx: number) => {
    if(swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideTo(idx)
      setIndex(idx)
    }
  }

  return (
    <SliderWrap>
      <Swiper
        ref={swiperRef}
        onActiveIndexChange={index => setIndex(index.activeIndex)}
        style={{
          overflow: "visible",
        }}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide style={{height: 'auto'}}>
          <ImgWrap>
            <Image src="/img/flash-1.webp" fill alt="" />
          </ImgWrap>
        </SwiperSlide>
        <SwiperSlide style={{height: 'auto'}}>
          <ImgWrap>
            <Image src="/img/flash-1.webp" fill alt="" />
          </ImgWrap>
        </SwiperSlide>
      </Swiper>
      <SliderVariants>
        <Chip label="varia" onClick={() => handleClick(0)} variant={index === 0 ? 'filled' : 'outlined'}/>
        <Chip label="varia" onClick={() => handleClick(1)} variant={index === 1 ? 'filled' : 'outlined'} />
      </SliderVariants>
    </SliderWrap>
  );
};

export default Slider;
