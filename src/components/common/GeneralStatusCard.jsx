import styles from "./generalStatusCard.module.css";
function GeneralStatusCard({ title, value }) {
  return (
    <div className={styles.generalStatusCard}>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  );
}

export default GeneralStatusCard;
