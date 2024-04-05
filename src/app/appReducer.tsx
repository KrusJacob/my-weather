import { weatherApi } from "@/entities/weather/api/weatherApi";
import { combineReducers } from "@reduxjs/toolkit/react";
import { weatherReducer } from "@/entities/weather/index";
import { searchReducer } from "@/features/search";

export const rootReducer = combineReducers({
  weather: weatherReducer,
  search: searchReducer,
  [weatherApi.reducerPath]: weatherApi.reducer,
});
