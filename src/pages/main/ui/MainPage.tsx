import { WeatherCard } from "@/entities/weather";
import { useGetCurrentWeatherQuery } from "@/entities/weather/api/weatherApi";
import styles from "./styles.module.css";
import { useAppSelector } from "@/app/appStore";
import { useDebounce } from "@/shared/hooks/useDebounce";

const MainPage = () => {
  const keywords = useAppSelector((state) => state.search.keywords);
  const debouncedKeywords = useDebounce(keywords);
  const { data, isLoading } = useGetCurrentWeatherQuery(debouncedKeywords);

  return <main className={styles.main}>{!isLoading && data && <WeatherCard data={data} />}</main>;
};

export default MainPage;
