import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../appStore";

interface Props {
  children: ReactNode;
}

export const WeatherProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
