export const formatDate: (date: string | number) => string = (dateString: string | number) => {
  const date = new Date(dateString);

  return `${date.getFullYear()}-${date.getMonth().toString().padStart(2, "0")}-${date
    .getDate()
    .toString()
    .padStart(2, "0")}`;
};
