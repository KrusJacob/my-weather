import { IForecastWeather } from "@/shared/interfaces";
import styles from "./styles.module.css";
import WeatherMiniCard from "@/entities/weather/ui/WeatherMiniCard/WeatherMiniCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useRef } from "react";

interface Props {
  items: IForecastWeather[];
  isLoading: boolean;
}

const ForecastDayWeather = ({ items, isLoading }: Props) => {
  const ref = useRef(null);
  if (!items) {
    return null;
  }

  console.log(ref);

  return (
    <Swiper
      ref={ref}
      className={styles.forecast}
      spaceBetween={20}
      modules={[Navigation]}
      navigation
      breakpoints={{
        240: {
          slidesPerView: 4,
        },
        567: {
          slidesPerView: 5,
        },
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.dt_txt}>
          <WeatherMiniCard item={item} key={item.dt_txt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ForecastDayWeather;
