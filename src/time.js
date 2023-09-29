const HOURS_IN_SECONDS = 3600;
const DAYS_IN_SECONDS = 24 * HOURS_IN_SECONDS;
const WEEKS_IN_SECONDS = 7 * DAYS_IN_SECONDS;
const YEARS_IN_SECONDS = 365 * DAYS_IN_SECONDS;

function time(seconds) {

  if (seconds === 0) return "0s"

  let result = "";

  if (seconds >= YEARS_IN_SECONDS) {
    const years = Math.floor(seconds / YEARS_IN_SECONDS);
    result += years + "y ";
    seconds -= years * YEARS_IN_SECONDS;
    if (seconds < WEEKS_IN_SECONDS) {
      return result.trim()
    }
  }

  if (seconds >= WEEKS_IN_SECONDS) {
    const weeks = Math.floor(seconds / WEEKS_IN_SECONDS);
    result += weeks + "w ";
    seconds -= weeks * WEEKS_IN_SECONDS;
  }

  if (seconds >= DAYS_IN_SECONDS) {
    const days = Math.floor(seconds / DAYS_IN_SECONDS);
    result += days + "d ";
    seconds -= days * DAYS_IN_SECONDS;
    if (seconds < HOURS_IN_SECONDS) {
      return result.trim()
    }
  }

  if (seconds >= HOURS_IN_SECONDS) {
    const hours = Math.floor(seconds / HOURS_IN_SECONDS);
    result += hours + "h ";
    seconds -= hours * HOURS_IN_SECONDS;
    if (seconds < 60) {
      return result.trim()
    }
  }

  if (seconds >= 60) {
    const minutes = Math.floor(seconds / 60);
    result += minutes + "m ";
    seconds -= minutes * 60;
  }

  if (seconds > 0) {
    result += seconds + "s";
  }

  return result.trim();
}

module.exports = time