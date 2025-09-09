import DropDownDays from "./DropDownDays";
import HourlyStatusCard from "./HourlyStatusCard";
import styles from "./HourlySection.module.css";

function HourlySection() {
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
