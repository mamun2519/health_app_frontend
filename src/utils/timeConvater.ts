export function convertToAmPm(timeStr: string) {
  try {
    // Parse the input time string

    const [hours, minutes] = timeStr.split(":");
    const parsedHours = parseInt(hours, 10);
    const parsedMinutes = parseInt(minutes, 10);

    // Determine whether it's AM or PM
    const period = parsedHours < 12 ? "AM" : "PM";

    // Convert to 12-hour format
    let formattedHours = parsedHours % 12;
    if (formattedHours === 0) {
      formattedHours = 12;
    }

    // Format the result as a string
    const resultTime = `${formattedHours}:${minutes} ${period}`;

    return resultTime;
  } catch (error) {
    return "Invalid time format";
  }
}

// Example usage:
const inputTime = "19:45";
const convertedTime = convertToAmPm(inputTime);
// Output: "7:45 PM"
