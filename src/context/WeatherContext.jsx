import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

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
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&forecast_days=7&temperature_unit=${tempiratureUnit}&wind_speed_unit=${windSpeedUnit}&precipitation_unit=${percipitationUnit}&timezone=auto`
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
