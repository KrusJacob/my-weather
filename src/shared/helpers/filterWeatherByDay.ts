import { IForecastWeather } from "../interfaces";

export function filterWeatherByDay(arr: IForecastWeather[]) {
  const res = [];
  let currentDay = new Date(arr[0].dt_txt).getDate();
  let dayArr = [];

  for (let i = 0; i < arr.length; i++) {
    const day = new Date(arr[i].dt_txt).getDate();

    if (day === currentDay) {
      dayArr.push(arr[i]);
    } else {
      res.push(dayArr);
      dayArr = [];
      dayArr.push(arr[i]);
    }
    currentDay = day;
  }

  return res;
}
