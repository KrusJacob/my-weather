import { WeatherCard } from "@/entities/weather";
import { useGetCurrentWeatherQuery } from "@/entities/weather/api/weatherApi";
import styles from "./styles.module.css";
import { useAppSelector } from "@/app/appStore";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { WeatherFilter } from "@/widgets/filter";
import { SelectedСity } from "@/entities/selectedСity";

const CurrentWeather = () => {
  const keywords = useAppSelector((state) => state.search.filters.keywords);
  const currentWeather = useAppSelector((state) => state.weather.currentWeather);
  const debouncedKeywords = useDebounce(keywords);
  const { isLoading, isError } = useGetCurrentWeatherQuery(debouncedKeywords);

  return (
    <div className={styles.current}>
      <SelectedСity cityName={currentWeather?.name || ""} />
      <WeatherFilter keywords={keywords} isError={isError} errorMessage={debouncedKeywords} />
      {!isLoading && currentWeather && <WeatherCard data={currentWeather} />}
    </div>
  );
};

export default CurrentWeather;
