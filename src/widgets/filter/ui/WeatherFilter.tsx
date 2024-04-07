import { useAppDispatch } from "@/app/appStore";
import { Search } from "@/features/search";
import { setSearch } from "@/features/search/model/searchSlice";
import { Error } from "@/shared/ui";

interface Props {
  keywords: string;
  isError: boolean;
  errorMessage: string;
}

const WeatherFilter = ({ keywords, isError, errorMessage }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Search keywords={keywords} setKeywords={(keywords) => dispatch(setSearch(keywords))} />
      {isError && <Error message={`city: "${errorMessage}" not found`} />}
    </>
  );
};

export default WeatherFilter;
