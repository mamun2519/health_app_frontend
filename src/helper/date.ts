export const convertDate = (date: string): string => {
  const inputDate = new Date(date);

  // Define an array of month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the day, month, and year from the Date object
  const day = inputDate.getUTCDate();
  const monthIndex = inputDate.getUTCMonth();
  const year = inputDate.getUTCFullYear();

  // Format the date in the desired format
  const formattedDate = day + " " + monthNames[monthIndex] + " " + year;
  return formattedDate;
};
