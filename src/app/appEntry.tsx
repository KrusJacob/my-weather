import ReactDOM from "react-dom/client";
import BaseLayout from "./layouts/BaseLayout";
import { WeatherProvider } from "./providers/weatherProvider";
import "@/shared/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <WeatherProvider>
    <BaseLayout />
  </WeatherProvider>
);
