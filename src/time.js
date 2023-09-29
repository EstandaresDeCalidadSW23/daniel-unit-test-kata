const HOURS_IN_SECONDS = 3600;
const DAYS_IN_SECONDS = 24 * HOURS_IN_SECONDS;
const WEEKS_IN_SECONDS = 7 * DAYS_IN_SECONDS;
const YEARS_IN_SECONDS = 365 * DAYS_IN_SECONDS;

function time(seconds) {
    // here is where you write your code...

    if (seconds >= 60) {
        const minutes = seconds / 60
        return minutes + "m"
    }

    return seconds + "s"
 }
 
 module.exports = time