export const formatWeather = (value: number) => {
  const roundedValue = Math.round(value);
  let modifier = "";
  if (roundedValue > 0) {
    modifier = "+";
  }
  return `${modifier}${roundedValue}°`;
};
