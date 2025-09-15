import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchSuggestions, setSearchSuggetions] = useState([]);
  const [selectedCity, setSelectedCity] = useState({});
  const [enteredCityGlobal, setEnteredCityGlobal] = useState("");

  const [tempiratureUnit, setTempiratureUnit] = useState("celsius");
  const [windSpeedUnit, setWindSpeedUnit] = useState("kmh");
  const [percipitationUnit, setPercipitationUnit] = useState("mm");

  async function fetchingCurrent() {
    if (!navigator.geolocation) {
      setError("Geolocation not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await response.json();
          const currentCity = data.address.state;
          const currentCountry = data.address.country;
          setSelectedCity({
            name: currentCity,
            latitude,
            longitude,
            country: currentCountry,
          });
        } catch (e) {
          setError(e.message || "Failed to detect current city.");
        }
      },
      (err) => setError(err.message),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  }

  async function fetchingSuggestedCities() {
    try {
      if (enteredCityGlobal.length === 0 || !enteredCityGlobal) return;
      // fetching for the city coordinates
      const responseCityCoordinates = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${enteredCityGlobal}&count=5`
      );

      // city no found
      const cityData = await responseCityCoordinates.json();
      console.log(cityData);
      if (!cityData.results || cityData.results.length === 0) {
        setError("City not found. Please try another city.");
        setSearchSuggetions([]);
        return;
      }
      setError(null);
      setSearchSuggetions(cityData.results);
    } catch (er) {
      setError(er.message);
      setSearchSuggetions([]);
    }
  }

  async function fetchingSelectedCity(cityData) {
    if (!cityData || !cityData.latitude || !cityData.longitude) {
      setError("Invalid city data provided.");
      return;
    }
    try {
      setIsLoading(true);
      setError(null);
      const { latitude, longitude } = cityData;

      // fetching for the weather data
      const responseWeatherData = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&forecast_days=7&temperature_unit=${tempiratureUnit}&wind_speed_unit=${windSpeedUnit}&precipitation_unit=${percipitationUnit}&timezone=auto`
      );
      const data = await responseWeatherData.json();
      setWeatherData(data);
    } catch (er) {
      setWeatherData(null);
      setError(er.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchingCurrent();
  }, []);

  useEffect(() => {
    fetchingSuggestedCities();
  }, [enteredCityGlobal]);

  useEffect(() => {
    if (selectedCity?.latitude && selectedCity?.longitude) {
      fetchingSelectedCity(selectedCity);
    }
  }, [selectedCity, tempiratureUnit, windSpeedUnit, percipitationUnit]);

  return (
    <WeatherContext.Provider
      value={{
        isLoading,
        weatherData,
        tempiratureUnit,
        windSpeedUnit,
        percipitationUnit,
        error,
        searchSuggestions,
        selectedCity,
        enteredCityGlobal,
        setError,
        fetchingSelectedCity,
        setSearchSuggetions,
        setSelectedCity,
        setWindSpeedUnit,
        setTempiratureUnit,
        setPercipitationUnit,
        setEnteredCityGlobal,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
