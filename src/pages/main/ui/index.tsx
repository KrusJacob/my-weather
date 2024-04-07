import CurrentWeather from "./currentWeather/CurrentWeather";
import ForecastWeather from "./forecastWeather/ForecastWeather";
import styles from "./styles.module.css";

const MainPage = () => {
  return (
    <main className={styles.main}>
      <CurrentWeather />
      <ForecastWeather />
    </main>
  );
};

export default MainPage;
