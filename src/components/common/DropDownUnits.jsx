import styles from "./DropDownUnits.module.css";

function DropDownUnits() {
  return (
    <div className={styles.dropDownUnits}>
      <div className={styles.dropDownUnitsButton}>
        <div>
          <img src="/icons/Units-Icon.svg" alt="" />
        </div>
        <p>Units</p>
        <div>
          <img src="/icons/Units-Dropdown-Icon.svg" alt="" />
        </div>
      </div>

      <div className={styles.dropDownUnitsContent}>
        <div className={styles.dropDownUnitsContentButton}>
          <p>Switch to Imperial</p>
          <img src="/icons/Daily-Forecast-Title-1.svg" alt="" />
        </div>
        <div className={styles.dropDownUnitsContentSection}>
          <p className={styles.subtitle}>Temperature</p>
          <div>
            <div className={styles.dropDownUnitsContentButton}>
              <p>Celsius (°C)</p>
              <img src="/icons/Daily-Forecast-Title-1.svg" alt="" />
            </div>
            <div className={styles.dropDownUnitsContentButton}>
              <p>Fahrenheit (°F)</p>
              <img src="/icons/Daily-Forecast-Title-1.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className={styles.dropDownUnitsContentSection}>
          <p className={styles.subtitle}>Wind Speed</p>
          <div>
            <div className={styles.dropDownUnitsContentButton}>
              <p>Km/h</p>
              <img src="/icons/Daily-Forecast-Title-1.svg" alt="" />
            </div>
            <div className={styles.dropDownUnitsContentButton}>
              <p>mph</p>
              <img src="/icons/Daily-Forecast-Title-1.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className={styles.dropDownUnitsContentSection}>
          <p className={styles.subtitle}>Precipitation</p>
          <div>
            <div className={styles.dropDownUnitsContentButton}>
              <p> Millimeters(mm)</p>
              <img src="/icons/Daily-Forecast-Title-1.svg" alt="" />
            </div>
            <div className={styles.dropDownUnitsContentButton}>
              <p> Inches(in)</p>
              <img src="/icons/Daily-Forecast-Title-1.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDownUnits;
