import { formatWeather } from "@/shared/helpers/formatWeather";
import { IForecastWeather } from "@/shared/interfaces";
import styles from "./styles.module.css";
import { formatDateSlice } from "@/shared/helpers/formatDateSlice";

const WeatherMiniCard = ({ item }: { item: IForecastWeather }) => {
  return (
    <div className={styles.mini_card}>
      <p>{formatDateSlice(new Date(item.dt_txt))}</p>

      <img
        className={styles.icon}
        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        title={`${item.weather[0].description}`}
        alt={`${item.weather[0].description}`}
      />

      <p className={styles.temp}>{formatWeather(item.main.temp)}</p>
    </div>
  );
};

export default WeatherMiniCard;
