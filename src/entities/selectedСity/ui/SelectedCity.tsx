import styles from "./styles.module.css";

interface Props {
  cityName: string;
}

const SelectedСity = ({ cityName }: Props) => {
  return (
    <div className={styles.selectedСity}>
      <p>Weather in:</p>
      <h3 className={styles.name}>{cityName}</h3>
    </div>
  );
};

export default SelectedСity;
