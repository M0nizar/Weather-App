import { useContext } from "react";
import styles from "./generalStatusCard.module.css";
import { WeatherContext } from "../../../context/WeatherContext";
function GeneralStatusCard({ title, value }) {
  const { isLoading } = useContext(WeatherContext);
  return (
    <div className={styles.generalStatusCard}>
      <p>{title}</p>
      <p>{isLoading ? "_" : value}</p>
    </div>
  );
}

export default GeneralStatusCard;
