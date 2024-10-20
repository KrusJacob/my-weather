export const formatDatebyMounth = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "numeric",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};
