import GeneralStatusCard from "./GeneralStatusCard";
import styles from "./GeneralSection.module.css";

function GeneralSection() {
  return (
    <div className={styles.generalSection}>
      <div className={styles.generalSectionCard}>
        <div className={styles.generalSectionCardLeft}>
          <p>Berlin, Germany</p>
          <p>Tuesday, Aug 5 , 2025</p>
        </div>
        <div className={styles.generalSectionCardRight}>
          <div className="general-section-card-right-image">
            <img src="/images/Rain.svg" alt="image" />
          </div>
          <p>20°</p>
        </div>
      </div>
      <div className={styles.generalSectionStatusList}>
        <GeneralStatusCard />
        <GeneralStatusCard />
        <GeneralStatusCard />
        <GeneralStatusCard />
      </div>
    </div>
  );
}

export default GeneralSection;
