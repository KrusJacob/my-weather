import { WeatherCard } from "@/entities/weather";
import { useGetCurrentWeatherQuery } from "@/entities/weather/api/weatherApi";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { Error } from "@/shared/ui";
import { Search, setSearch } from "@/features/search";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const keywords = useAppSelector((state) => state.search.filters.keywords);
  const currentWeather = useAppSelector((state) => state.weather.currentWeather);
  const debouncedKeywords = useDebounce(keywords);
  const { isLoading, isError } = useGetCurrentWeatherQuery(debouncedKeywords);

  return (
    <main className={styles.main}>
      <Search keywords={keywords} setKeywords={(keywords) => dispatch(setSearch(keywords))} />
      {!isLoading && currentWeather && <WeatherCard data={currentWeather} />}
      {isError && <Error message={`city: "${debouncedKeywords}" not found`} />}
    </main>
  );
};

export default MainPage;
