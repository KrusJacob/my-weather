export const formatDate = (date: Date) => {
  //   const options: Intl.DateTimeFormatOptions = {
  //     hour: "2-digit",
  //     minute: "2-digit",

  //     hour12: false,
  //   };

  //   return date.toLocaleDateString("en-US", options);
  return date.toLocaleTimeString().slice(0, 5);
};
