import { setUnitString, weatherIcon } from "../../context/WeatherContext";
import styles from "./HourlyStatusCard.module.css";

function HourlyStatusCard({ time, temperature, weather_code, unit }) {
  function transformTime(time) {
    if (Number(time) > 12) {
      return time + " PM";
    } else {
      return time + " AM";
    }
  }

  return (
    <div className={styles.hourlyStatusCard}>
      <div className={styles.hourlyStatusCardLeft}>
        <div className={styles.hourlyStatusCardLeftImage}>
          <img src={weatherIcon(weather_code)} alt="" />
        </div>
        <p>{transformTime(time.slice(11, 13))}</p>
      </div>
      <div className={styles.hourlyStatusCardRight}>
        <p>{`${temperature}${setUnitString(unit)}`}</p>
      </div>
    </div>
  );
}

export default HourlyStatusCard;
