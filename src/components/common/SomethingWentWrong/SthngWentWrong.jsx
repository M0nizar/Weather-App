import { useContext } from "react";
import styles from "./SthngWentWrong.module.css";
import { WeatherContext } from "../../../context/WeatherContext";


function SthngWentWrong() {
  const { fetching, setError } = useContext(WeatherContext);
  return (
    <div className={styles.smthngWrong}>
      <div className={styles.wrongImage}>
        <img src="/icons/wrong.svg" alt="" />
      </div>
      <p>Something went wrong</p>
      <p>
        We couldn’t connect to the server (API error). Please try again in a few
        moments.
      </p>
      <div
        className={styles.retryButton}
        onClick={() => {
          setError(null);
          fetching();
        }}
      >
        <img src="/icons/retry.svg" alt="" />
        <p>Retry</p>
      </div>
    </div>
  );
}

export default SthngWentWrong;
