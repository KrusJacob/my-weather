import { IForecastWeather, IWeather } from "@/shared/interfaces";

export const isCurrentWeather = (type: IWeather | IForecastWeather): type is IWeather => {
  if ((type as IWeather).name) {
    return true;
  }
  return false;
};
