import { useEffect, useRef } from "react";
import * as echart from "echarts";
import { IForecastWeather } from "@/shared/interfaces";
import { formatDateSlice } from "@/shared/helpers/formatDateSlice";

interface Props {
  forecastWeather: IForecastWeather[];
}
const WeatherChart = ({ forecastWeather }: Props) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current || !forecastWeather) return;

    const chart = echart.init(chartRef.current, "", {
      height: 250,
    });

    chart.setOption({
      xAxis: {
        type: "category",
        axisLabel: {
          color: "#ffffff",
        },
        data: forecastWeather.map((item) => formatDateSlice(new Date(item.dt_txt))),
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },

      yAxis: {
        type: "value",
        axisLabel: {
          color: "#ffffff",
          formatter: "{value} °C",
        },
        splitLine: {
          lineStyle: {
            color: "#ffffff75",
            type: "dashed",
          },
        },
      },
      series: [
        {
          name: "Temperature (°C)",
          data: forecastWeather.map((item) => item.main.temp),
          type: "line",
          smooth: true,
          itemStyle: {
            color: "#1760fd", // Цвет линии и точек
          },
        },
      ],
    });

    const handleResize = () => chart.resize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [forecastWeather]);

  return <div ref={chartRef} style={{ width: "100%", height: "200px" }}></div>;
};

export default WeatherChart;
