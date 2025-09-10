import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export function formatDate(dateString) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateString);

  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];

  return [dayName, monthName];
}

export function weatherIcon(code) {
  if ([0, 1].includes(code)) return "/images/Clear-sunny.svg";
  if (code === 2) return "/images/Partly-Cloudy.svg";
  if (code === 3) return "/images/Overcast.svg";
  if ([45, 48].includes(code)) return "/images/Fog.svg";
  if ([51, 53, 55, 56, 57].includes(code)) return "/images/Drizzle.svg";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code))
    return "/images/Rain.svg";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "/images/Snow.svg";
  if ([95, 96, 99].includes(code)) return "/images/Thunderstorms.svg";
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

export function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [theCity, setTheCity] = useState("Algiers");
  const [theCountry, setTheCountry] = useState("Algeria");

  const [tempiratureUnit, setTempiratureUnit] = useState("celsius");
  const [windSpeedUnit, setWindSpeedUnit] = useState("kmh");
  const [percipitationUnit, setPercipitationUnit] = useState("mm");

  useEffect(() => {
    async function fetching() {
      try {
        setIsLoading(true);

        // fetching for the city coordinates
        const responseCityCoordinates = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${theCity}&count=1`
        );
        const cityData = await responseCityCoordinates.json();
        const { latitude, longitude, country } = cityData.results[0];
        setTheCountry(country);

        // fetching for the weather data
        const responseWeatherData = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&forecast_days=7&temperature_unit=${tempiratureUnit}&wind_speed_unit=${windSpeedUnit}&precipitation_unit=${percipitationUnit}&timezone=auto`
        );
        const data = await responseWeatherData.json();
        setWeatherData(data);
      } catch (er) {
        console.log(er);
        setWeatherData(null);
      } finally {
        setIsLoading(false);
      }
    }
    fetching();
  }, [theCity, tempiratureUnit, windSpeedUnit, percipitationUnit]);

  return (
    <WeatherContext.Provider
      value={{
        isLoading,
        weatherData,
        theCity,
        tempiratureUnit,
        windSpeedUnit,
        percipitationUnit,
        theCountry,
        setTheCity,
        setWindSpeedUnit,
        setTempiratureUnit,
        setPercipitationUnit,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
