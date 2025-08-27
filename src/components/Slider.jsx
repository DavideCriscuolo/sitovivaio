import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./../scss/Slider.scss";

export default function Slider(prop) {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        {prop.images.map((item) => {
          return (
            <SwiperSlide>
              <img
                className="w-100"
                key={item.id}
                src={item.src}
                alt={item.alt}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
