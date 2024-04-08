export const isToday = (date: string) => {
  return new Date(date).getDate() === new Date().getDate();
};
