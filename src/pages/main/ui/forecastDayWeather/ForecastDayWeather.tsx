import { IForecastWeather } from "@/shared/interfaces";
import styles from "./styles.module.css";
import { WeatherCard, WeatherData } from "@/entities/weather";
import { formatDatebyMounth } from "@/shared/helpers/formatDatebyMounth";
import { isToday } from "@/shared/helpers/isToday";
import { useState } from "react";

interface Props {
  items: IForecastWeather[];
}

const ForecastDayWeather = ({ items }: Props) => {
  const [isShowForecast, setIsShowForecast] = useState(false);

  return (
    <>
      <div className={styles.head} onClick={() => setIsShowForecast(!isShowForecast)}>
        {isToday(items[0].dt_txt) ? (
          <p>Today</p>
        ) : (
          <>
            <h4>{formatDatebyMounth(new Date(items[0].dt_txt))}</h4>
            <WeatherData data={items[5].main.temp} />
          </>
        )}
      </div>
      {isShowForecast && (
        <div className={styles.list}>
          {items.map((item) => (
            <WeatherCard key={item.dt} data={item} type="forecast" />
          ))}
        </div>
      )}
    </>
  );
};

export default ForecastDayWeather;
