import CurrentWeather from "./currentWeather/CurrentWeather";
import styles from "./styles.module.css";

const MainPage = () => {
  return (
    <main className={styles.main}>
      <CurrentWeather />
    </main>
  );
};

export default MainPage;
