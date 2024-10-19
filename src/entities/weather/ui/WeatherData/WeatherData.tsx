import styles from "./styles.module.css";
import { IWeatherData } from "../..";
import { LuWind } from "react-icons/lu";
import { IoWaterOutline } from "react-icons/io5";
import { VscCompass } from "react-icons/vsc";

interface Props {
  data: number;
  type?: IWeatherData;
}

const WeatherData = ({ data, type = "temp" }: Props) => {
  if (type === "humidity") {
    return (
      <div title="humidity" className={styles.description}>
        <IoWaterOutline size={26} />
        <span>{data}%</span>
      </div>
    );
  }
  if (type === "windSpeed") {
    return (
      <div title="windSpeed" className={styles.description}>
        <LuWind size={26} />
        <span>{data} m/s</span>
      </div>
    );
  }
  if (type === "pressure") {
    return (
      <div title="pressure" className={styles.description}>
        <VscCompass size={26} />
        <span>{data} hPa</span>
      </div>
    );
  }
};

export default WeatherData;
