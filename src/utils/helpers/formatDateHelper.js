export function formatDate(dateCalendarObj) {
  // Use your desired format (e.g., YYYY-MM-DD)
  return `${dateCalendarObj.year}-${String(dateCalendarObj.month).padStart(2, "0")}-${String(dateCalendarObj.day).padStart(2, "0")}`;
}
