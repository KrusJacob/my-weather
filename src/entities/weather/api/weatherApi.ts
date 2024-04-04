import { IWeather } from "@/shared/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCurrentWeather } from "../model/weatherSlice";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query<IWeather, string | null>({
      query: (city) => {
        const defaultCity = "Minsk";
        return {
          url: "weather",
          params: {
            units: "metric",
            q: city || defaultCity,
            appid: API_KEY,
          },
        };
      },
      async onQueryStarted(_arq, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;

        dispatch(setCurrentWeather(data));
      },
    }),
  }),
});

export const { useGetCurrentWeatherQuery } = weatherApi;
