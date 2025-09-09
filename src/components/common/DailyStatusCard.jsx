import styles from "./DailyStatusCard.module.css";

function DailyStatusCard({ maximum, minimum }) {
  return (
    <div className={styles.DailyStatusCard}>
      <p>Tue</p>
      <div>
        <img src="/images/Rain.svg" alt="" />
      </div>
      <div className={styles.DailyStatusCardRow}>
        <p>{`${minimum}°`}</p>
        <p>{`${maximum}°`}</p>
      </div>
    </div>
  );
}

export default DailyStatusCard;
