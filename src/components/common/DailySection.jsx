import DailyStatusCard from "./DailyStatusCard";
import styles from "./DailySection.module.css";
import { useContext } from "react";
import {
  formatDate,
  WeatherContext,
  weatherIcon,
} from "../../context/WeatherContext";

function DailySection() {
  const { weatherData, tempiratureUnit, windSpeedUnit, percipitationUnit } =
    useContext(WeatherContext);
  const daysArray = weatherData?.daily.time;
  return (
    <div className={styles.dailySection}>
      <p>Daily Forcast</p>
      <div className={styles.dailySectionList}>
        {weatherData?.daily.temperature_2m_max.map((value, index) => (
          <DailyStatusCard
            maximum={value}
            minimum={weatherData?.daily.temperature_2m_min[index]}
            dayName={formatDate(daysArray[index])[0].slice(0, 3)}
            weatherStatusIcon={weatherIcon(
              weatherData?.daily.weather_code[index]
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default DailySection;
