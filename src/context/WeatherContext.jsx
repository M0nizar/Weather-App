import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [theCity, setTheCity] = useState("Algiers");
  const [theCountry, setTheCountry] = useState("Algeria");
  const [error, setError] = useState(null);

  const [tempiratureUnit, setTempiratureUnit] = useState("celsius");
  const [windSpeedUnit, setWindSpeedUnit] = useState("kmh");
  const [percipitationUnit, setPercipitationUnit] = useState("mm");

  async function fetching() {
    try {
      setIsLoading(true);

      // fetching for the city coordinates
      const responseCityCoordinates = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${theCity}&count=1`
      );

      // city no found
      const cityData = await responseCityCoordinates.json();
      if (!cityData.results || cityData.results.length === 0) {
        setError("City not found. Please try another city.");
        setWeatherData(null);
      }
      const { latitude, longitude, country } = cityData.results[0];
      setTheCountry(country);

      // fetching for the weather data
      const responseWeatherData = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&forecast_days=7&temperature_unit=${tempiratureUnit}&wind_speed_unit=${windSpeedUnit}&precipitation_unit=${percipitationUnit}&timezone=auto`
      );
      const data = await responseWeatherData.json();
      setWeatherData(data);
    } catch (er) {
      setWeatherData(null);
      setError("something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
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
        error,
        setError,
        fetching,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
