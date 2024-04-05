import styles from "./styles.module.css";

interface Props {
  message: string;
}

const Error = ({ message }: Props) => {
  return <div className={styles.error}>{message}</div>;
};

export default Error;
