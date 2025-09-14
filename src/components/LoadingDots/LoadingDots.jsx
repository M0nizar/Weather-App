import styles from "./LoadingDots.module.css"; // Import your CSS file

const LoadingDots = () => {
  return (
    <div className={styles.loadingDots}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};

export default LoadingDots;
