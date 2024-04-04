import { weatherApi } from "@/entities/weather/api/weatherApi";
import { combineReducers } from "@reduxjs/toolkit/react";
import { searchReducer } from "@/features/search/index";

export const rootReducer = combineReducers({
  search: searchReducer,
  [weatherApi.reducerPath]: weatherApi.reducer,
});
