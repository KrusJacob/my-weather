export const formatDateSlice = (date: Date, slice = 5) => {
  return date.toLocaleTimeString().slice(0, slice);
};
