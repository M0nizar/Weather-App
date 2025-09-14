import DailyStatusCard from "../DailyStatusCard/DailyStatusCard";
import styles from "./DailySection.module.css";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { formatDate, weatherIcon } from "../../utils/usedFunctions";

function DailySection() {
  const { weatherData, isLoading } = useContext(WeatherContext);
  const daysArray = weatherData?.daily.time;
  return (
    <div className={styles.dailySection}>
      <p>Daily Forcast</p>
      <div className={styles.dailySectionList}>
        {isLoading
          ? Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className={styles.skeltonCard}></div>
            ))
          : weatherData?.daily.temperature_2m_max.map((value, index) => (
              <DailyStatusCard
                key={index}
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
