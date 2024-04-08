import { IForecastWeather, IWeather } from "@/shared/interfaces";
import styles from "./styles.module.css";
import { formatDateSlice } from "@/shared/helpers/formatDateSlice";
import { isCurrentWeather } from "../../helper/isCurrentWeather";
import { IWeatherCard, WeatherData } from "../..";

interface Props {
  data: IWeather | IForecastWeather;
  type?: IWeatherCard;
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
          <WeatherData data={data.main.temp} />
        </div>
        <div className={styles.info}>
          <div>
            {type === "current" && <p>humidity</p>}
            <WeatherData type="humidity" data={data.main.humidity} />
          </div>
          <div>
            {type === "current" && <p>wind speed</p>}
            <WeatherData type="windSpeed" data={data.wind.speed} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
