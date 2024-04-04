import styles from "./styles.module.css";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type="search"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="search"
      />
    </div>
  );
};

export default Search;
