import { IWeather } from "@/shared/interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  currentWeather: IWeather | null;
}

const initialState: State = {
  currentWeather: null,
};

export const weatherSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setCurrentWeather: (state, action: PayloadAction<IWeather>) => {
      state.currentWeather = action.payload;
    },
  },
});

export const { setCurrentWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
