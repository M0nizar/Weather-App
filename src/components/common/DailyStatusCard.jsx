import styles from "./DailyStatusCard.module.css";

function DailyStatusCard() {
  return (
    <div className={styles.DailyStatusCard}>
      <p>Tue</p>
      <div>
        <img src="/images/Rain.svg" alt="" />
      </div>
      <div className={styles.DailyStatusCardRow}>
        <p>20°</p>
        <p>14°</p>
      </div>
    </div>
  );
}

export default DailyStatusCard;
