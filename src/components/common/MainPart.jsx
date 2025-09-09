import DailySection from "./DailySection";
import GeneralSection from "./GeneralSection";
import HourlySection from "./HourlySection";
import Search from "./Search";
import styles from "./MainPart.module.css";

function MainPart() {
  return (
    <div className={styles.mainPartContainer}>
      <Search />
      <div className={styles.dataSection}>
        <div className={styles.left}>
          <GeneralSection />
          <DailySection />
        </div>
        <div className={styles.right}>
          <HourlySection />
        </div>
      </div>
    </div>
  );
}

export default MainPart;
