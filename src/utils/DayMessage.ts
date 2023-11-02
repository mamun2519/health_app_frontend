export function getTimeOfDayMessage() {
  // Get the current date and time
  const currentTime = new Date();

  // Get the current hour (0-23)
  const currentHour = currentTime.getHours();

  // Define the messages for morning, afternoon, evening, and night
  let message = "";

  if (currentHour >= 5 && currentHour < 12) {
    // Morning (5:00 AM to 11:59 AM)
    message = "Good morning!";
  } else if (currentHour >= 12 && currentHour < 18) {
    // Afternoon (12:00 PM to 5:59 PM)
    message = "Good afternoon!";
  } else if (currentHour >= 18 && currentHour < 24) {
    // Evening (6:00 PM to 11:59 PM)
    message = "Good evening!";
  } else {
    // Night (12:00 AM to 4:59 AM)
    message = "Good night!";
  }

  return message;
}

// Call the function to get the message
const greeting = getTimeOfDayMessage();
console.log(greeting);
