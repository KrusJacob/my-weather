import { IForecastWeather, IWeather } from "@/shared/interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  currentWeather: IWeather | null;
  forecastWeather: IForecastWeather[];
}

const initialState: State = {
  currentWeather: null,
  forecastWeather: [],
};

export const weatherSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setCurrentWeather: (state, action: PayloadAction<IWeather>) => {
      state.currentWeather = action.payload;
    },
    setForecastWeather: (state, action: PayloadAction<IForecastWeather[]>) => {
      state.forecastWeather = action.payload;
    },
  },
});

export const { setCurrentWeather, setForecastWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
