import { CalendarDateTime, Time, DateFormatter, getLocalTimeZone } from "@internationalized/date"
import { useI18n } from '@/composables/useI18n'



export function generateTimeOptions(intervalMinutes = 30) {
  // Create a DateFormatter for time
  const { locale } = useI18n()
  const timeFormatter = new DateFormatter(locale.value, {
    timeStyle: "short"
  })
  const options = []

  for (let hour = 0; hour < 24; hour++) {
    for (let minutes = 0; minutes < 60; minutes += intervalMinutes) {
      const time = new Time(hour, minutes)
      const dateTime = new CalendarDateTime(
        2025, 1, 1, // Dummy date
        time.hour, time.minute, 0
      )
      const formatted = timeFormatter.format(dateTime.toDate(getLocalTimeZone()))
      options.push({
        value: time.toString(), // "08:30"
        label: formatted        // "8:30 AM" or "08:30"
      })
    }
  }

  return options
}
