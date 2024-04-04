import { formatDate } from "@/shared/helpers/formatDate";
import { formatWeather } from "@/shared/helpers/formatWeather";
import { IWeather } from "@/shared/interfaces";
import styles from "./styles.module.css";
import { weatherIcon } from "@/shared/assets";

interface Props {
  data: IWeather;
}

const WeatherCard = ({ data }: Props) => {
  console.log(data);
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <h2 className={styles.name}>{data.name}</h2>
        <div>
          <p>Now</p>
          <p>{formatDate(new Date())}</p>
        </div>
      </div>
      <div className={styles.body}>
        <div>
          <img
            className={styles.icon}
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt=""
          />
          <p>{data.weather[0].description}</p>
          <p className={styles.temp}>{formatWeather(data.main.temp)}</p>
        </div>
        <div className={styles.info}>
          <div>
            <p>humidity</p>
            <div className={styles.description}>
              <img width={24} src={weatherIcon.humidity} alt="humidity" />
              <span>{data.main.humidity}%</span>
            </div>
          </div>
          <div>
            <p>wind speed</p>
            <div className={styles.description}>
              <img width={24} src={weatherIcon.wind} alt="wind" />
              <span>{data.wind.speed}km/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
