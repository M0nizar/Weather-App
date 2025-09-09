import DailyStatusCard from "./DailyStatusCard";
import styles from "./DailySection.module.css";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

function DailySection() {
  const { weatherData, tempiratureUnit, windSpeedUnit, percipitationUnit } =
    useContext(WeatherContext);
  return (
    <div className={styles.dailySection}>
      <p>Daily Forcast</p>
      <div className={styles.dailySectionList}>
        {weatherData?.daily.temperature_2m_max.map((value, index) => (
          <DailyStatusCard
            maximum={value}
            minimum={weatherData?.daily.temperature_2m_min[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default DailySection;
