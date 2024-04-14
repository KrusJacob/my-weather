import weatherReducer from "./model/weatherSlice";
import WeatherCard from "./ui/WeatherCard/WeatherCard";
import WeatherData from "./ui/WeatherData/WeatherData";
import { IWeatherData, IWeatherCard } from "./model/types";

export { WeatherCard, weatherReducer, WeatherData };
export type { IWeatherData, IWeatherCard };
