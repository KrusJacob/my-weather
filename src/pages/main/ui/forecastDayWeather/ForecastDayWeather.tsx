import { IForecastWeather } from "@/shared/interfaces";
import styles from "./styles.module.css";
import { WeatherCard } from "@/entities/weather";
import { formatDatebyMounth } from "@/shared/helpers/formatDatebyMounth";

interface Props {
  items: IForecastWeather[];
}

const ForecastDayWeather = ({ items }: Props) => {
  return (
    <>
      <h4 className={styles.date}>{formatDatebyMounth(new Date(items[0].dt_txt))}</h4>
      <div className={styles.list}>
        {items.map((item) => (
          <WeatherCard key={item.dt} data={item} type="forecast" />
        ))}
      </div>
    </>
  );
};

export default ForecastDayWeather;
