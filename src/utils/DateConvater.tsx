export function formatDateToYYYYMMDD(dateString: string) {
  const originalDate = new Date(dateString);

  if (isNaN(originalDate.getTime())) {
    return "Invalid Date";
  }

  const year = originalDate.getFullYear();
  const month = (originalDate.getMonth() + 1).toString().padStart(2, "0");
  const day = originalDate.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// Example usage:
// const originalDateString =
//   "Sun Oct 15 2023 19:03:24 GMT+0600 (Bangladesh Standard Time)";
// const formattedDate = formatDateToYYYYMMDD(originalDateString);
// console.log(formattedDate); // Output: "2023-10-15"
