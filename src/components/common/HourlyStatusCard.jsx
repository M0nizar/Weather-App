import styles from "./HourlyStatusCard.module.css";

function HourlyStatusCard() {
  return (
    <div className={styles.hourlyStatusCard}>
      <div className={styles.hourlyStatusCardLeft}>
        <div className={styles.hourlyStatusCardLeftImage}>
          <img src="/images/Partly-Cloudy.svg" alt="" />
        </div>
        <p>3 PM</p>
      </div>
      <div className={styles.hourlyStatusCardRight}>
        <p>20°</p>
      </div>
    </div>
  );
}

export default HourlyStatusCard;
