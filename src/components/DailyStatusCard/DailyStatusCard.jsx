import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import styles from "./DailyStatusCard.module.css";
import { setUnitString } from "../../utils/usedFunctions";

function DailyStatusCard({ maximum, minimum, dayName, weatherStatusIcon }) {
  const { tempiratureUnit } = useContext(WeatherContext);
  return (
    <div className={styles.DailyStatusCard}>
      <p>{dayName}</p>
      <div>
        <img src={weatherStatusIcon} alt={weatherStatusIcon} />
      </div>
      <div className={styles.DailyStatusCardRow}>
        <p>{`${minimum}${setUnitString(tempiratureUnit)}`}</p>
        <p>{`${maximum}${setUnitString(tempiratureUnit)}`}</p>
      </div>
    </div>
  );
}

export default DailyStatusCard;
