import { days, months } from "../constants/data";

export function weatherIcon(code) {
  if ([0, 1].includes(code)) return "images/Clear-sunny.svg";
  if (code === 2) return "images/Partly-Cloudy.svg";
  if (code === 3) return "images/Overcast.svg";
  if ([45, 48].includes(code)) return "images/Fog.svg";
  if ([51, 53, 55, 56, 57].includes(code)) return "images/Drizzle.svg";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code))
    return "images/Rain.svg";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "images/Snow.svg";
  if ([95, 96, 99].includes(code)) return "images/Thunderstorms.svg";
  return "Unknown";
}

export function setUnitString(unit) {
  switch (unit) {
    case "celsius":
      return "°C";
    case "fahrenheit":
      return "°F";
    case "kmh":
      return "km/h";
    default:
      return unit;
  }
}

export function formatDate(dateString) {
  const date = new Date(dateString);

  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];

  return [dayName, monthName];
}

export function uppercaseTheFirstLetter(word) {
  const lowercase = word.toLowerCase();
  return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
}
