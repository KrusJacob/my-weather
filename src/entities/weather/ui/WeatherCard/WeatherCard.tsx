import { IWeather } from "@/shared/interfaces";
import styles from "./styles.module.css";
import { formatDateSlice } from "@/shared/helpers/formatDateSlice";

import { WeatherData } from "../..";
import withSkeleton from "@/shared/hocs/withSkeleton";
import { formatWeather } from "@/shared/helpers/formatWeather";
import ForecastWeather from "@/pages/main/ui/forecastWeather/ForecastWeather";

interface Props {
  data?: IWeather | null;
}

const WeatherCard = ({ data }: Props) => {
  console.log(data);
  if (!data) {
    return;
  }

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <p className={styles.city}>{data.name}</p>
        <p>Now {formatDateSlice(new Date())}</p>
      </div>
      <div className={styles.body}>
        <p className={styles.temp}>{formatWeather(data.main.temp)}</p>
        <img
          className={styles.icon}
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          title={`${data.weather[0].description}`}
          alt={`${data.weather[0].description}`}
        />
        <p>{data.weather[0].description}</p>
      </div>
      <div className={styles.info}>
        <WeatherData type="humidity" data={data.main.humidity} />
        <WeatherData type="windSpeed" data={data.wind.speed} />
        <WeatherData type="pressure" data={data.main.pressure} />
      </div>
      <div className={styles.divider}></div>

      <ForecastWeather />
    </div>
  );
};

export default withSkeleton(WeatherCard);
