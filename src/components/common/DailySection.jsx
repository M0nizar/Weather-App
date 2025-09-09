import DailyStatusCard from "./DailyStatusCard";
import styles from "./DailySection.module.css";

function DailySection() {
  return (
    <div className={styles.dailySection}>
      <p>Daily Forcast</p>
      <div className={styles.dailySectionList}>
        <DailyStatusCard />
        <DailyStatusCard />
        <DailyStatusCard />
        <DailyStatusCard />
        <DailyStatusCard />
        <DailyStatusCard />
        <DailyStatusCard />
      </div>
    </div>
  );
}

export default DailySection;
