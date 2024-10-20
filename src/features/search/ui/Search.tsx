import styles from "./styles.module.css";
import { CiSearch } from "react-icons/ci";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
  return (
    <div className={styles.search}>
      <CiSearch className={styles.icon} size={30} />
      <input
        className={styles.input}
        type="search"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="city..."
      />
    </div>
  );
};

export default Search;
