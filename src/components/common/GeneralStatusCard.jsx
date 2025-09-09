import styles from "./generalStatusCard.module.css";
function GeneralStatusCard() {
  return (
    <div className={styles.generalStatusCard}>
      <p>Feels Like</p>
      <p>18°</p>
    </div>
  );
}

export default GeneralStatusCard;
