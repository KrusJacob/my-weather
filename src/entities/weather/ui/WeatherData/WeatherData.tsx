import { formatWeather } from "@/shared/helpers/formatWeather";
import styles from "./styles.module.css";
import { IWeatherData } from "../..";
import { weatherIcon } from "@/shared/assets";

interface Props {
  data: number;
  type?: IWeatherData;
}

const WeatherData = ({ data, type = "temp" }: Props) => {
  if (type === "temp") {
    return <div className={styles.temp}>{formatWeather(data)}</div>;
  }
  if (type === "humidity") {
    return (
      <div className={styles.description}>
        <img width={24} src={weatherIcon.humidity} alt="humidity" />
        <span>{data}%</span>
      </div>
    );
  }
  if (type === "windSpeed") {
    return (
      <div className={styles.description}>
        <img width={24} src={weatherIcon.wind} alt="wind" />
        <span>{data} m/s</span>
      </div>
    );
  }
};

export default WeatherData;
