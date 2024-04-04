import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  keywords: string;
}

const initialState: State = {
  keywords: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.keywords = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
