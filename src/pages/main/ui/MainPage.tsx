import { WeatherCard } from "@/entities/weather";
import { useGetCurrentWeatherQuery } from "@/entities/weather/api/weatherApi";
import styles from "./styles.module.css";
import { useAppSelector } from "@/app/appStore";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { Error } from "@/shared/ui";

const MainPage = () => {
  const keywords = useAppSelector((state) => state.search.filters.keywords);
  const currentWeather = useAppSelector((state) => state.weather.currentWeather);
  const debouncedKeywords = useDebounce(keywords);
  const { isLoading, isError } = useGetCurrentWeatherQuery(debouncedKeywords);

  return (
    <main className={styles.main}>
      {!isLoading && currentWeather && <WeatherCard data={currentWeather} />}
      {isError && <Error message={`city: "${debouncedKeywords}" not found`} />}
    </main>
  );
};

export default MainPage;
