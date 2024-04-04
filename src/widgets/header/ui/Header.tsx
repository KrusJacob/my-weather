import { Search, setSearch } from "@/features/search";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@/app/appStore";

const Header = () => {
  const keywords = useAppSelector((state) => state.search.keywords);
  const dispatch = useAppDispatch();

  return (
    <header className={styles.header}>
      <div>
        <h2>My Weather</h2>
      </div>
      <Search keywords={keywords} setKeywords={(keywords) => dispatch(setSearch(keywords))} />
    </header>
  );
};

export default Header;
