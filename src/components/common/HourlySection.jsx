import DropDownDays from "./DropDownDays";
import HourlyStatusCard from "./HourlyStatusCard";
import styles from "./HourlySection.module.css";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

function HourlySection() {
  // const { weatherData } = useContext(WeatherContext);
  // const {} = weatherData;
  return (
    <div className={styles.hourlySection}>
      <div className={styles.filtering}>
        <p>Hourly forecast</p>
        <DropDownDays />
      </div>
      <div className={styles.hourlyList}>
        <HourlyStatusCard />
        <HourlyStatusCard />
        <HourlyStatusCard />
        <HourlyStatusCard />
        <HourlyStatusCard />
        <HourlyStatusCard />
        <HourlyStatusCard />
        <HourlyStatusCard />
      </div>
    </div>
  );
}

export default HourlySection;
