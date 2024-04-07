import { formatWeather } from "@/shared/helpers/formatWeather";
import { IForecastWeather, IWeather } from "@/shared/interfaces";
import styles from "./styles.module.css";
import { weatherIcon } from "@/shared/assets";
import { formatDateSlice } from "@/shared/helpers/formatDateSlice";
import { isCurrentWeather } from "../helper/isCurrentWeather";

interface Props {
  data: IWeather | IForecastWeather;
  type?: "current" | "forecast";
}

const WeatherCard = ({ data, type = "current" }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        {isCurrentWeather(data) ? (
          <>
            <p>Now</p>
            <p>{formatDateSlice(new Date())}</p>
          </>
        ) : (
          <>
            <p></p>
            <p>{`${formatDateSlice(new Date(data.dt_txt))}`}</p>
          </>
        )}
      </div>
      <div className={`${styles.body} ${type === "current" ? styles.current : styles.forecast}`}>
        <div>
          <img
            className={styles.icon}
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            title={`${data.weather[0].description}`}
            alt={`${data.weather[0].description}`}
          />
          {type === "current" && <p>{data.weather[0].description}</p>}
          <p className={styles.temp}>{formatWeather(data.main.temp)}</p>
        </div>
        <div className={styles.info}>
          <div>
            {type === "current" && <p>humidity</p>}
            <div className={styles.description}>
              <img width={24} src={weatherIcon.humidity} alt="humidity" />
              <span>{data.main.humidity}%</span>
            </div>
          </div>
          <div>
            {type === "current" && <p>wind speed</p>}
            <div className={styles.description}>
              <img width={24} src={weatherIcon.wind} alt="wind" />
              <span>{data.wind.speed} m/s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
