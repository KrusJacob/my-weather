import styles from "./styles.module.css";

interface Props {
  cityName: string;
  isLoading: boolean;
}

const SelectedСity = ({ cityName, isLoading }: Props) => {
  return (
    <div className={styles.selectedСity}>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <p>Weather in:</p>
          <h3 className={styles.name}>{cityName}</h3>
        </>
      )}
    </div>
  );
};

export default SelectedСity;
