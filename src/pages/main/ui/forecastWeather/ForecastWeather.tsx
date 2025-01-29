import { useGetForecastWeatherQuery } from "@/entities/weather/api/weatherApi";
import styles from "./styles.module.css";
import ForecastDayWeather from "../forecastDayWeather/ForecastDayWeather";
import { filterWeatherByDay } from "@/shared/helpers/filterWeatherByDay";
import { useAppSelector } from "@/app/appStore";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { formatDatebyMounth } from "@/shared/helpers/formatDatebyMounth";
import { useEffect, useState } from "react";
import { IForecastWeather } from "@/shared/interfaces";

const ForecastWeather = () => {
  const [tab, setTab] = useState(0);
  const [forecast, setForecast] = useState<IForecastWeather[][]>([]);

  const keywords = useAppSelector((state) => state.search.filters.keywords);
  const forecastWeathers = useAppSelector((state) => state.weather.forecastWeather);
  const debouncedKeywords = useDebounce(keywords);
  const { isLoading } = useGetForecastWeatherQuery(debouncedKeywords);

  useEffect(() => {
    if (!!forecastWeathers.length) {
      setForecast(filterWeatherByDay(forecastWeathers));
    }
  }, [forecastWeathers]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {!isLoading &&
          forecast.map((slice, i) => (
            <div key={i} onClick={() => setTab(i)} className={`${styles.tab} ${tab === i ? styles.active : ""}`}>
              {formatDatebyMounth(new Date(slice[0].dt_txt))}
            </div>
          ))}
      </div>
      <div>
        <ForecastDayWeather isLoading={isLoading} items={forecast[tab]} />
      </div>
    </div>
  );
};

export default ForecastWeather;
