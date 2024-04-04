import { WeatherCard } from "@/entities/weather";
import { useGetCurrentWeatherQuery } from "@/entities/weather/api/weatherApi";
import styles from "./styles.module.css";
import { useAppSelector } from "@/app/appStore";
import { useDebounce } from "@/shared/hooks/useDebounce";

const MainPage = () => {
  const keywords = useAppSelector((state) => state.search.filters.keywords);
  const currentWeather = useAppSelector((state) => state.weather.currentWeather);
  const debouncedKeywords = useDebounce(keywords);
  const { isLoading } = useGetCurrentWeatherQuery(debouncedKeywords);

  return (
    <main className={styles.main}>{!isLoading && currentWeather && <WeatherCard data={currentWeather} />}</main>
  );
};

export default MainPage;
