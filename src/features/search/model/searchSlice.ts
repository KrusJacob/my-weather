import { IFilters } from "@/shared/interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  filters: IFilters;
}

const initialState: State = {
  filters: {
    keywords: "",
  },
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.filters.keywords = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
