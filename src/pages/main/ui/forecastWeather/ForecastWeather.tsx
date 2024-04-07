import { useGetForecastWeatherQuery } from "@/entities/weather/api/weatherApi";
import styles from "./styles.module.css";
import ForecastDayWeather from "../forecastDayWeather/ForecastDayWeather";
import { filterWeatherByDay } from "@/shared/helpers/filterWeatherByDay";
import { useAppSelector } from "@/app/appStore";
import { useDebounce } from "@/shared/hooks/useDebounce";

const ForecastWeather = () => {
  const keywords = useAppSelector((state) => state.search.filters.keywords);
  const forecastWeathers = useAppSelector((state) => state.weather.forecastWeather);
  const debouncedKeywords = useDebounce(keywords);
  const { isLoading } = useGetForecastWeatherQuery(debouncedKeywords);

  return (
    <div className={styles.wrapper}>
      {!isLoading &&
        filterWeatherByDay(forecastWeathers).map((slice, i) => <ForecastDayWeather key={i} items={slice} />)}
    </div>
  );
};

export default ForecastWeather;
